import type { NextPage } from 'next';
import time from '@utils/time';
import TwitCard from '@components/feeds/card/TwitCard';
import styles from './Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      {[1, 1, 1, 1, 1].map(() => {
        return <TwitCard key={time.now().getUTCMilliseconds()} />;
      })}
    </div>
  );
};

export default Home;
