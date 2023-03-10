import { MainLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <MainLayout>
          <h1>Home Page</h1>
          <h1 className={'title'}>
            Ir a <Link href={'/about'}>About</Link>
          </h1>

          <p className={'description'}>
            Estas en Home
            <code className={'code'}>pages/index.tsx</code>
          </p>   
    </MainLayout>
  )
}
