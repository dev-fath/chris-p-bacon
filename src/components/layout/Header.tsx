import React from 'react';
import styles from './Header.module.scss';
import IconBase from '@assets/icons/IconBase';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logoBox}>
        <IconBase icon={'logo'} iconStyle={{ height: 24, width: 24 }} />
        <span className={styles.logoText}>TuruTalk</span>
      </Link>
    </div>
  );
};

export default Header;
