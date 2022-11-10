import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'

interface Action {
  payload: {
    id: string
    color: string
  }
}

const updateNodeColor = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    if (node.id === action.payload.id) {
      return {
        ...node,
        data: {
          ...node.data,
          color: action.payload.color
        }
      }
    }
    return node
  })

  return { ...state, nodes }
}

export default updateNodeColor
