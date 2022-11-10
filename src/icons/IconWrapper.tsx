import { FC, ReactNode } from 'react'

interface Props {
  fill: string
  children: ReactNode
  height?: number
  width?: number
}

const IconWrapper: FC<Props> = ({ fill, children, height = 32, width = 32 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={fill}
    viewBox='0 0 16 16'
  >
    {children}
  </svg>
)

export default IconWrapper
