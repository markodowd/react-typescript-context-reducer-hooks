import { FC } from 'react'
import IconWrapper from 'icons/IconWrapper'
import { IconProps } from 'types/IconProps'

const CaretLeftIcon: FC<IconProps> = ({ fill = 'currentColor', height, width }) => (
  <IconWrapper fill={fill} height={height} width={width}>
    <path d='M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z' />
  </IconWrapper>
)

export default CaretLeftIcon
