import { CanvasState } from 'types/CanvasState'
import { Viewport } from 'reactflow'

interface Action {
  payload: Viewport
}

const updateViewport = (state: CanvasState, action: Action): CanvasState => {
  return { ...state, viewport: action.payload }
}

export default updateViewport
