import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David does Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my very first Nextjs adventure
        </h1>

        <p>
          First non-boilerplate page, yeehaw!
        </p>

        <Link href="/posts/first-post">
          <a>Check it out here!</a>
        </Link>
              
      </main>

      <footer className={styles.footer}>
     
      </footer>
    </div>
  )
}
