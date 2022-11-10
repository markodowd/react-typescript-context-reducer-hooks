import { memo, FC, useState, ChangeEvent } from 'react'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'

const ImageNode: FC<NodeProps> = ({ id }) => {
  const [imageText, setImageText] = useState('')

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => setImageText(e.target.value)

  return (
    <CustomNodeWrapper id={id}>
      <div>
        <img alt='vercel logo' src='logo192.png' />
        <textarea placeholder='Enter image text' value={imageText} onChange={handleTextChange} />
      </div>
    </CustomNodeWrapper>
  )
}

export default memo(ImageNode)
