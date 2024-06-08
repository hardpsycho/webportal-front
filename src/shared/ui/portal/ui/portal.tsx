import { ReactNode, type FC } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

const Portal: FC<PortalProps> = ({ children, element }) => {
    const parentElement = element ?? document.getElementById('root')

    if (!parentElement) {
        throw new Error('не удалось орисовать модальное окно')
    }

    return createPortal(children, parentElement)
}

export { Portal }
