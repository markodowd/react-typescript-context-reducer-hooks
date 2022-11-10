import { FC } from 'react'

interface Props {
  title: string
  value: string | number
}

const DisplayValue: FC<Props> = ({ title, value }) => {
  return (
    <div className='flex items-center justify-between my-2'>
      <p className='font-bold'>{title}:</p>
      <p className='mr-2'>{value}</p>
    </div>
  )
}

export default DisplayValue
