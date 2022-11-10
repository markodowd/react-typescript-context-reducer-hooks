import { FC } from 'react'
import Button from 'components/ui/Button'

import MapIcon from 'icons/MapIcon'
import AudioIcon from 'icons/AudioIcon'
import TextIcon from 'icons/TextIcon'
import ImageIcon from 'icons/ImageIcon'
import PinIcon from 'icons/PinIcon'
import PDFIcon from 'icons/PDFIcon'
import TwitterIcon from 'icons/TwitterIcon'
import DownloadIcon from 'icons/DownloadIcon'
import SaveIcon from 'icons/SaveIcon'

import { CustomNode } from 'types/CustomNode'
import { useCanvasStore } from 'contexts/CanvasContext/CanvasContext'
import { CanvasActionTypes } from 'contexts/CanvasContext/CanvasActionTypes'
import { ReactFlowInstance } from 'reactflow'

interface Props {
  reactFlowInstance: ReactFlowInstance | undefined
}

const CanvasControls: FC<Props> = ({ reactFlowInstance }) => {
  const { dispatch } = useCanvasStore()

  const onLoadClick = (): void => {
    return dispatch({ type: CanvasActionTypes.LOAD_CANVAS, payload: null })
  }

  const onAddNodeClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    dispatch({
      type: CanvasActionTypes.ADD_NODE,
      payload: {
        type: event.currentTarget.value
      }
    })
  }

  const onSaveClick = (): void => {
    return dispatch({ type: CanvasActionTypes.SAVE_CANVAS, payload: reactFlowInstance })
  }

  return (
    <div className='fixed top-0 z-10 flex flex-col justify-between h-screen'>
      <div className='flex flex-col'>
        <Button
          value={CustomNode.MAP}
          onClick={onAddNodeClick}
          tooltip='Add map to canvas'
        >
          <MapIcon />
        </Button>
        <Button
          value={CustomNode.AUDIO}
          onClick={onAddNodeClick}
          tooltip='Add audio file to canvas'
        >
          <AudioIcon />
        </Button>
        <Button
          value={CustomNode.TEXT}
          onClick={onAddNodeClick}
          tooltip='Add text note to canvas'
        >
          <TextIcon />
        </Button>
        <Button
          value={CustomNode.IMAGE}
          onClick={onAddNodeClick}
          tooltip='Add image to canvas'
        >
          <ImageIcon />
        </Button>
        <Button
          value={CustomNode.PIN}
          onClick={onAddNodeClick}
          tooltip='Add a pin to canvas'
        >
          <PinIcon />
        </Button>
        <Button
          value={CustomNode.PDF}
          onClick={onAddNodeClick}
          tooltip='Add a pdf file to canvas'
        >
          <PDFIcon />
        </Button>
        <Button
          value={CustomNode.TWITTER}
          onClick={onAddNodeClick}
          tooltip='Add twitter post to canvas'
        >
          <TwitterIcon />
        </Button>
      </div>
      <div className='flex flex-col'>
        <Button onClick={onLoadClick} tooltip='Download canvas'>
          <DownloadIcon />
        </Button>

        <Button onClick={onSaveClick} tooltip='Save canvas'>
          <SaveIcon />
        </Button>
      </div>
    </div>
  )
}

export default CanvasControls
