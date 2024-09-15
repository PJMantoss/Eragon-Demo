import react from 'react';
import Header from '../components/Header';

const AccountPlanA = () => {
    return(
        <>
            <Header />
            <div className='content'>
                <nav className='sidebar'>
                    <ul className='side-nav__item'>
                        <li>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                To-do
                            </a>
                        </li>

                        <li>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Dashboard
                            </a>
                        </li>

                        <li>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Territory Analysis
                            </a>
                        </li>

                        <li>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Cadence Generation
                            </a>
                        </li>

                        <li>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Call Preparation
                            </a>
                        </li>

                        <li>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Account Plan
                            </a>
                        </li>
                    </ul>

                    <div className='bottomInfo'>
                        <h4>Settings</h4>
                        <div className='credits'>
                            <span>150 AI Credits</span>
                            <hr />
                            <span>Upgrade to get credits</span>
                        </div>
                    </div>
                </nav>
                <main className='main'>
                    <div className='accounts'>
                        <img src="./images/aws.png" alt="Amazon Web Services" />
                        <img src="./images/apple.png" alt="Apple Logo" />
                        <img src="./images/tesla.png" alt="Tesla" />
                        <img src="./images/google.png" alt="Google Logo" />
                        <img src="./images/spacex.png" alt="Space X" />
                        <img src="./images/a16z.png" alt="A16Z" />
                        <img src="./images/magna.png" alt="Magna Logo" />
                        <img src="./images/enersys.png" alt="Enersys Logo" />
                        <img src="./images/rtp.png" alt="RTP Global" />
                        <img src="./images/addnew.png" alt="Add New Account" />
                    </div>

                    <div className='searchDiv'>
                        <form action="#" class="search">
                            <button type="submit" class="search__button">
                                <svg class="search__icon">
                                    <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
                                </svg>
                            </button>
                        </form>
                        <input type="text" class="search__input" placeholder="In a few sentences, what would you like to know about the account?" />
                    </div>
                </main>
            </div>
        </>
    )
};

export default AccountPlanA;