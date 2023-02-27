import  { usePlane } from '@react-three/cannon'
import { useStore } from 'zustand'
import { groundTexture } from '../src/images/textures.js'


export function Ground () {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }))

    const [addCube] = useStore(state => [state.addCube])

    groundTexture.repeat.set(100, 100)

    const handleClickGround = event =>{
        event.stopPropagation()
        console.log(event.point)
    }

    return (
        <mesh 
        onClick={ handleClickGround }
        ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={ groundTexture } />
        </mesh>
    )
}