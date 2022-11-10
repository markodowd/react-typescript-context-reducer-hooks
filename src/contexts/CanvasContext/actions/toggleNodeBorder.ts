import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'

interface Action {
  payload: {
    id: string
    border: boolean
  }
}

const toggleNodeBorder = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    if (node.id === action.payload.id) {
      return {
        ...node,
        data: {
          ...node.data,
          border: action.payload.border
        }
      }
    }
    return node
  })

  return { ...state, nodes }
}

export default toggleNodeBorder
