import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>{pageTitle} | NextJS Basic Latihan Awal</title>
        <meta name="description" content="Website NextJS Basic Latihan" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
