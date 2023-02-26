import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create(set => ({
    texture: 'dirty',
    cubes: [{
        id: nanoid(),
        pos: [1, 1, 1],
        texture: 'dirty',
    }],
    addCube: () => {},
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}))

