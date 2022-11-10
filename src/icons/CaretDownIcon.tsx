import { FC } from 'react'
import IconWrapper from 'icons/IconWrapper'
import { IconProps } from 'types/IconProps'

const CaretDownIcon: FC<IconProps> = ({ fill = 'currentColor', height, width }) => (
  <IconWrapper fill={fill} height={height} width={width}>
    <path d='M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z' />
  </IconWrapper>
)

export default CaretDownIcon
