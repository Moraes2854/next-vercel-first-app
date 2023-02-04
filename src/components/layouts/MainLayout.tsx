import Head from 'next/head'
import styles from './MainLayout.module.css';
import { Navbar } from '@/components/Navbar';
import { FC, ReactElement } from 'react';

interface MainLayoutProps {
  children:ReactElement|ReactElement[];
  title:string;
}

export const MainLayout:FC<MainLayoutProps> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>Santiago</title>
        <meta name="description" content={`Page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={ styles.main }>

        <div className={ styles.description }>
          { children }
        </div>

      </main>

    </>
  )
}