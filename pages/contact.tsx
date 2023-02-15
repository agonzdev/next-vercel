import { MainLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <MainLayout>
          <h1>Contact Page</h1>
          <h1 className={'title'}>
            Ir a <Link href={'/'}>Contact</Link>
          </h1>
          <p className={'description'}>
            Estas en Contact
            <code className={'code'}>pages/contact.tsx</code>
          </p>    
    </MainLayout>
  )
}
