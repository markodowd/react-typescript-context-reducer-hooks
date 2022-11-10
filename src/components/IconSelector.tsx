import { FC } from 'react'
import { Edge, Node } from 'reactflow'
import { CustomNode } from 'types/CustomNode'

import MapIcon from 'icons/MapIcon'
import AudioIcon from 'icons/AudioIcon'
import TextIcon from 'icons/TextIcon'
import ImageIcon from 'icons/ImageIcon'
import PinIcon from 'icons/PinIcon'
import PDFIcon from 'icons/PDFIcon'
import TwitterIcon from 'icons/TwitterIcon'
import ConnectionIcon from 'icons/ConnectionIcon'

interface Props {
  selectedNode: Node | Edge
  height?: number
  width?: number
}

const IconSelector: FC<Props> = ({ selectedNode, height, width }) => {
  switch (selectedNode.type) {
    case CustomNode.MAP:
      return <MapIcon height={height} width={width} />
    case CustomNode.AUDIO:
      return <AudioIcon height={height} width={width} />
    case CustomNode.TEXT:
      return <TextIcon height={height} width={width} />
    case CustomNode.IMAGE:
      return <ImageIcon height={height} width={width} />
    case CustomNode.PIN:
      return <PinIcon height={height} width={width} />
    case CustomNode.PDF:
      return <PDFIcon height={height} width={width} />
    case CustomNode.TWITTER:
      return <TwitterIcon height={height} width={width} />
    default:
      return <ConnectionIcon height={height} width={width} />
  }
}

export default IconSelector
