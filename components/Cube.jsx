import { useBox } from "@react-three/cannon"
import * as textures from "../src/images/textures"

export const Cube = ({ id, position, texture }) => {
    const [ref] = useBox( () => ({
        type: "Static",
        position
    }))

    const activeTexture = textures[texture + "Texture"]

return (
    <mesh ref={ref}>
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
)
}