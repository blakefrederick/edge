import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const getServerSideProps = ({ query }) => ({
  props: query
})

export default function Home({ from_middleware }) {
  console.log(from_middleware)
  return (
    <div className={styles.container}>
      <Head>
        <title>Edge</title>
        <meta name="description" content="Testing Next.js Edge API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { from_middleware &&
          <p className={styles.description}>
            <code className={styles.code}>Redirected from /redirect!</code>
          </p>
        }
        <h1 className={styles.title}>
          Hey <a href="https://blakefrederick.com">-</a>
        </h1>

        <p className={styles.description}>
          Just some boring programmer tests.{' '}
          <code className={styles.code}>Node v Edge</code>
        </p>

        <div className={styles.grid}>
          <Link href="/api/hello" className={styles.card}>
            <a>
              <h2>Hello &rarr;</h2>
              <p>Regular API route.</p>
            </a>
          </Link>

          <Link href="/api/hello" className={styles.card}>
            <a>
              <h2>Edge &rarr;</h2>
              <p>Edge API Routes (Beta)</p>
            </a>
          </Link>

          <Link href="/api/odysseyslow" className={styles.card}>
            <a>
              <h2>Homer's Odyssey &rarr;</h2>
              <p>Slow</p>
            </a>
          </Link>

          <Link href="/api/odysseyfast" className={styles.card}>
            <a>
              <h2>Homer's Odyssey &rarr;</h2>
              <p>Fast(er)</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Have a nice day.
      </footer>
      <style jsx>{`
        a { 
          display: block;
          width: 100%;
        }
      `}
      </style>
    </div>
  )
}
