import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
          <h1>Welcome Manuel</h1>
          <Image src="/profile.jpg" alt="Profile Avatar" width={200} height={200} />
      </Layout>
    </>
  )
}
