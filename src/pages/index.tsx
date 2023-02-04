import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';


export default function HomePage() {
  return (
    <MainLayout title='Home'>
      
      <h1 className={ 'title' }> Home Page</h1>

      <h1 className={ 'title' }>
        <Link href='/about'>Ir a About </Link>
      </h1>

      <p>
        Get started by editing{' '}
        <code className={ 'code' }>src/pages/index.tsx</code>
      </p>

    </MainLayout> 
  )
}
