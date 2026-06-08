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
  const { categories } = useProducts();
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

    // 2. Click Outside Listener for Profile Menu
    const handleClickOutside = (event) => {
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

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Dynamically calculate select width based on the selected option's text
  const getDropdownWidth = () => {
    const text = selectedCategory ? selectedCategory : 'All Categories';
    // Approximately 8.5px per character + 32px padding for arrow
    return `${text.length * 8.5 + 32}px`;
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('search', searchQuery.trim());
    if (selectedCategory) params.set('category', selectedCategory);
    navigate(`/products?${params.toString()}`);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'transparent' }}>
      <div className="main-header">
        <div className="container header-content">
          <div className="col-6 col-lg-auto order-1 text-start">
            <NavLink to="/">
              <img src="../Logo_4.png" alt="Atirath Traders Logo" className="header-logo" />
            </NavLink>
          </div>

          <div className="col-12 col-lg order-3 order-lg-2 d-flex justify-content-center">
            <div className="search-wrapper">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{ width: getDropdownWidth() }}
              >
                <option value="">All Categories</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <input
                type="text"
                placeholder="Search products, categories or suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>

          <div className="col-6 col-lg-auto order-2 order-lg-3 d-flex justify-content-end align-items-center">
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
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container">
          <ul className="nav-menu">
            <li><NavLink to="/" end>Home</NavLink></li>

            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/brands">Brands</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>

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