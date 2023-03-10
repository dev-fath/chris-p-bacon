import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import AppLayout from '@components/layout/AppLayout';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
