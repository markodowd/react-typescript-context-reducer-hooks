
import { ChangeEvent, FC, useState } from 'react'
import { CanvasActionTypes } from 'contexts/CanvasContext/CanvasActionTypes'
import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { ColorResult } from 'react-color'
import { Node } from 'reactflow'
import DisplayXY from 'components/ui/controls/DisplayXY'
import ColorPicker from 'components/ui/controls/ColorPicker'
import Delete from 'components/ui/controls/Delete'
import Id from 'components/ui/controls/Id'
import Checkbox from 'components/ui/controls/Checkbox'

interface ControlsProps {
  selectedNode: Node
}

const NodeControls: FC<ControlsProps> = ({ selectedNode }) => {
  const { dispatch } = useCanvasStore()
  const [showNodeColorPicker, setShowNodeColorPicker] = useState(false)
  const [showBorderColorPicker, setShowBorderColorPicker] = useState(false)
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState(false)

  const removeNode = (): void => {
    dispatch({
      type: CanvasActionTypes.REMOVE_NODE,
      payload: selectedNode.id
    })
  }

  const toggleLock = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CanvasActionTypes.TOGGLE_NODE_LOCK,
      payload: {
        id: selectedNode.id,
        draggable: event.target.checked
      }
    })
  }

  const updateBackgroundColor = (color: ColorResult): void => {
    dispatch({
      type: CanvasActionTypes.UPDATE_NODE_BACKGROUND,
      payload: {
        id: selectedNode.id,
        backgroundColor: color.hex
      }
    })
  }

  const updateColor = (color: ColorResult): void => {
    dispatch({
      type: CanvasActionTypes.UPDATE_NODE_COLOR,
      payload: {
        id: selectedNode.id,
        color: color.hex
      }
    })
  }

  const updateBorderColor = (color: ColorResult): void => {
    dispatch({
      type: CanvasActionTypes.UPDATE_NODE_BORDER_COLOR,
      payload: {
        id: selectedNode.id,
        borderColor: color.hex
      }
    })
  }

  const toggleBorder = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CanvasActionTypes.TOGGLE_NODE_BORDER,
      payload: {
        id: selectedNode.id,
        border: event.target.checked
      }
    })
  }

  return (
    <div className='m-2'>
      <Id title={selectedNode.id} />

      <DisplayXY
        title='Node Position'
        positionOneName='X'
        positionOneValue={selectedNode.position.x}
        positionTwoName='Y'
        positionTwoValue={selectedNode.position.y}
      />

      <DisplayXY
        title='Node Dimensions'
        positionOneName='Width'
        positionOneValue={selectedNode.data.dimensions.width}
        positionTwoName='Height'
        positionTwoValue={selectedNode.data.dimensions.height}
      />

      <Checkbox
        title='Node Draggable'
        checked={Boolean(selectedNode.draggable)}
        onChange={toggleLock}
      />

      <Checkbox
        title='Node Border'
        checked={Boolean(selectedNode.data.border)}
        onChange={toggleBorder}
      />

      <ColorPicker
        title='Node Background Color'
        showColorPicker={showBackgroundColorPicker}
        setShowColorPicker={setShowBackgroundColorPicker}
        color={selectedNode.data.backgroundColor}
        onChange={updateBackgroundColor}
      />

      <ColorPicker
        title='Node Color'
        showColorPicker={showNodeColorPicker}
        setShowColorPicker={setShowNodeColorPicker}
        color={selectedNode.data.color}
        onChange={updateColor}
      />

      <ColorPicker
        title='Node Border Color'
        showColorPicker={showBorderColorPicker}
        setShowColorPicker={setShowBorderColorPicker}
        color={selectedNode.data.borderColor}
        onChange={updateBorderColor}
      />

      <Delete title='Delete Node' onClick={removeNode} />
    </div>
  )
}

export default NodeControls
