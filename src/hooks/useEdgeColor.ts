import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { useEffect, useState } from 'react'
import { Edge } from 'reactflow'

const useEdgeColor = (edgeId: string): string => {
  const { state } = useCanvasStore()
  const [color, setColor] = useState('black')

  useEffect(() => {
    if (state.edges.length > 0) {
      const selectedEdgeColor = state.edges.find((edge: Edge) => edge.id === edgeId)
        ?.data.color

      setColor(selectedEdgeColor ?? color)
    }
  }, [color, edgeId, state.edges])

  return color
}

export default useEdgeColor
