import { FC } from 'react'
import { ConnectionLineComponentProps, getStraightPath } from 'reactflow'

const CustomConnectionLine: FC<ConnectionLineComponentProps> = ({ fromX, fromY, toX, toY }) => {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY
  })

  return (
    <g>
      <path className='stroke-[3px] stroke-black' fill='none' d={edgePath} />
      <circle
        cx={toX}
        cy={toY}
        fill='black'
        r={3}
        stroke='black'
        strokeWidth={1.5}
      />
    </g>
  )
}

export default CustomConnectionLine
