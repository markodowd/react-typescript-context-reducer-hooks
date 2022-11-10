import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { useEffect, useState } from 'react'
import { Node } from 'reactflow'

const useNodeColor = (nodeId: string): string => {
  const { state } = useCanvasStore()
  const [color, setColor] = useState('black')

  useEffect(() => {
    if (state.nodes.length > 0) {
      const selectedNodeColor = state.nodes.find((node: Node) => node.id === nodeId)
        ?.data.color

      setColor(selectedNodeColor ?? color)
    }
  }, [color, nodeId, state.nodes])

  return color
}

export default useNodeColor
