import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/icons/ui/logo-white.svg';
import SearchIcon from '../../assets/icons/ui/search.svg';
import BellIcon from '../../assets/icons/ui/bell.svg';
import UserIcon from '../../assets/icons/ui/user.svg';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={Logo} alt="TM Casino" />
          </div>
        </div>

        <div className={styles.center}>
          <div className={`${styles.searchBox} ${isSearchActive ? styles.active : ''}`}>
            <img src={SearchIcon} alt="Search" className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search games..."
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => setIsSearchActive(false)}
            />
          </div>
        </div>

        <div className={styles.right}>
          <button className={styles.notificationBtn}>
            <img src={BellIcon} alt="Notifications" />
            <span className={styles.badge}>3</span>
          </button>
          <button className={styles.userBtn}>
            <img src={UserIcon} alt="User" />
            <span>Account</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;