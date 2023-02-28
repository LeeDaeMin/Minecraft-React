import { useBox } from "@react-three/cannon"
import { useState } from "react"
import * as textures from "../src/images/textures"

export const Cube = ({ position, texture }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [ref] = useBox( () => ({
        type: "Static",
        position
    }))

    const activeTexture = textures[texture + "Texture"]


return (
    <mesh 
    onPointerMove={ (e) => {
        e.stopPropagation()
        setIsHovered(true)
    }}
    onPointerOut={ (e) => {
        e.stopPropagation()
        setIsHovered(false)
    }}
    ref={ref}>
        <boxBufferGeometry attach='geometry' />
        <meshStandardMaterial map={activeTexture} attach="material" color={ isHovered ? 'grey' : 'white'} transparent />
    </mesh>
)
}