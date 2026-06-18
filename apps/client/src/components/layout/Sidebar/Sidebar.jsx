import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import HomeIcon from '../../assets/icons/ui/home.svg';
import CasinoIcon from '../../assets/icons/ui/casino.svg';
import WalletIcon from '../../assets/icons/ui/wallet.svg';
import ChatIcon from '../../assets/icons/ui/chat.svg';
import SettingsIcon from '../../assets/icons/ui/settings.svg';
import MenuIcon from '../../assets/icons/ui/menu.svg';
import CloseIcon from '../../assets/icons/ui/close.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: HomeIcon, label: 'Home', href: '/' },
    { icon: CasinoIcon, label: 'Games', href: '/games' },
    { icon: WalletIcon, label: 'Wallet', href: '/wallet' },
    { icon: ChatIcon, label: 'Support', href: '/support' },
    { icon: SettingsIcon, label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      <button className={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src={CloseIcon} alt="Close" />
        ) : (
          <img src={MenuIcon} alt="Menu" />
        )}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className={styles.navItem}>
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;