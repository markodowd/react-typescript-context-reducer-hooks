import { FC, useState } from 'react'
import Button from 'components/ui/Button'
import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import CaretLeftIcon from 'icons/CaretLeftIcon'
import CaretRightIcon from 'icons/CaretRightIcon'
import { Node, Edge } from 'reactflow'
import IconSelector from 'components/IconSelector'
import NodeControls from 'components/NodeControls'
import EdgeControls from './EdgeControls'

interface NodeControlsProps {
  selectedNodeId: string
  selectedEdgeId: string
}

const CustomiseControls: FC<NodeControlsProps> = ({ selectedNodeId, selectedEdgeId }) => {
  const { state } = useCanvasStore()
  const [showControls, setShowControls] = useState(false)

  const selectedNode = state.nodes.find(
    (node: Node) => node.id === selectedNodeId
  )

  const selectedEdge = state.edges.find(
    (edge: Edge) => edge.id === selectedEdgeId
  )

  const isNodeOrEdgeSelected = selectedNode ?? selectedEdge

  if (showControls) {
    return (
      <div className='fixed top-0 right-0 z-10 w-full h-screen max-w-xs m-2 overflow-auto bg-gray-200 rounded'>
        <div className='flex justify-end'>
          <Button value='' onClick={() => setShowControls(false)}>
            <CaretRightIcon />
          </Button>
        </div>
        <div className='grid h-56 m-2 bg-white place-content-center'>
          {isNodeOrEdgeSelected !== undefined
            ? (
              <IconSelector selectedNode={isNodeOrEdgeSelected} height={128} width={128} />
              )
            : (
              <p>No Node or Edge Selected</p>
              )}
        </div>

        {selectedNode !== undefined
          ? (
            <NodeControls selectedNode={selectedNode} />
            )
          : null}

        {selectedEdge !== undefined
          ? (
            <EdgeControls selectedEdge={selectedEdge} />
            )
          : null}
      </div>
    )
  }

  return (
    <div className='fixed top-0 right-0 z-10 max-h-96'>
      <Button value='' onClick={() => setShowControls(true)}>
        <CaretLeftIcon />
      </Button>
    </div>
  )
}

export default CustomiseControls
