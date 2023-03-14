import type { PropsWithChildren, ReactNode } from 'react';
import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from '@components/Sidebar';
import SidebarProvider from 'contexts/SidebarContext';
import Header from '@components/layout/Header';

let isBack = false;

const AppLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  useEffect(() => {
    router.beforePopState((state) => {
      if (state.as !== router.asPath) {
        isBack = true;
      }
      return true;
    });

    return () => {
      isBack = false;
      router.beforePopState(() => true);
    };
  }, [router]);

  return (
    <SidebarProvider>
      <div style={{ height: '100vh' }}>
        <Head>
          <title>Jack Jack</title>
          <meta name="description" content="Twitter clone" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <Sidebar />
        <TransitionGroup
          childFactory={(child) =>
            React.cloneElement(child, {
              classNames: isBack ? 'left-to-right' : 'right-to-left',
              timeout: 300,
            })
          }
        >
          <CSSTransition key={router.pathname} classNames="right-to-left" timeout={300}>
            <div>{children}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
