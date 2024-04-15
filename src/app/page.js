import { Container, Logo } from '@/components'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist } from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'

export default function Home() {
  return (
    <Container>
      <Logo />
      <div className={'flex flex-col my-14 gap-4 items-center'}>
        <h2 className={'font-bold text-2xl text-muted-foreground'}>
          A collective of <span className={'text-foreground'}>home-stakers</span> for the Ethereum
          network
        </h2>
        <Button className={'items-center'}>
          <FontAwesomeIcon
            icon={faHandFist}
            className={'mr-2'}
          />
          Unionize
        </Button>
      </div>
    </Container>
  )
}
