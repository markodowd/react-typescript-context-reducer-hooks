import { getEdgePosition } from 'utils/getEdgePosition'
import { getNodeIntersection } from 'utils/getNodeIntersection'
import { Node, Position } from 'reactflow'

interface EdgeParams {
  sx: IntersectionPoint
  sy: IntersectionPoint
  tx: IntersectionPoint
  ty: IntersectionPoint
  sourcePos: Position
  targetPos: Position
}

type SourceNode = Node<any>
type TargetNode = Node<any>

type IntersectionPoint = number

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams (
  source: SourceNode,
  target: TargetNode
): EdgeParams {
  const sourceIntersectionPoint = getNodeIntersection(source, target)
  const targetIntersectionPoint = getNodeIntersection(target, source)

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint)
  const targetPos = getEdgePosition(target, targetIntersectionPoint)

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos
  }
}
