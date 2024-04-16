import {
  TimelineItem as TimelineItemWrap,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineLine,
} from '@/components/ui/timeline'

const TimelineItem = ({ title, children, status, position }) => {
  return (
    <TimelineItemWrap status={status}>
      <TimelineHeading
        side={position}
        className={status ? 'text-white' : 'text-destructive'}
      >
        {title}
      </TimelineHeading>
      <TimelineDot status={status} />
      {children && <TimelineLine done={status === 'done'} />}
      <TimelineContent
        side={position}
        className={status ? 'text-white' : 'text-destructive'}
      >
        {children}
      </TimelineContent>
    </TimelineItemWrap>
  )
}

export default TimelineItem
