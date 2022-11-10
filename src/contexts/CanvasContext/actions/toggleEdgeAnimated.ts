import { CanvasState } from 'types/CanvasState'
import { Edge } from 'reactflow'

interface Action {
  payload: {
    id: string
    animated: boolean
  }
}

const toggleEdgeAnimated = (state: CanvasState, action: Action): CanvasState => {
  const edges = state.edges.map((edge: Edge) => {
    if (edge.id === action.payload.id) {
      return {
        ...edge,
        animated: action.payload.animated
      }
    }
    return edge
  })

  return { ...state, edges }
}

export default toggleEdgeAnimated
