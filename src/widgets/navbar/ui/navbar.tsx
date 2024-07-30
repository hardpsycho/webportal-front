import { clsx } from 'clsx'
import { useState, type FC } from 'react'

import { Button, ButtonVariant } from '@shared/ui/button'
import styles from './navbar.m.scss'
import { ModalLoginForm } from '@features/auth/loginByUsername'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isModalOpened, setIsModalOpened] = useState(false)

    const modalOpenHandler = () => {
        setIsModalOpened(true)
    }

    const modalCloseHandler = () => {
        setIsModalOpened(false)
    }

    return (
        <header data-testid="navbar" className={clsx(styles.navbar, className)}>
            <div className={styles.buttons}>
                <Button variant={ButtonVariant.GHOST} onClick={modalOpenHandler}>
                    Войти
                </Button>
                <ModalLoginForm isOpen={isModalOpened} onClose={modalCloseHandler} />
            </div>
        </header>
    )
}

export { Navbar }
