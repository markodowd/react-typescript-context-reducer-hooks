import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { useEffect, useState } from 'react'
import { Edge } from 'reactflow'

const useEdgeWidth = (edgeId: string): string => {
  const { state } = useCanvasStore()
  const [width, setWidth] = useState('3')

  useEffect(() => {
    if (state.edges.length > 0) {
      const selectedEdgeWidth = state.edges.find((edge: Edge) => edge.id === edgeId)
        ?.data.width

      setWidth(selectedEdgeWidth ?? width)
    }
  }, [width, edgeId, state.edges])

  return width
}

export default useEdgeWidth
