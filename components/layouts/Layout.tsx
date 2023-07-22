import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
  children?: ReactNode,
  title?: string
}

export const Layout = ({children, title}: Props) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Nahum Casco' />
            <meta name='description' content='Informacion sobre pokemon XXXXXX' />
            <meta name='keywords' content='XXXXXX, pokemon, pokedex' />
        </Head>

        <Navbar />

        <main style={{
          padding:'0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
