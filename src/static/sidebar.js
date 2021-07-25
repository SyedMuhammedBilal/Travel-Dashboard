import Home from '../assests/icon/home-hover.png'
import Ticket from '../assests/icon/ticket.png'
import Favorite from '../assests/icon/favorite.png'
import Message from '../assests/icon/message.png'
import Transaction from '../assests/icon/transaction.png'
import Settings from '../assests/icon/settings.png';
import Logout from '../assests/icon/logout.png';

export const sidebarMenus = [
    {
        id: 1,
        title: 'Dashboard',
        icon: Home,
        link: '/dashboard',
        styles: {
            backgroundColor: '#29BB89',
            borderRadius: '15px',
            width: '200px'
        },
        color: '#fff'
    },
    {
        id: 2,
        title: 'My Ticktes',
        icon: Ticket,
        link: '/tickets'
    },
    {
        id: 3,
        title: 'Favorite',
        icon: Favorite,
        link: '/favorite'
    },
    {
        id: 4,
        title: 'Message',
        icon: Message,
        link: '/message'
    },
    {
        id: 5,
        title: 'Transaction',
        icon: Transaction,
        link: '/transaction'
    },
    {
        id: 6,
        title: 'Settings',
        icon: Settings,
        link: '/settings'
    },
    {
        id: 7,
        title: 'Logout',
        icon: Logout,
        link: '/'
    },
]