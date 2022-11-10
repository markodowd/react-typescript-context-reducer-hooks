import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'

interface Action {
  payload: {
    id: string
    borderColor: string
  }
}

const updateNodeBorderColor = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    if (node.id === action.payload.id) {
      return {
        ...node,
        data: {
          ...node.data,
          borderColor: action.payload.borderColor
        }
      }
    }
    return node
  })

  return { ...state, nodes }
}

export default updateNodeBorderColor
