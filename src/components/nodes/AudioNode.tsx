import { memo, FC } from 'react'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'

const AudioNode: FC<NodeProps> = ({ id }) => (
  <CustomNodeWrapper id={id}>
    <div>
      <audio controls>
        <source src='horse.ogg' type='audio/ogg' />
        <source src='horse.mp3' type='audio/mpeg' />
        Your browser does not support the audio tag.
      </audio>
    </div>
  </CustomNodeWrapper>
)

export default memo(AudioNode)
