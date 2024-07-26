import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();



  useEffect(() => {

    "bootstrap/dist/js/bootstrap.js";

  }, []);

  return (
    <div>

      <Component {...pageProps} />
    </div>
  );
}
