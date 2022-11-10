import { createContext, Dispatch, FC, ReactNode, ReducerAction, useContext, useReducer } from 'react'
import canvasReducer from 'contexts/CanvasContext/canvasReducer'
import { CanvasState } from 'types/CanvasState'

interface Props {
  children: ReactNode
}

interface ICanvasContext {
  state: CanvasState
  dispatch: Dispatch<ReducerAction<typeof canvasReducer>>
}

const initialState = {
  nodes: [],
  edges: [],
  viewport: {
    zoom: 1,
    x: 0,
    y: 0
  }
}

const CanvasContext = createContext<ICanvasContext>({ state: initialState, dispatch: () => {} })

export const useCanvasStore = (): ICanvasContext => useContext(CanvasContext)

export const CanvasProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(canvasReducer, initialState)

  return (
    <CanvasContext.Provider value={{ state, dispatch }}>
      {children}
    </CanvasContext.Provider>
  )
}
