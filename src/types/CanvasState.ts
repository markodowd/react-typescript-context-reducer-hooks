import { Node, Edge, Viewport } from 'reactflow'

export interface CanvasState {
  nodes: Node[]
  edges: Edge[]
  viewport: Viewport
}
