import type { NextPage } from 'next';
import Home from '@pages/home/Home';

const Main: NextPage = () => {
  return (
    <div>
      <main>
        <Home />
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Main;
