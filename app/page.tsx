import Berita from '@/components/container/Berita'
import Hero from '@/components/container/Hero'
import Pelayanan from '@/components/container/Pelayanan'
import { PageWrapper } from '@/components/page-wrapper'


export default function Home() {
  return (
    <PageWrapper>

  
    <div className='bg-gray-200'>
      <Hero/>
      <Pelayanan/>
      <Berita/>
  
    </div>

    </PageWrapper>
  )
}
