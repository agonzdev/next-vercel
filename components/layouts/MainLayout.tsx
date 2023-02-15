import Head from 'next/head'
import { NavBar} from '../NavBar'
import styles from '@/styles/MainLayout.module.css'
import { FC } from 'react'


interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({children}) => {
  return (
        <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>

        {children}
  
      </main>
    </div>
  )
}
