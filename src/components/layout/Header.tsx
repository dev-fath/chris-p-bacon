import React, { useContext } from 'react';
import { SidebarContext } from '@contexts/SidebarContext';
import Avatar from '@components/common/Avatar';
import styles from './Header.module.scss';
import IconBase from '@assets/icons/IconBase';
import Link from 'next/link';

const Header = () => {
  const { handleToggleSidebar } = useContext(SidebarContext);

  return (
    <div className={styles.fixed}>
      <div className={styles.container}>
        <div className={styles.headerSide}>
          <a onClick={handleToggleSidebar}>
            <Avatar
              imageSrc={'https://pbs.twimg.com/profile_images/1169070430583283712/oTJrXisj_x96.jpg'}
            />
          </a>
        </div>
        <Link href={'/'}>
          <IconBase icon={'twitter'} iconStyle={{ height: 24, width: 24, color: '#6af' }} />
        </Link>
        <div className={styles.headerSide} />
      </div>
    </div>
  );
};

export default Header;
