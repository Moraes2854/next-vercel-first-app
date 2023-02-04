import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout';

export default function PricingPage () {
  return (
    <MainLayout title='Pricing'>

        <h1 className={ 'title' }> Pricing Page</h1>
        <h1 className={ 'title' }>
        <Link href='/'> Ir a Home </Link>
        </h1>
        <p>
            Get started by editing{' '}
            <code className={ 'code' }>src/pages/pricing/index.tsx</code>
        </p>

    </MainLayout>
  )
}
