import type { NextPage } from 'next';
import styles from 'styles/Home.module.scss';
import time from '@utils/time';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const a = time.now().getDate();

  const onClickBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h3>{a}</h3>

        <button onClick={onClickBack}>back</button>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
