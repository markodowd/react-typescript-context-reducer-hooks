import { CanvasState } from 'types/CanvasState'
import { Node } from 'reactflow'
import { v4 as uuidv4 } from 'uuid'

interface Action {
  payload: Node
}

const addNode = (state: CanvasState, action: Action): CanvasState => {
  const updatedNodes = [...state.nodes, {
    ...action.payload,
    id: `node-${String(uuidv4())}`,
    data: {},
    position: { x: 200, y: 200 },
    draggable: true
  }]

  return ({
    ...state,
    nodes: updatedNodes
  })
}

export default addNode
