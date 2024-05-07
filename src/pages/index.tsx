import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { useCallback } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const handleClick = useCallback(() => {
    console.log('handleClick')
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <button onClick={handleClick}>notification</button>
      </main>
    </>
  )
}
