import React from 'react';
import styles from './Navbar.module.css';
import WalletIcon from '../../assets/icons/ui/wallet.svg';
import CrownIcon from '../../assets/icons/ui/crown.svg';
import GiftIcon from '../../assets/icons/ui/gift.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.balanceSection}>
          <img src={WalletIcon} alt="Balance" className={styles.icon} />
          <div className={styles.balanceInfo}>
            <span className={styles.label}>Balance</span>
            <span className={styles.amount}>$1,250.50</span>
          </div>
        </div>

        <div className={styles.vipSection}>
          <img src={CrownIcon} alt="VIP" className={styles.icon} />
          <span>VIP Level 3</span>
        </div>

        <div className={styles.bonusSection}>
          <img src={GiftIcon} alt="Bonus" className={styles.icon} />
          <span>Available Bonuses: 3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;