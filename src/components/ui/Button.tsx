import { FC, MouseEventHandler, ReactNode, useState } from 'react'

interface Props {
  className?: string
  value?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
  tooltip?: string
}

const Button: FC<Props> = ({ value, onClick, children, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <button
      className='relative p-2 m-2 text-lg text-white bg-blue-600 rounded'
      value={value}
      onClick={onClick}
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className='absolute px-2 mx-2 bg-blue-600 rounded top-1/4 left-full w-max'>{tooltip}</div>}
    </button>
  )
}

export default Button
