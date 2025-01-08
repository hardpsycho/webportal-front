import HomeLight from '../assets/home-light.svg'
import ProfileLight from '../assets/profile-light.svg'
import ProfileFilled from '../assets/profile-filled.svg'
import UserLight from '../assets/user-light.svg'

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
        icon: <UserLight />,
        title: 'profile-page-link'
    },
    {
        to: '/articles',
        icon: <ProfileLight />,
        title: 'article_list'
    },
    {
        to: '/about',
        icon: <ProfileFilled />,
        title: 'about-page-link'
    }
]
