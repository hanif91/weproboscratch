import Berita from '@/components/container/Berita'
import Hero from '@/components/container/Hero'
import Pelayanan from '@/components/container/Pelayanan'
import ProfileSection from '@/components/container/ProfileSection'
import { PageWrapper } from '@/components/page-wrapper'


export default function Home() {
  return (
    <PageWrapper>

  

      <Hero/>
      <ProfileSection/>
      <Pelayanan/>
      <Berita/>
  


    </PageWrapper>
  )
}
