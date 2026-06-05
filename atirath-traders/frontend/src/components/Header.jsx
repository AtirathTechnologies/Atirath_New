import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';
import { auth, database } from '../firebase';
import profileAvatar from '../assets/profile-avatar.png';

const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 150;
        const MAX_HEIGHT = 150;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
    };
  });
};

const Header = () => {
  const navigate = useNavigate();
  const { categories, brands } = useProducts();
  const [openDropdown, setOpenDropdown] = useState(null);
  const productsRef = useRef(null);
  const brandsRef = useRef(null);
  const servicesRef = useRef(null);
  const profileRef = useRef(null);

  // Authentication State
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Edit Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editError, setEditError] = useState('');
  const [editSuccess, setEditSuccess] = useState('');
  const [editLoading, setEditLoading] = useState(false);
  const [tempImage, setTempImage] = useState(null);

  const handleStartEdit = () => {
    setEditName(userData?.name || '');
    setEditPhone(userData?.phone || '');
    setEditAddress(userData?.address || '');
    setTempImage(userData?.profileImage || null);
    setEditError('');
    setEditSuccess('');
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTempImage(null);
    setEditError('');
    setEditSuccess('');
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditError('');
      // Basic size validation (limit raw file to 5MB to avoid canvas issues)
      if (file.size > 5 * 1024 * 1024) {
        setEditError('Image is too large. Please select an image under 5MB.');
        return;
      }
      try {
        const compressed = await compressImage(file);
        setTempImage(compressed);
      } catch (err) {
        console.error("Error processing image:", err);
        setEditError('Failed to process image. Please try another one.');
      }
    }
  };

  const handleSaveProfile = async () => {
    if (!editName.trim() || !editPhone.trim() || !editAddress.trim()) {
      setEditError('All fields are required.');
      return;
    }
    setEditLoading(true);
    setEditError('');
    try {
      const userRef = ref(database, 'users/' + currentUser.uid);
      await set(userRef, {
        ...userData,
        name: editName,
        phone: editPhone,
        address: editAddress,
        profileImage: tempImage
      });
      setEditSuccess('Profile saved successfully!');
      setTimeout(() => {
        setIsEditing(false);
        setEditSuccess('');
      }, 1200);
    } catch (err) {
      console.error(err);
      setEditError('Failed to save profile. Please try again.');
    } finally {
      setEditLoading(false);
    }
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    let unsubscribeDb = null;

    // 1. Listen to Firebase Authentication State Changes
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      // Clean up previous database listener if any
      if (unsubscribeDb) {
        unsubscribeDb();
        unsubscribeDb = null;
      }

      if (user) {
        // Listen to custom user details in real-time
        const userRef = ref(database, 'users/' + user.uid);
        unsubscribeDb = onValue(userRef, (snapshot) => {
          if (snapshot.exists()) {
            setUserData(snapshot.val());
          } else {
            setUserData({ name: user.email.split('@')[0] });
          }
        }, (err) => {
          console.error("Error fetching user data from DB:", err);
          setUserData({ name: user.email.split('@')[0] });
        });
      } else {
        setUserData(null);
      }
    });

    // 2. Click Outside Listener for Dropdowns
    const handleClickOutside = (event) => {
      // Close navigation dropdowns if clicked outside
      if (
        productsRef.current && !productsRef.current.contains(event.target) &&
        brandsRef.current && !brandsRef.current.contains(event.target) &&
        servicesRef.current && !servicesRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }

      // Close profile dropdown if clicked outside
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      unsubscribeAuth();
      if (unsubscribeDb) unsubscribeDb();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfileMenu(false);
      navigate('/');
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleItemClick = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  // Build products dropdown from dynamic categories
  const categoriesDropdown = categories.map(cat => ({
    name: cat,
    path: `/products?category=${encodeURIComponent(cat)}`
  }));

  // Brands dropdown from dynamic brands
  const brandsDropdown = brands.map(brand => ({
    name: brand,
    path: `/brands?brand=${encodeURIComponent(brand)}`
  }));

  const servicesDropdown = [
    { name: 'Import Services', path: '/services/import' },
    { name: 'Export Services', path: '/services/export' },
    { name: 'Global Sourcing', path: '/services/global-sourcing' },
    { name: 'Logistics Support', path: '/services/logistics-support' },
    { name: 'Custom Solutions', path: '/services/custom-solutions' },
  ];

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'transparent' }}>
      <div className="main-header">
        <div className="container header-content">
          <div className="logo-area">
            <NavLink to="/">
              <img src="../Logo_4.png" alt="Atirath Traders Logo" className="header-logo" />
            </NavLink>
          </div>

          <div className="search-wrapper">
            <select>
              <option>All Categories</option>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
            <input type="text" placeholder="Search products, categories or suppliers..." />
            <button>Search</button>
          </div>

          <div className="header-icons">
            {currentUser ? (
              <div className="header-profile-container" ref={profileRef}>
                <div className="header-profile-trigger" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                  {userData?.profileImage ? (
                    <img src={userData.profileImage} alt="User Profile" className="header-profile-avatar" />
                  ) : (
                    <div className="header-profile-initial">
                      {userData?.name ? userData.name.trim().charAt(0).toUpperCase() : currentUser.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                {showProfileMenu && (
                  <div className="profile-dropdown-menu">
                    <button className="profile-close-btn" onClick={() => { setShowProfileMenu(false); setIsEditing(false); }}>
                      <i className="fas fa-times"></i>
                    </button>
                    {isEditing ? (
                      <>
                        <div className="profile-avatar-container edit-avatar-container">
                          {tempImage ? (
                            <img src={tempImage} alt="Profile Avatar Preview" className="profile-avatar-img" />
                          ) : (
                            <div className="profile-avatar-initial">
                              {userData?.name ? userData.name.trim().charAt(0).toUpperCase() : currentUser.email.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <label htmlFor="profile-upload" className="btn-upload-photo">
                            <i className="fas fa-camera"></i> Change Photo
                          </label>
                          <input 
                            type="file" 
                            id="profile-upload" 
                            accept="image/*" 
                            onChange={handleImageChange} 
                            style={{ display: 'none' }} 
                            disabled={editLoading}
                          />
                        </div>
                        <div className="profile-details">
                          <p><strong>User ID:</strong> <span className="theme-text">user-{currentUser.uid.substring(0, 5).toLowerCase()}</span></p>
                          {editError && <div className="edit-profile-error">{editError}</div>}
                          {editSuccess && <div className="edit-profile-success">{editSuccess}</div>}
                          <div className="profile-input-group">
                            <label>Name</label>
                            <input 
                              type="text" 
                              value={editName} 
                              onChange={(e) => setEditName(e.target.value)} 
                              className="profile-edit-input"
                              disabled={editLoading}
                              placeholder="enter full name"
                            />
                          </div>
                          <div className="profile-input-group">
                            <label>Phone</label>
                            <input 
                              type="tel" 
                              value={editPhone} 
                              onChange={(e) => setEditPhone(e.target.value)} 
                              className="profile-edit-input"
                              disabled={editLoading}
                              placeholder="enter phone number"
                            />
                          </div>
                          <div className="profile-input-group">
                            <label>Address</label>
                            <input 
                              type="text" 
                              value={editAddress} 
                              onChange={(e) => setEditAddress(e.target.value)} 
                              className="profile-edit-input"
                              disabled={editLoading}
                              placeholder="enter address"
                            />
                          </div>
                        </div>
                        <div className="profile-action-buttons">
                          <button className="btn-save-profile" onClick={handleSaveProfile} disabled={editLoading}>
                            {editLoading ? 'Saving...' : 'Save'}
                          </button>
                          <button className="btn-cancel-profile" onClick={handleCancelEdit} disabled={editLoading}>
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="profile-avatar-container">
                          {userData?.profileImage ? (
                            <img src={userData.profileImage} alt="Profile Avatar" className="profile-avatar-img" />
                          ) : (
                            <div className="profile-avatar-initial">
                              {userData?.name ? userData.name.trim().charAt(0).toUpperCase() : currentUser.email.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="profile-details">
                          <p><strong>User ID:</strong> <span className="theme-text">user-{currentUser.uid.substring(0, 5).toLowerCase()}</span></p>
                          <p><strong>Name:</strong> {userData?.name || 'N/A'}</p>
                          <p><strong>Email:</strong> {currentUser.email}</p>
                          <p><strong>Phone:</strong> {userData?.phone || 'N/A'}</p>
                          <p><strong>Address:</strong> {userData?.address || 'N/A'}</p>
                        </div>
                        <div className="profile-action-buttons">
                          <button className="btn-edit-profile" onClick={handleStartEdit}>Edit Profile</button>
                          <button className="btn-logout" onClick={handleLogout}>Logout</button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="header-auth-buttons">
                <NavLink to="/signin" className="btn-header-login">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn-header-signup">
                  Sign Up
                </NavLink>
              </div>
            )}
            <div className="icon-cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-badge">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container">
          <ul className="nav-menu">
            <li><NavLink to="/" end>Home</NavLink></li>

            {/* Products Dropdown */}
            <li className="dropdown" ref={productsRef}>
              <span className={`nav-link-custom ${openDropdown === 'products' ? 'active' : ''}`} onClick={() => toggleDropdown('products')}>
                Products <i className="fas fa-chevron-down small-arrow"></i>
              </span>
              {openDropdown === 'products' && (
                <ul className="dropdown-menu show">
                  {categoriesDropdown.map((cat, idx) => (
                    <li key={idx} onClick={() => handleItemClick(cat.path)}>
                      <span>{cat.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Brands Dropdown - added class "brands-dropdown" for scroll */}
            <li className="dropdown" ref={brandsRef}>
              <span className={`nav-link-custom ${openDropdown === 'brands' ? 'active' : ''}`} onClick={() => toggleDropdown('brands')}>
                Brands <i className="fas fa-chevron-down small-arrow"></i>
              </span>
              {openDropdown === 'brands' && (
                <ul className="dropdown-menu show brands-dropdown">
                  {brandsDropdown.map((brand, idx) => (
                    <li key={idx} onClick={() => handleItemClick(brand.path)}>
                      <span>{brand.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li className="dropdown" ref={servicesRef}>
              <span className={`nav-link-custom ${openDropdown === 'services' ? 'active' : ''}`} onClick={() => toggleDropdown('services')}>
                Services <i className="fas fa-chevron-down small-arrow"></i>
              </span>
              {openDropdown === 'services' && (
                <ul className="dropdown-menu show">
                  {servicesDropdown.map((service, idx) => (
                    <li key={idx} onClick={() => handleItemClick(service.path)}>
                      <span>{service.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;