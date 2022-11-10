import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { useEffect, useState } from 'react'
import { Node } from 'reactflow'

const useNodeBorderColor = (nodeId: string): string => {
  const { state } = useCanvasStore()
  const [borderColor, setBorderColor] = useState('black')

  useEffect(() => {
    if (state.nodes.length > 0) {
      const selectedNodeBorderColor = state.nodes.find((node: Node) => node.id === nodeId)
        ?.data.borderColor

      setBorderColor(selectedNodeBorderColor ?? borderColor)
    }
  }, [borderColor, nodeId, state.nodes])

  return borderColor
}

export default useNodeBorderColor
