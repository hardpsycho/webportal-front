import { type FC } from 'react'

import { Modal } from '@shared/ui/modal'
import { LoginForm } from '../loginForm/loginForm'

interface ModalLoginFormProps {
    isOpen: boolean
    onClose?: () => void
}

const ModalLoginForm: FC<ModalLoginFormProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <LoginForm onClose={onClose} />
        </Modal>
    )
}

export { ModalLoginForm }
