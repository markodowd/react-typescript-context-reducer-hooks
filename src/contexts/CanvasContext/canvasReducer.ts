import { CanvasActionTypes } from 'contexts/CanvasContext/CanvasActionTypes'
import { CanvasState } from 'types/CanvasState'

import addEdge from 'contexts/CanvasContext/actions/addEdge'
import addNode from 'contexts/CanvasContext/actions/addNode'
import removeNode from 'contexts/CanvasContext/actions/removeNode'
import toggleNodeLock from 'contexts/CanvasContext/actions/toggleNodeLock'
import removeEdge from 'contexts/CanvasContext/actions/removeEdge'
import updateNodePosition from 'contexts/CanvasContext/actions/updateNodePosition'
import loadInstance from 'contexts/CanvasContext/actions/loadInstance'
import saveInstance from 'contexts/CanvasContext/actions/saveInstance'
import updateNodeBackgroundColor from 'contexts/CanvasContext/actions/updateNodeBackgroundColor'
import updateNodeColor from 'contexts/CanvasContext/actions/updateNodeColor'
import updateViewport from 'contexts/CanvasContext/actions/updateViewport'
import toggleNodeBorder from 'contexts/CanvasContext/actions/toggleNodeBorder'
import updateNodeBorderColor from 'contexts/CanvasContext/actions/updateNodeBorderColor'
import updateEdgeColor from 'contexts/CanvasContext/actions/updateEdgeColor'
import updateEdgeLabel from 'contexts/CanvasContext/actions/updateEdgeLabel'
import toggleEdgeAnimated from 'contexts/CanvasContext/actions/toggleEdgeAnimated'
import updateEdgeWidth from 'contexts/CanvasContext/actions/updateEdgeWidth'
import updateNodeDimensions from 'contexts/CanvasContext/actions/updateNodeDimensions'

interface Action {
  payload: any
  type: string
}

const canvasReducer = (state: CanvasState, action: Action): CanvasState => {
  switch (action.type) {
    case CanvasActionTypes.ADD_NODE:
      return addNode(state, action)
    case CanvasActionTypes.REMOVE_NODE:
      return removeNode(state, action)
    case CanvasActionTypes.TOGGLE_NODE_LOCK:
      return toggleNodeLock(state, action)
    case CanvasActionTypes.TOGGLE_NODE_BORDER:
      return toggleNodeBorder(state, action)
    case CanvasActionTypes.TOGGLE_EDGE_ANIMATED:
      return toggleEdgeAnimated(state, action)
    case CanvasActionTypes.REMOVE_EDGE:
      return removeEdge(state, action)
    case CanvasActionTypes.UPDATE_NODE_POSITION:
      return updateNodePosition(state, action)
    case CanvasActionTypes.UPDATE_NODE_DIMENSIONS:
      return updateNodeDimensions(state, action)
    case CanvasActionTypes.UPDATE_NODE_BACKGROUND:
      return updateNodeBackgroundColor(state, action)
    case CanvasActionTypes.UPDATE_NODE_COLOR:
      return updateNodeColor(state, action)
    case CanvasActionTypes.ADD_EDGE:
      return addEdge(state, action)
    case CanvasActionTypes.UPDATE_NODE_BORDER_COLOR:
      return updateNodeBorderColor(state, action)
    case CanvasActionTypes.SAVE_CANVAS:
      return saveInstance(state, action)
    case CanvasActionTypes.UPDATE_VIEWPORT:
      return updateViewport(state, action)
    case CanvasActionTypes.UPDATE_EDGE_COLOR:
      return updateEdgeColor(state, action)
    case CanvasActionTypes.UPDATE_EDGE_LABEL:
      return updateEdgeLabel(state, action)
    case CanvasActionTypes.UPDATE_EDGE_WIDTH:
      return updateEdgeWidth(state, action)
    case CanvasActionTypes.LOAD_CANVAS:
      return loadInstance(state)
    default:
      return state
  }
}

export default canvasReducer
