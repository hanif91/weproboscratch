import Berita from '@/components/container/Berita'
import Hero from '@/components/container/Hero'
import Pelayanan from '@/components/container/Pelayanan'


export default function Home() {
  return (
    <div className='bg-gray-200'>
      <Hero/>
      <Pelayanan/>
      <Berita/>
  
    </div>

  )
}
