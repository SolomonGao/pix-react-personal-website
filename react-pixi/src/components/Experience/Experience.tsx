import { Stage } from '@pixi/react'
import { calculateCanvasSize } from '../../helpers/common'
import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import MainContainer from './MainContainer/MainContainer'

export const Experience = () => {
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize)

  const updateCanvasSize = useCallback(() => {
    debounce(() => {
      setCanvasSize(calculateCanvasSize())
    }, 200)
  }, [])
  


  useEffect(() => {
    window.addEventListener('resize', updateCanvasSize)
    return () => {
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [updateCanvasSize])


  return (
    <Stage width={canvasSize.width} height={canvasSize.height}>
      {/* Experience content goes here */}
      <MainContainer canvasSize={canvasSize} />

    </Stage>
  )
}

