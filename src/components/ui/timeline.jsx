import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { Check, Circle, X } from 'lucide-react'

import { cn } from '@/lib/utils'

const timelineVariants = cva('flex flex-col items-stretch', {
  variants: {
    positions: {
      left: '[&>li]:grid-cols-[0_min-content_1fr]',
      right: '[&>li]:grid-cols-[1fr_min-content]',
      center: '[&>li]:grid-cols-[1fr_min-content_1fr]',
    },
  },
  defaultVariants: {
    positions: 'left',
  },
})
const Timeline = React.forwardRef(({ children, className, positions, ...props }, ref) => {
  return (
    <ul
      className={cn(timelineVariants({ positions }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </ul>
  )
})
Timeline.displayName = 'Timeline'

const timelineItemVariants = cva('grid items-center gap-x-2', {
  variants: {
    status: {
      done: 'text-primary',
      default: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    status: 'default',
  },
})

const TimelineItem = React.forwardRef(({ className, status, ...props }, ref) => (
  <li
    className={cn(timelineItemVariants({ status }), className)}
    ref={ref}
    {...props}
  />
))
TimelineItem.displayName = 'TimelineItem'

const timelineDotVariants = cva(
  'col-start-2 col-end-3 row-start-1 row-end-1 flex size-4 items-center justify-center rounded-full border border-current',
  {
    variants: {
      status: {
        default: '[&>svg]:hidden',
        current:
          '[&>.lucide-circle]:fill-current [&>.lucide-circle]:text-current [&>svg:not(.lucide-circle)]:hidden',
        done: 'bg-primary [&>.lucide-check]:text-background [&>svg:not(.lucide-check)]:hidden',
        error:
          'border-destructive bg-destructive [&>.lucide-x]:text-background [&>svg:not(.lucide-x)]:hidden',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  }
)

const TimelineDot = React.forwardRef(({ className, status, customIcon, ...props }, ref) => (
  <div
    role='status'
    className={cn('timeline-dot', timelineDotVariants({ status }), className)}
    ref={ref}
    {...props}
  >
    <Circle className='size-2.5' />
    <Check className='size-3' />
    <X className='size-3' />
    {customIcon}
  </div>
))
TimelineDot.displayName = 'TimelineDot'

const timelineContentVariants = cva('row-start-2 row-end-2 pb-8 text-muted-foreground', {
  variants: {
    side: {
      right: 'col-start-3 col-end-4 mr-auto text-left',
      left: 'col-start-1 col-end-2 ml-auto text-right',
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

const TimelineContent = React.forwardRef(({ className, side, ...props }, ref) => (
  <p
    className={cn(timelineContentVariants({ side }), className)}
    ref={ref}
    {...props}
  />
))
TimelineContent.displayName = 'TimelineContent'

const timelineHeadingVariants = cva('row-start-1 row-end-1 line-clamp-1 max-w-full truncate', {
  variants: {
    side: {
      right: 'col-start-3 col-end-4 mr-auto text-left',
      left: 'col-start-1 col-end-2 ml-auto text-right',
    },
    variant: {
      primary: 'text-base font-medium text-primary',
      secondary: 'text-sm font-light text-muted-foreground',
    },
  },
  defaultVariants: {
    side: 'right',
    variant: 'primary',
  },
})

const TimelineHeading = React.forwardRef(({ className, side, variant, ...props }, ref) => (
  <p
    role='heading'
    aria-level={variant === 'primary' ? 2 : 3}
    className={cn(timelineHeadingVariants({ side, variant }), className)}
    ref={ref}
    {...props}
  />
))
TimelineHeading.displayName = 'TimelineHeading'

const TimelineLine = React.forwardRef(({ className, done = false, ...props }, ref) => {
  return (
    <hr
      role='separator'
      aria-orientation='vertical'
      className={cn(
        'col-start-2 col-end-3 row-start-2 row-end-2 mx-auto flex h-full min-h-16 w-0.5 justify-center rounded-full',
        done ? 'bg-primary' : 'bg-muted',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
TimelineLine.displayName = 'TimelineLine'

export { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineHeading, TimelineLine }
