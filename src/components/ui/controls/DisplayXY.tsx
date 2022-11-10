import { FC } from 'react'

interface Props {
  title: string
  positionOneName: string
  positionOneValue: string | number
  positionTwoName: string
  positionTwoValue: string | number
}

const DisplayXY: FC<Props> = ({
  title,
  positionOneName,
  positionOneValue,
  positionTwoName,
  positionTwoValue
}) => {
  return (
    <div className='flex items-center justify-between my-2'>
      <p className='font-bold'>{title}:</p>
      <div className='flex flex-col'>
        <div className='flex m-2'>
          <p className='mr-2'>{positionOneName}: {positionOneValue}</p>
        </div>
        <div className='flex m-2'>
          <p className='mr-2'>{positionTwoName}: {positionTwoValue}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayXY
