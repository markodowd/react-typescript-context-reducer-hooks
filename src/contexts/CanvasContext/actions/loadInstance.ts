import { CanvasState } from 'types/CanvasState'

const loadInstance = (state: CanvasState): CanvasState => {
  // Key is only for testing localstorage should use a db to load from
  const flowKey = 'example-flow'
  const savedReactFlowInstance = localStorage.getItem(flowKey) ?? ''

  if (savedReactFlowInstance !== '') {
    const reactFlowInstance = JSON.parse(savedReactFlowInstance)

    const isReactFlowInstance = (): boolean =>
      Boolean(reactFlowInstance) && (reactFlowInstance ?? false)

    if (isReactFlowInstance()) {
      return {
        ...state,
        nodes: reactFlowInstance.nodes ?? [],
        edges: reactFlowInstance.edges ?? [],
        viewport: reactFlowInstance.viewport ?? {
          x: 0,
          y: 0,
          zoom: 1
        }
      }
    }
  }

  return state
}

export default loadInstance
