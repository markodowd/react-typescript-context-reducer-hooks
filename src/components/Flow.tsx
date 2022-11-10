import { FC, useEffect, useState } from 'react'
import ReactFlow, {
  Connection,
  Edge,
  ConnectionLineType,
  Background,
  MarkerType,
  MiniMap,
  NodeChange,
  ReactFlowInstance,
  useViewport
} from 'reactflow'
import CanvasControls from 'components/CanvasControls'
import CustomConnectionLine from 'components/edges/CustomConnectionLine'
import { nodeTypes } from 'utils/nodeTypes'
import EdgeWithInput from 'components/edges/EdgeWithInput'
import 'reactflow/dist/style.css'
import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { CanvasActionTypes } from 'contexts/CanvasContext/CanvasActionTypes'
import CustomiseControls from 'components/CustomiseControls'

const edgeTypes = {
  edgeWithInput: EdgeWithInput
}

const defaultEdgeOptions = {
  animated: true,
  type: 'edgeWithInput',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: 'black'
  }
}

const Flow: FC = () => {
  const [selectedNode, setSelectedNode] = useState('')
  const [selectedEdge, setSelectedEdge] = useState('')
  const { state, dispatch } = useCanvasStore()
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>()
  const { x, y, zoom } = useViewport()

  const onNodesChange = (changes: NodeChange[]): void => {
    const nodeChanges = changes[0]

    if (nodeChanges.type === 'position') {
      return dispatch({ type: CanvasActionTypes.UPDATE_NODE_POSITION, payload: nodeChanges })
    }

    if (nodeChanges.type === 'dimensions') {
      return dispatch({ type: CanvasActionTypes.UPDATE_NODE_DIMENSIONS, payload: nodeChanges })
    }
  }

  const onConnect = (params: Connection | Edge): void => {
    return dispatch({ type: CanvasActionTypes.ADD_EDGE, payload: { ...params } })
  }

  const onNodeClick = (nodeId: string): void => {
    setSelectedEdge('')
    setSelectedNode(nodeId)
  }

  const onEdgeClick = (edgeId: string): void => {
    setSelectedNode('')
    setSelectedEdge(edgeId)
  }

  const onPaneClick = (): void => {
    setSelectedNode('')
    setSelectedEdge('')
  }

  useEffect(() => {
    return dispatch({ type: CanvasActionTypes.UPDATE_VIEWPORT, payload: { x, y, zoom } })
  }, [dispatch, x, y, zoom])

  return (
    <div className='grow'>
      <CanvasControls reactFlowInstance={reactFlowInstance} />
      <CustomiseControls selectedNodeId={selectedNode} selectedEdgeId={selectedEdge} />
      <ReactFlow
        onNodeClick={(event, node) => onNodeClick(node.id)}
        onEdgeClick={(event, edge) => onEdgeClick(edge.id)}
        onPaneClick={onPaneClick}
        nodes={state.nodes}
        edges={state.edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        connectionLineComponent={CustomConnectionLine}
        fitView
      >
        <Background color='#aaa' gap={16} size={2} />
        <MiniMap nodeColor='red' nodeStrokeWidth={3} nodeStrokeColor='black' />
      </ReactFlow>
    </div>
  )
}

export default Flow
