import { ReactFlowInstance } from 'reactflow'
import { CanvasState } from 'types/CanvasState'

interface Action {
  payload: ReactFlowInstance
}

const saveInstance = (state: CanvasState, action: Action): CanvasState => {
  const reactFlowInstance = action.payload
  // Key is only for testing localstorage should use a db to load from
  const flowKey = 'example-flow'

  const isReactFlowInstance = (): boolean =>
    Boolean(reactFlowInstance) && Boolean(reactFlowInstance ?? false)

  if (isReactFlowInstance()) {
    const flow = reactFlowInstance.toObject()
    localStorage.setItem(flowKey, JSON.stringify(flow))
  }

  return state
}

export default saveInstance
