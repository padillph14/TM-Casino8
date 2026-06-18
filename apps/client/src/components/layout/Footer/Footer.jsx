import React from 'react';
import styles from './Footer.module.css';
import TelegramIcon from '../../assets/icons/social/telegram.svg';
import ViberIcon from '../../assets/icons/social/viber.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About TM Casino</h4>
          <p>Premium online gaming platform with secure transactions and fair gameplay.</p>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Support</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/support">Live Chat Support</a></li>
            <li><a href="/deposit">Deposit Methods</a></li>
            <li><a href="/withdraw">Withdraw</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <a href="#" className={styles.social}>
              <img src={TelegramIcon} alt="Telegram" />
            </a>
            <a href="#" className={styles.social}>
              <img src={ViberIcon} alt="Viber" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 TM Casino. All rights reserved. | License: 12345</p>
      </div>
    </footer>
  );
};

export default Footer;