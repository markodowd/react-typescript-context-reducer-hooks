import { CanvasActionTypes } from 'contexts/CanvasContext/CanvasActionTypes'
import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import useEdgeColor from 'hooks/useEdgeColor'
import useEdgeWidth from 'hooks/useEdgeWidth'
import { ChangeEvent, FC, useCallback } from 'react'
import { useStore, getStraightPath, EdgeProps, Edge } from 'reactflow'
import { getEdgeParams } from 'utils/getEdgeParams'

const foreignObjectSize = 100

const EdgeWithInput: FC<EdgeProps> = ({
  id,
  source,
  target,
  markerEnd
}) => {
  const { state, dispatch } = useCanvasStore()
  const stroke = useEdgeColor(id)
  const strokeWidth = useEdgeWidth(id)

  const edge = state.edges.find((edge: Edge) => edge.id === id)

  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  )
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  )

  if (sourceNode == null || targetNode == null) {
    return null
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode)

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty
  })

  const onLabelChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CanvasActionTypes.UPDATE_EDGE_LABEL,
      payload: {
        id,
        labelText: event.target.value
      }
    })
  }

  const animatedClass = edge?.animated === true ? 'react-flow__edge-path' : ''

  return (
    <>
      <path
        id={id}
        className={animatedClass}
        d={edgePath}
        markerEnd={markerEnd}
        style={{ strokeWidth, stroke }}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        requiredExtensions='http://www.w3.org/1999/xhtml'
      >
        <div className='flex flex-col items-center justify-center w-full h-full bg-transparent'>
          <input
            className='w-full border border-black border-solid'
            placeholder='Enter Label'
            value={edge?.data.labelText}
            onChange={onLabelChange}
          />
        </div>
      </foreignObject>
    </>
  )
}

export default EdgeWithInput
