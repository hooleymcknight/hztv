import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import LiveNow from '@/components/homepage/LiveNow'

export default function Home() {

  return (
    <>
      <Head>
        <title>H E A R T Z O N E . t v</title>
      </Head>
      <main className={styles.main}>
        <LiveNow />
        <h2>Recently Added</h2>
        <h2>Clips of the Month</h2>
        <h2>Popular Series</h2>
        <h2>HZTV</h2>
        <h2>Podcasts</h2>
      </main>
    </>
  )
}
