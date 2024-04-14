import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Logo = () => {
  return (
    <div className={bebas.className}>
      <div className={'flex justify-center items-center text-5xl my-8'}>
        <h1>Stakers</h1>
        <Image
          src={'/logo.svg'}
          alt={'Stakers Union'}
          width={100}
          height={100}
          className={'mx-6'}
        />
        <h1>Union</h1>
      </div>
    </div>
  )
}

export default Logo
