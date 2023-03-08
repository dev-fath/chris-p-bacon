import React, { useContext } from 'react';
import styles from '@styles/Sidebar.module.scss';
import Link from 'next/link';
import { SidebarContext } from 'context/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleToggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <span>
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
          <div className={styles.menus}>
            <Link href="/">HOME</Link>
            <Link href="/mypage/MyPage">MY_PAGE</Link>
            <Link href="/contact/Contact">CONTACT</Link>
          </div>
          <button onClick={handleToggleSidebar}>닫기</button>
        </div>
        <div
          onClick={isOpen ? handleToggleSidebar : () => {}}
          style={{
            height: isOpen ? '100%' : '0%',
            width: isOpen ? '100%' : '0%',
            background: 'transparent',
            position: 'absolute',
          }}
        ></div>
      </span>
      <div></div>
      <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
    </>
  );
};

export default Sidebar;
