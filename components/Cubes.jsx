import { useStore } from "../src/hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
    const [cubes] = useStore(state => [state.cubes])

    return cubes.map(({ id, pos, texture }) => {
        return <Cube 
            key={id} 
            pos={pos} 
            texture={texture}
            />
        })
}