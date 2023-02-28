import { useStore } from '../src/hooks/useStore.js'
import { useKeyboard } from '../src/hooks/useKeyboard.js'
import * as image from '../src/images/images.js'
import { useEffect, useState } from 'react'

export const TextureSelect = () => {
    const [ visible, setVisible ] = useState(false)
    const [ texture, setTexture ] = useStore( state => [state.texture, state.setTexture] )

    const {
        dirt,
        grass,
        glass,
        wood,   
        log
      } = useKeyboard()

    useEffect( () => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log 
        }

        const selectedTexture = Object
            .entries(options)
            .find( ([texture, isEnable]) => isEnable)
 
        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        } 
    }, [dirt, grass, glass, log, wood])

    if (!visible) return null;

    return (
        <div
        className='texture-select'
        >
            {
                Object.entries(image).map( ([imgKey, img]) => {
                    return (
                        <img
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                    )
            }
            )}
        </div>
    )
}
