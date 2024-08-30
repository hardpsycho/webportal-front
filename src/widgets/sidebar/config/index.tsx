import HomeLight from '../assets/home-light.svg'
import AboutLight from '../assets/profile-light.svg'
import ProfileLight from '../assets/user-light.svg'

interface SidebarItem {
    to: string
    icon: JSX.Element
    title: string
}

export const sidebarItems: SidebarItem[] = [
    {
        to: '/',
        icon: <HomeLight />,
        title: 'main-page-link'
    },
    {
        to: '/profile',
        icon: <ProfileLight />,
        title: 'profile-page-link'
    },
    {
        to: '/about',
        icon: <AboutLight />,
        title: 'about-page-link'
    }
]
