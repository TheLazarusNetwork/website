import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
       <Head>
        <title>Lazarus Network</title>
        <meta
          name="description"
          content="Lazarus Network"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  )
}
