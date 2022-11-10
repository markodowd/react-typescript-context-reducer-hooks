import { CanvasState } from 'types/CanvasState'
import { Edge } from 'reactflow'

interface Action {
  payload: {
    id: string
    width: string
  }
}

const updateEdgeWidth = (state: CanvasState, action: Action): CanvasState => {
  const edges = state.edges.map((edge: Edge) => {
    if (edge.id === action.payload.id) {
      return {
        ...edge,
        data: {
          ...edge.data,
          width: action.payload.width
        }
      }
    }
    return edge
  })

  return { ...state, edges }
}

export default updateEdgeWidth
