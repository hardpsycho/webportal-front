import { type FC } from 'react'

import { Modal } from '@shared/ui/modal'
import { LogupForm } from '../logupForm/logupForm'

interface ModalLogupFormProps {
    isOpen: boolean
    onClose?: () => void
}

const ModalLogupForm: FC<ModalLogupFormProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <LogupForm onClose={onClose} />
        </Modal>
    )
}

export default ModalLogupForm
