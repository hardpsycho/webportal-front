import { ReactNode, type FC, MouseEvent, useEffect, useState, useRef } from 'react'
import { clsx } from 'clsx'

import styles from './modal.m.scss'
import { Portal } from '@shared/ui/portal'

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose?: () => void
    portal?: HTMLElement
}

const Modal: FC<ModalProps> = (props) => {
    const { children, className = '', isOpen, onClose, portal } = props
    const [willClose, setWillClose] = useState(false)
    const [willOpen, setWillOpen] = useState(false)
    const timeRef = useRef<NodeJS.Timeout | null>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    function clickContentHandler(e: MouseEvent<HTMLElement>) {
        e.stopPropagation()
    }

    function closeHandler() {
        setWillClose(true)
        setWillOpen(false)
    }

    function onEscDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }

    useEffect(() => {
        if (willClose) {
            timeRef.current = setTimeout(() => {
                onClose?.()
                setWillClose(false)
            }, 500)

            return () => {
                if (timeRef.current) {
                    clearTimeout(timeRef.current)
                }
            }
        }

        if (isOpen) {
            setWillOpen(true)
        }
    }, [willClose])

    useEffect(() => {
        if (isOpen) {
            setWillOpen(true)
            window.addEventListener('keydown', onEscDown)

            return () => {
                window.removeEventListener('keydown', onEscDown)
            }
        }
    }, [isOpen])

    if (!isOpen) {
        return null
    }

    return (
        <Portal element={portal}>
            <div
                className={clsx(
                    styles.modal,
                    {
                        [styles.close]: willClose,
                        [styles.willOpen]: isOpen,
                        [styles.open]: willOpen
                    },
                    className
                )}
            >
                <div className={clsx(styles.overlay)} onClick={closeHandler}>
                    <div className={styles.content} onClick={clickContentHandler}>
                        <div
                            className={styles.contentInside}
                            onClick={clickContentHandler}
                            ref={contentRef}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export { Modal }
