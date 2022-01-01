import { SessionProvider } from "next-auth/react"
import { NextUIProvider } from '@nextui-org/react';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextUIProvider>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </NextUIProvider>
  )
}
