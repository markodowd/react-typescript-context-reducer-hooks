import { Node, Edge, MarkerType } from 'reactflow'

interface NodesAndEdges {
  nodes: Node[]
  edges: Edge[]
}

export const createNodesAndEdges = (): NodesAndEdges => {
  const nodes = []
  const edges = []
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  nodes.push({ id: 'target', data: { label: 'Target' }, position: center })

  for (let i = 0; i < 8; i++) {
    const degrees = i * (360 / 8)
    const radians = degrees * (Math.PI / 180)
    const x = 250 * Math.cos(radians) + center.x
    const y = 250 * Math.sin(radians) + center.y

    nodes.push({ id: `${i}`, data: { label: 'Source' }, position: { x, y } })

    edges.push({
      id: `edge-${i}`,
      target: 'target',
      source: `${i}`,
      type: 'floating',
      markerEnd: {
        type: MarkerType.Arrow
      }
    })
  }

  return { nodes, edges }
}
