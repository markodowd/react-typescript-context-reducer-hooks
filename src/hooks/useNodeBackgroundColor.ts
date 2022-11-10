import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { useEffect, useState } from 'react'
import { Node } from 'reactflow'

const useNodeBackgroundColor = (nodeId: string, defaultColor = 'transparent'): string => {
  const { state } = useCanvasStore()
  const [backgroundColor, setBackgroundColor] = useState(defaultColor)

  useEffect(() => {
    if (state.nodes.length > 0) {
      const selectedNodeBackgroundColor = state.nodes.find((node: Node) => node.id === nodeId)
        ?.data.backgroundColor

      setBackgroundColor(selectedNodeBackgroundColor ?? backgroundColor)
    }
  }, [backgroundColor, nodeId, state.nodes])

  return backgroundColor
}

export default useNodeBackgroundColor
