import CaretDownIcon from 'icons/CaretDownIcon'
import CaretRightIcon from 'icons/CaretRightIcon'
import { FC } from 'react'
import { ColorResult, SketchPicker } from 'react-color'
import Button from '../Button'

interface Props {
  title: string
  showColorPicker: boolean
  setShowColorPicker: (boolean: boolean) => void
  color: string
  onChange: (color: ColorResult) => void
}

const ColorPicker: FC<Props> = ({
  title,
  showColorPicker,
  setShowColorPicker,
  color,
  onChange
}) => {
  return (
    <div className='flex flex-col my-2'>
      <div className='flex items-center justify-between'>
        <p className='font-bold'>{title}:</p>
        {showColorPicker
          ? (
            <Button
              value=''
              onClick={() => setShowColorPicker(false)}
            >
              <CaretRightIcon />
            </Button>
            )
          : (
            <Button value='' onClick={() => setShowColorPicker(true)}>
              <CaretDownIcon />
            </Button>
            )}
      </div>
      {showColorPicker
        ? (
          <div className='flex justify-center my-2'>
            <SketchPicker
              color={color}
              onChange={onChange}
            />
          </div>
          )
        : null}
    </div>
  )
}

export default ColorPicker
