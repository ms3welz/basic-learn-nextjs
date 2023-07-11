import { useEffect } from "react"
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

  return (
    <>
        <h3 className="title-not-found">Oopppssss.....</h3>
        <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan!</h1>
    </>
  )
}
