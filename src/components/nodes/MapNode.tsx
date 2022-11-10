import { memo, FC } from 'react'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'

const MapNode: FC<NodeProps> = ({ id }) => {
  return (
    <CustomNodeWrapper id={id}>
      <div>
        <div className='mapouter'>
          <div className='gmap_canvas'>
            <iframe
              title='map'
              width='600'
              height='500'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=Micro%20Focus%20Belfast&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frameBorder='0'
              scrolling='no'
              marginHeight={0}
              marginWidth={0}
            />
          </div>
        </div>
      </div>
    </CustomNodeWrapper>
  )
}

export default memo(MapNode)
