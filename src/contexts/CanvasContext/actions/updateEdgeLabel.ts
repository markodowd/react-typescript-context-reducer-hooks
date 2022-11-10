import { CanvasState } from 'types/CanvasState'
import { Edge } from 'reactflow'

interface Action {
  payload: {
    id: string
    labelText: string
  }
}

const updateEdgeLabel = (state: CanvasState, action: Action): CanvasState => {
  const edges = state.edges.map((edge: Edge) => {
    if (edge.id === action.payload.id) {
      return {
        ...edge,
        data: {
          ...edge.data,
          labelText: action.payload.labelText
        }
      }
    }
    return edge
  })

  return { ...state, edges }
}

export default updateEdgeLabel
