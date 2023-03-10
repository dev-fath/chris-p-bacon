import React from 'react';
import styles from './Avatar.module.scss';
import Image from 'next/image';

const Avatar = (props: { imageSrc: string; size?: number }) => {
  const { imageSrc, size = 30 } = props;

  return (
    <div className={styles.avatarWrapper}>
      <Image className={styles.avatar} width={size} height={size} src={imageSrc} alt={'avatar'} />
    </div>
  );
};

export default Avatar;
