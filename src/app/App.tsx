import { FC } from 'react'
import Flow from 'components/Flow'
import { ReactFlowProvider } from 'reactflow'
import { CanvasProvider } from 'contexts/CanvasContext/CanvasContext'

const App: FC = () => (
  <div className='flex flex-col h-full'>
    <CanvasProvider>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </CanvasProvider>
  </div>
)

export default App
