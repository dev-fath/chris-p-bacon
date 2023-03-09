import React, { useContext } from 'react';
import { SidebarContext } from '@contexts/SidebarContext';
import Avatar from '@components/common/Avatar';
import styles from './Header.module.scss';

const Header = () => {
  const { handleToggleSidebar } = useContext(SidebarContext);

  return (
    <div className={styles.container}>
      <a onClick={handleToggleSidebar}>
        <Avatar
          imageSrc={'https://pbs.twimg.com/profile_images/1169070430583283712/oTJrXisj_x96.jpg'}
        />
      </a>
    </div>
  );
};

export default Header;
