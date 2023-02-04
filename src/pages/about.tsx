import type { ReactElement } from 'react'
import Link from 'next/link';

import { MainLayout } from '../components/layouts/MainLayout';
import { LightLayout } from '../components/layouts/LightLayout';


export default function AboutPage() {
    return (
      <>
        <h1 className={ 'title' }> About Page</h1>
        <h1 className={ 'title' }>
          <Link href='/'> Ir a Home </Link>
        </h1>
        <p>
          Get started by editing{' '}
          <code className={'code' }>src/pages/about.tsx</code>
        </p>
      </>
    )
}

AboutPage.getLayout = function getLayout ( page: ReactElement ) {
  return (
    <MainLayout title='About'>
      <LightLayout>
        { page }
      </LightLayout>
    </MainLayout>
  )
}