import { FC } from 'react'
import IconWrapper from 'icons/IconWrapper'
import { IconProps } from 'types/IconProps'

const CaretRightIcon: FC<IconProps> = ({ fill = 'currentColor', height, width }) => (
  <IconWrapper fill={fill} height={height} width={width}>
    <path d='M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z' />
  </IconWrapper>
)

export default CaretRightIcon
