import { memo, FC } from 'react'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'

const TextNode: FC<NodeProps> = ({ id }) => {
  return (
    <CustomNodeWrapper id={id}>
      <div>
        <textarea className='font-sans text-lg text-black bg-yellow-300 resize-none' placeholder='Enter Text' />
      </div>
    </CustomNodeWrapper>
  )
}

export default memo(TextNode)
