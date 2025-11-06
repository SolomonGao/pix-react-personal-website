import { Container, Sprite } from "@pixi/react"
import { useMemo, type PropsWithChildren } from "react";
import * as PIXI from 'pixi.js';
import backgroundAsset from '../../../assets/background.png';


interface IMainContainerProps {
    canvasSize: { width: number; height: number  }

}

const MainContainer = ({canvasSize, children}: PropsWithChildren<IMainContainerProps>) => {

  const backgroundTexture = useMemo(() => PIXI.Texture.from(backgroundAsset), []);
  return (
    <Container>
        <Sprite
            texture={backgroundTexture}
            width={canvasSize.width}
            height={canvasSize.height}
            alpha={0}
        />
        {children}
    </Container>
  )
}

export default MainContainer