import { CanvasActionTypes } from 'contexts/CanvasContext/CanvasActionTypes'
import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { ChangeEvent, FC, useState } from 'react'
import { ColorResult } from 'react-color'
import { Edge } from 'reactflow'
import Id from 'components/ui/controls/Id'
import Delete from 'components/ui/controls/Delete'
import ColorPicker from 'components/ui/controls/ColorPicker'
import Checkbox from 'components/ui/controls/Checkbox'
import DisplayValue from 'components/ui/controls/DisplayValue'
import Slider from 'components/ui/controls/Slider'

interface ControlsProps {
  selectedEdge: Edge
}

const EdgeControls: FC<ControlsProps> = ({ selectedEdge }) => {
  const { dispatch } = useCanvasStore()

  const [showEdgeColorPicker, setShowEdgeColorPicker] = useState(false)

  const updateColor = (color: ColorResult): void => {
    dispatch({
      type: CanvasActionTypes.UPDATE_EDGE_COLOR,
      payload: {
        id: selectedEdge.id,
        color: color.hex
      }
    })
  }

  const removeEdge = (): void => {
    dispatch({
      type: CanvasActionTypes.REMOVE_EDGE,
      payload: selectedEdge.id
    })
  }

  const toggleAnimated = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CanvasActionTypes.TOGGLE_EDGE_ANIMATED,
      payload: {
        id: selectedEdge.id,
        animated: event.target.checked
      }
    })
  }

  const updateEdgeWidth = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CanvasActionTypes.UPDATE_EDGE_WIDTH,
      payload: {
        id: selectedEdge.id,
        width: event.target.value
      }
    })
  }

  return (
    <div className='m-2'>
      <Id title={selectedEdge.id} />

      <DisplayValue
        title='Edge Label'
        value={selectedEdge.data.labelText}
      />

      <Slider
        title='Edge Width'
        value={selectedEdge.data.width}
        onChange={updateEdgeWidth}
      />

      <Checkbox
        title='Edge Animated'
        checked={Boolean(selectedEdge.animated)}
        onChange={toggleAnimated}
      />

      <ColorPicker
        title='Edge Color'
        showColorPicker={showEdgeColorPicker}
        setShowColorPicker={setShowEdgeColorPicker}
        color={selectedEdge.data.color}
        onChange={updateColor}
      />

      <Delete title='Delete Edge' onClick={removeEdge} />
    </div>
  )
}

export default EdgeControls
