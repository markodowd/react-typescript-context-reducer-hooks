import { ChangeEvent, FC } from 'react'

interface Props {
  title: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({ title, checked, onChange }) => {
  return (
    <div className='flex items-center justify-between my-2'>
      <p className='font-bold'>{title}:</p>
      <input
        type='checkbox'
        checked={checked}
        onChange={(event) => onChange(event)}
      />
    </div>
  )
}

export default Checkbox
