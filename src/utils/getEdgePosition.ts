import { Position, Node, XYPosition } from 'reactflow'

// returns the position (top,right,bottom or right) passed node compared to the intersection point
export const getEdgePosition = (
  node: Node,
  intersectionPoint: XYPosition
): Position => {
  const n = { ...node.positionAbsolute, ...node }
  const nx = Math.round(Number(n.x))
  const ny = Math.round(Number(n.y))
  const px = Math.round(intersectionPoint.x)
  const py = Math.round(intersectionPoint.y)

  if (px <= nx + 1) {
    return Position.Left
  }
  if (px >= nx + Number(n.width) - 1) {
    return Position.Right
  }
  if (py <= ny + 1) {
    return Position.Top
  }
  if (py >= Number(n.y) + Number(n.height) - 1) {
    return Position.Bottom
  }

  return Position.Top
}
