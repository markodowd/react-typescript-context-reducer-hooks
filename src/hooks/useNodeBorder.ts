import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { useEffect, useState } from 'react'
import { Node } from 'reactflow'

const useNodeBorder = (nodeId: string): boolean => {
  const { state } = useCanvasStore()
  const [border, setBorder] = useState(false)

  useEffect(() => {
    if (state.nodes.length > 0) {
      const selectedNodeColor = state.nodes.find((node: Node) => node.id === nodeId)
        ?.data.border

      setBorder(selectedNodeColor ?? border)
    }
  }, [border, nodeId, state.nodes])

  return border
}

export default useNodeBorder
