import { CanvasState } from 'types/CanvasState'
import { Edge } from 'reactflow'

interface Action {
  payload: string
}

const removeEdge = (state: CanvasState, action: Action): CanvasState => {
  const updatedEdges = state.edges.filter(
    (edge: Edge) => action.payload !== edge.id
  )

  return { ...state, edges: updatedEdges }
}

export default removeEdge
