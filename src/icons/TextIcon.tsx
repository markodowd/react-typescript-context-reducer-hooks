import { FC } from 'react'
import IconWrapper from 'icons/IconWrapper'
import { IconProps } from 'types/IconProps'

const TextIcon: FC<IconProps> = ({ fill = 'currentColor', height, width }) => (
  <IconWrapper fill={fill} height={height} width={width}>
    <path d='M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z' />
  </IconWrapper>
)

export default TextIcon
