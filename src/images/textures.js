import { grassImg } from "./images.js";

import { TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg);

export { groundTexture }