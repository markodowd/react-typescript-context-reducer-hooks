import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'

interface Action {
  payload: {
    id: string
    draggable: boolean
  }
}

const toggleNodeLock = (state: CanvasState, action: Action): CanvasState => {
  const nodes = state.nodes.map((node: Node) => {
    if (node.id === action.payload.id) {
      return {
        ...node,
        draggable: action.payload.draggable
      }
    }
    return node
  })

  return { ...state, nodes }
}

export default toggleNodeLock
