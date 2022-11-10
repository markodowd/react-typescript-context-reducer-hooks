import { ChangeEvent, FC } from 'react'

interface Props {
  title: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Slider: FC<Props> = ({ title, value, onChange }) => {
  return (
    <div className='flex items-center justify-between my-2'>
      <p className='font-bold'>{title}:</p>
      <input
        type='range' step='1' min='1' max='10'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Slider
