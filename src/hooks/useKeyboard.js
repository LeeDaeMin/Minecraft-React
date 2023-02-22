import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    'keyW': 'moveForward',
    'keyS': 'moveBackward',
    'keyA': 'moveLeft',
    'keyD': 'moveRight',
    'Space': 'jump',
    'Digit1': 'dirt',
    'Digit2': 'grass',
    'Digit3': 'glass',
    'Digit4': 'log',
    'Digit5': 'wood'
}
export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        log: false,
        wood: false
    })

    useEffect( () => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]

            if (action) {

                setActions( prevActions => ({
                    ...prevActions,
                    [action]: true
                }))
            }
            
        }

        const handleKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]

            if (action) {
                setActions( prevActions => ({
                    ...prevActions,
                    [action]: false
                }))
            }
            
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return actions
} 