import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'

interface Action {
  payload: string
}

const removeNode = (state: CanvasState, action: Action): CanvasState => {
  const updatedNodes = state.nodes.filter(
    (node: Node) => action.payload !== node.id
  )

  const removeEdgesConnectedToNode = state.edges.filter(
    (edge) => edge.source !== action.payload && edge.target !== action.payload
  )

  return {
    ...state,
    nodes: updatedNodes,
    edges: removeEdgesConnectedToNode
  }
}

export default removeNode
