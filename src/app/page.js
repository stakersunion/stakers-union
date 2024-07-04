import Link from 'next/link'
import { Container, Logo } from '@/components'
import { Button } from '@/components/ui/button'
import { Timeline } from '@/components/ui/timeline'
import { Card, TimelineItem } from '@/components/home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist, faBook } from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <Container>
      <Logo />
      <div className={'flex flex-col my-14 gap-4 items-center'}>
        <h2 className={'font-bold text-4xl text-muted-foreground text-center'}>
          A collective of <span className={'text-foreground'}>home-stakers</span> for the Ethereum
          network
        </h2>
        <div className={'flex justify-center gap-x-4'}>
          <Button asChild>
            <Link
              href={'https://docs.stakersunion.com/'}
              target={'_blank'}
            >
              <FontAwesomeIcon
                icon={faBook}
                className={'mr-2'}
              />
              View Proposal
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={'https://members.stakersunion.com/'}
              target={'_blank'}
            >
              <FontAwesomeIcon
                icon={faHandFist}
                className={'mr-2'}
              />
              Become a Member
            </Link>
          </Button>
          <Button
            className={'items-center'}
            variant={'ghost'}
            asChild
          >
            <Link href={'https://discord.gg/vAGDagR7JT'}>
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
          </Button>
          <Button
            className={'items-center'}
            variant={'ghost'}
            asChild
          >
            <Link href={'https://twitter.com/stakersunion'}>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </Button>
        </div>
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-3 gap-4 my-14'}>
        <Card title={'The Union'}>
          We are home-stakers on the Ethereum network. We have chosen to prioritize the health and
          decentralization of the Ethereum network over all else.
        </Card>
        <Card title={'The Problem'}>
          Incentives for home-stakers are dwindling. Liquid staking and restaking protocols and
          their associated liquid tokens drive many away from home-staking.
        </Card>
        <Card title={'The Solution'}>
          We aim to build a registry of interested home-stakers to support their activities by
          securing stable incentives from ecosystem participants.
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
          <TimelineItem
            title={'Launch Stakers Union'}
            status={'done'}
            position={'left'}
          >
            Create and launch the Stakers Union website. Begin gathering interest from home-stakers
            and other interested contributors.
          </TimelineItem>
          <TimelineItem
            title={'Define Union Structure'}
            position={'right'}
            status={'done'}
          >
            Define the structure of the union including membership requirements, governance model,
            and decision-making processes. Use open contributions to{' '}
            <Link
              href={'https://docs.stakersunion.com/'}
              className={'underline'}
            >
              documentation site
            </Link>
            .
          </TimelineItem>
          <TimelineItem
            title={'Grow Community'}
            position={'left'}
            status={'current'}
          >
            Create an application process and begin accepting and verifying members. Build a{' '}
            <Link
              href={'https://members.stakersunion.com/'}
              className={'underline'}
            >
              Member Area
            </Link>{' '}
            for user management.
          </TimelineItem>
          <TimelineItem
            title={'Build Partnerships'}
            position={'right'}
          >
            Establish partnerships with other organizations and projects in the Ethereum ecosystem.
            Collaborate on initiatives that benefit home-stakers and promote the health of the
            network.
          </TimelineItem>
          <TimelineItem
            title={'Develop Incentive Programs'}
            position={'left'}
          >
            Design and implement incentive programs to support home-stakers and encourage
            participation in the union. Create mechanisms for distributing rewards and tracking
            contributions.
          </TimelineItem>
          <TimelineItem />
        </Timeline>
      </div>
      <div className={'mt-16 mb-4'}>
        <p className={'text-muted-foreground text-center'}>Built for the Ethereum Community</p>
      </div>
    </Container>
  )
}
