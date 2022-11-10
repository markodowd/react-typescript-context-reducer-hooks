import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'

interface Action {
  payload: {
    id: string
    backgroundColor: string
  }
}

const updateNodeBackgroundColor = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    if (node.id === action.payload.id) {
      return {
        ...node,
        data: {
          ...node.data,
          backgroundColor: action.payload.backgroundColor
        }
      }
    }
    return node
  })

  return { ...state, nodes }
}

export default updateNodeBackgroundColor
