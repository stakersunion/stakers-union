import { Container, Logo } from '@/components'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Container>
      <Logo />
      <div className={'my-8 text-center'}>
        <h2 className={'font-bold text-2xl text-muted-foreground'}>
          A collective of <span className={'text-foreground'}>home-stakers</span> for the Ethereum
          network
        </h2>
        <Button>
          Unionize
        </Button>
      </div>
    </Container>
  )
}
