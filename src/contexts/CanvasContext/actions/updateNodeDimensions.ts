import { CanvasState } from 'types/CanvasState'
import { Node, NodeDimensionChange } from 'reactflow'

interface Action {
  payload: NodeDimensionChange
}

const updateNodeDimensions = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    if (node.id === action.payload.id) {
      return {
        ...node,
        data: {
          ...node.data,
          dimensions: action.payload.dimensions
        }
      }
    }
    return node
  })

  return {
    ...state,
    nodes
  }
}

export default updateNodeDimensions
