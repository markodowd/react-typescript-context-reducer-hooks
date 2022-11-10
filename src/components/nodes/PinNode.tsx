import { memo, FC } from 'react'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'
import PinIcon from 'icons/PinIcon'
import useNodeColor from 'hooks/useNodeColor'

const PinNode: FC<NodeProps> = ({ id }) => {
  const color = useNodeColor(id)

  return (
    <CustomNodeWrapper id={id}>
      <PinIcon height={128} width={128} fill={color} />
    </CustomNodeWrapper>
  )
}

export default memo(PinNode)
