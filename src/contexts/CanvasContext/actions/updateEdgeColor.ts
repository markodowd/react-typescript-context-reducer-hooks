import { CanvasState } from 'types/CanvasState'
import { Edge } from 'reactflow'

interface Action {
  payload: {
    id: string
    color: string
  }
}

const updateEdgeColor = (state: CanvasState, action: Action): CanvasState => {
  const edges = state.edges.map((edge: Edge) => {
    if (edge.id === action.payload.id) {
      return {
        ...edge,
        data: {
          ...edge.data,
          color: action.payload.color
        }
      }
    }
    return edge
  })

  return { ...state, edges }
}

export default updateEdgeColor
