import { CanvasState } from 'types/CanvasState'
import { Node, NodePositionChange, XYPosition } from 'reactflow'

interface Action {
  payload: NodePositionChange
}

const updateNodePosition = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    const selectedNode = node.id === action.payload.id
    const canNodeBeMoved = Boolean(node.draggable)
    const isNodeBeingDragged = Boolean(action.payload.dragging)

    if (selectedNode && canNodeBeMoved && isNodeBeingDragged) {
      return {
        ...node,
        position: action.payload.position as XYPosition
      }
    }

    return node
  })

  return {
    ...state,
    nodes
  }
}

export default updateNodePosition
