import react from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <img src='./logo.png' alt='logo' className='logo' />

            <img src='./avatar.png' alt='user-avatar' className='avatar' />
        </header>
    )
}

export default Header;