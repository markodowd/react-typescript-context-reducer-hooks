import { FC } from 'react'

interface Props {
  title: string
}

const Id: FC<Props> = ({ title }) => {
  return (
    <div className='flex justify-center'>
      <p className='text-xs font-bold'>{title}</p>
    </div>
  )
}

export default Id
