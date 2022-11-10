import TextNode from 'components/nodes/TextNode'
import AudioNode from 'components/nodes/AudioNode'
import MapNode from 'components/nodes/MapNode'
import ImageNode from 'components/nodes/ImageNode'
import PinNode from 'components/nodes/PinNode'
import PDFNode from 'components/nodes/PDFNode'
import TwitterNode from 'components/nodes/TwitterNode'

export const nodeTypes = {
  TEXT: TextNode,
  AUDIO: AudioNode,
  MAP: MapNode,
  IMAGE: ImageNode,
  PIN: PinNode,
  PDF: PDFNode,
  TWITTER: TwitterNode
}
