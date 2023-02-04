import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout';

export default function ContactPage () {
  return (
    <MainLayout title='Contact'>

        <h1 className={ 'title' }> Contact Page</h1>
        <h1 className={ 'title' }>
        <Link href='/'> Ir a Home </Link>
        </h1>
        <p>
            Get started by editing{' '}
            <code className={ 'code' }>src/pages/contact/index.tsx</code>
        </p>

    </MainLayout>
  )
}
