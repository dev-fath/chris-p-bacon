import React from 'react';
import styles from './Avatar.module.scss';
import Image from 'next/image';

const Avatar = (props: { imageSrc: string }) => {
  return (
    <Image
      className={styles.avatar}
      width={30}
      height={30}
      src={props.imageSrc}
      alt={'thumbnail'}
    />
  );
};

export default Avatar;
