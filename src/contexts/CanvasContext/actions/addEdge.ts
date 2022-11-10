import { CanvasState } from 'types/CanvasState'
import { Edge } from 'reactflow'
import { v4 as uuidv4 } from 'uuid'

interface Action {
  payload: Edge
}

const addEdge = (state: CanvasState, action: Action): CanvasState => {
  const doesEdgeAlreadyExist = state.edges.find((edge) => {
    return edge.source === action.payload.source && edge.target === action.payload.target
  })

  if (doesEdgeAlreadyExist !== undefined) {
    return state
  }

  const updatedEdges = [
    ...state.edges,
    {
      ...action.payload,
      id: `edge-${String(uuidv4())}`,
      data: {}
    }
  ]

  return {
    ...state,
    edges: updatedEdges
  }
}

export default addEdge
