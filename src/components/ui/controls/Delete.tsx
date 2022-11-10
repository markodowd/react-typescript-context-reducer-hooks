import TrashIcon from 'icons/TrashIcon'
import { FC } from 'react'
import Button from '../Button'

interface Props {
  title: string
  onClick: () => void
}

const Delete: FC<Props> = ({
  title,
  onClick
}) => {
  return (
    <div className='flex items-center justify-between my-2'>
      <p className='font-bold'>{title}:</p>
      <Button onClick={onClick}>
        <TrashIcon />
      </Button>
    </div>
  )
}

export default Delete
