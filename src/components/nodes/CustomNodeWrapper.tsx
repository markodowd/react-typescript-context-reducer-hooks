import useNodeBackgroundColor from 'hooks/useNodeBackgroundColor'
import useNodeBorder from 'hooks/useNodeBorder'
import useNodeBorderColor from 'hooks/useNodeBorderColor'
import { FC, ReactNode } from 'react'
import { Handle, Position, ReactFlowState, useStore } from 'reactflow'

interface Props {
  children: ReactNode
  id: string
}

const connectionNodeIdSelector = (state: ReactFlowState): string | null =>
  state.connectionNodeId

const CustomHandle: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className='absolute w-10 h-5 bg-black border-2 border-black border-solid rounded -top-5 left-1/4'>
    {children}
  </div>
)

const CustomConnector: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='absolute w-10 h-5 bg-green-500 border-2 border-black border-solid rounded -top-5 left-3/4'>
    {children}
  </div>
)

const CustomNodeWrapper: FC<Props> = ({ id, children }) => {
  const connectionNodeId = useStore(connectionNodeIdSelector)

  const backgroundColor = useNodeBackgroundColor(id)
  const border = useNodeBorder(id)
  const borderColor = useNodeBorderColor(id)

  const isTarget =
    Boolean(connectionNodeId) &&
    connectionNodeId !== id &&
    (Boolean(connectionNodeId) ?? false) &&
    connectionNodeId !== ''

  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 }
  const customHandleStyle =
    'absolute top-0 left-0 w-full h-full border-none rounded-none opacity-0 transform-none'
  const borderStyles = 'border-8 border-solid'

  return (
    <div
      style={{ backgroundColor, borderColor }}
      className={`${border ? borderStyles : ''}`}
    >
      <CustomConnector>
        <Handle
          className={customHandleStyle}
          style={{ zIndex: 2 }}
          position={Position.Right}
          type='source'
        />
        <Handle
          className={customHandleStyle}
          style={targetHandleStyle}
          position={Position.Left}
          type='target'
        />
      </CustomConnector>

      <CustomHandle />

      {children}
    </div>
  )
}

export default CustomNodeWrapper
