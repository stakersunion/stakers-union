import Link from 'next/link'
import { Container, Logo } from '@/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from '@/components/ui/timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist } from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'
import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <Container>
      <Logo />
      <div className={'flex flex-col my-14 gap-4 items-center'}>
        <h2 className={'font-bold text-4xl text-muted-foreground text-center'}>
          A collective of <span className={'text-foreground'}>home-stakers</span> for the Ethereum
          network
        </h2>
        <div className={'flex flex-row items-center gap-4'}>
          <div>
            <FontAwesomeIcon
              icon={faHandFist}
              className={'mr-2'}
            />
            <span className={'font-semibold text-sm'}>Unionize</span>
          </div>
          <Button
            className={'items-center'}
            asChild
          >
            <Link href={'https://discord.gg/57EJbMGX'}>
              <FontAwesomeIcon
                icon={faDiscord}
                className={'mr-2'}
              />
              Discord
            </Link>
          </Button>
          <Button
            className={'items-center'}
            asChild
          >
            <Link href={'https://twitter.com/stakersunion'}>
              <FontAwesomeIcon
                icon={faXTwitter}
                className={'mr-2'}
              />
              Twitter
            </Link>
          </Button>
        </div>
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-3 gap-4 my-14'}>
        <Card>
          <CardHeader className={'pb-2'}>
            <CardTitle className={'text-sm'}>The Union</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={'text-sm'}>
              We are home-stakers on the Ethereum network. We have chosen to prioritize the health
              and decentralization of the Ethereum network over all else.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={'pb-2'}>
            <CardTitle className={'text-sm'}>The Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={'text-sm'}>
              Incentives for home-stakers are dwindling. Liquid staking and restaking protocols and
              their associated liquid tokens drive many away from home-staking.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={'pb-2'}>
            <CardTitle className={'text-sm'}>The Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={'text-sm'}>
              We aim to build a registry of interested home-stakers to support their activities by
              securing stable incentives from ecosystem participants.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className={'my-14'}>
        <h2 className={'font-bold text-4xl text-muted-foreground text-center'}>
          Help us build the <span className={'text-foreground'}>first union</span> of Ethereum
          home-stakers
        </h2>
      </div>
      <div className={'flex my-14'}>
        <Timeline positions={'center'}>
          <TimelineItem status={'done'}>
            <TimelineHeading side={'left'}>Launch Stakers Union</TimelineHeading>
            <TimelineDot status={'done'} />
            <TimelineLine done />
            <TimelineContent side={'left'}>
              Create and launch the Stakers Union website. Begin gathering interest from
              home-stakers and other interested contributors.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading className={'text-destructive'}>Define Union Structure</TimelineHeading>
            <TimelineDot status={'current'} />
            <TimelineLine />
            <TimelineContent className={'text-destructive'}>
              Define the structure of the union, including membership requirements, governance
              model, and decision-making processes. Establish clear guidelines for participation and
              contribution.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading
              className={'text-destructive'}
              side={'left'}
            >
              Build Partnerships
            </TimelineHeading>
            <TimelineDot />
            <TimelineLine />
            <TimelineContent
              className={'text-destructive'}
              side={'left'}
            >
              Establish partnerships with other organizations and projects in the Ethereum
              ecosystem. Collaborate on initiatives that benefit home-stakers and promote the health
              of the network.
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading className={'text-destructive'}>
              Develop Incentive Programs
            </TimelineHeading>
            <TimelineDot />
            <TimelineLine />
            <TimelineContent className={'text-destructive'}>
              Design and implement incentive programs to support home-stakers and encourage
              participation in the union. Create mechanisms for distributing rewards and tracking
              contributions.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineDot />
          </TimelineItem>
        </Timeline>
      </div>
      <div className={'mt-16 mb-4'}>
        <p className={'text-muted-foreground text-center'}>Built for the Ethereum Community</p>
      </div>
    </Container>
  )
}
