import { Card as CardWrap, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Card = ({ title, children }) => {
  return (
    <CardWrap className={'hover:bg-white hover:text-black transition'}>
      <CardHeader className={'pb-2'}>
        <CardTitle className={'text-sm'}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={'text-sm'}>
          {children}
        </p>
      </CardContent>
    </CardWrap>
  )
}

export default Card
