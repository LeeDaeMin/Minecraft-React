import { useStore } from '../src/hooks/useStore.js'
import { useBox } from "@react-three/cannon"
import { useState } from "react"
import * as textures from "../src/images/textures"

export const Cube = ({ id ,position, texture }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [ removeCube ] = useStore( state => [state.removeCube])
    const [ref] = useBox( () => ({
        type: "Static",
        position
    }))

    const activeTexture = textures[texture + "Texture"]

return (
    <mesh 
    onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
    }}
    onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
    }}
    ref={ref}
    onClick={(e) => {
        e.stopPropagation()
        if (e.altKey) {
            removeCube(id)
        }
    }}
    >
        <boxBufferGeometry attach='geometry' />
        <meshStandardMaterial map={activeTexture} attach="material" color={ isHovered ? 'grey' : 'white'} transparent />
    </mesh>
)
}