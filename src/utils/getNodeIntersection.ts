import { XYPosition, Node } from 'reactflow'

// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
export const getNodeIntersection = (
  intersectionNode: Node,
  targetNode: Node
): XYPosition => {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition
  } = intersectionNode
  const targetPosition = targetNode.positionAbsolute

  const w = Number(intersectionNodeWidth) / 2
  const h = Number(intersectionNodeHeight) / 2

  const intersectionNodePositionX = intersectionNodePosition?.x ?? 0
  const intersectionNodePositionY = intersectionNodePosition?.y ?? 0
  const targetPositionX = targetPosition?.x ?? 0
  const targetPositionY = targetPosition?.y ?? 0

  const x2 = intersectionNodePositionX + w
  const y2 = intersectionNodePositionY + h
  const x1 = targetPositionX + w
  const y1 = targetPositionY + h

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h)
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h)
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1))
  const xx3 = a * xx1
  const yy3 = a * yy1
  const x = w * (xx3 + yy3) + x2
  const y = h * (-xx3 + yy3) + y2

  return { x, y }
}
