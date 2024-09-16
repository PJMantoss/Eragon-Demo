import Header from '../components/Header';
import './page.css';

const AccountPlanB = () => {
    return(
        <>
            <Header />
            <div className='content'>
                <nav className='sidebar'>
                    <ul className='side-nav'>
                        <li className='side-nav__item'>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                To-do
                            </a>
                        </li>

                        <li className='side-nav__item'>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Dashboard
                            </a>
                        </li>

                        <li className='side-nav__item'>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Territory Analysis
                            </a>
                        </li>

                        <li className='side-nav__item'>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Cadence Generation
                            </a>
                        </li>

                        <li className='side-nav__item'>
                            <a href="#" className='side-nav__link' rel="noopener noreferrer">
                                Call Preparation
                            </a>
                        </li>

                        <li className='side-nav__item side-nav__item--active'>
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
                    <div className='details'>
                        <div className='details__top'>
                            <div className='overview'>
                                <img src='./images/aws.png' alt='Amazon Web Service' className='service'/>
                                <div className="summary">
                                    <h5>Company Summary</h5>
                                    <p>Global leader offering on-demand Infrastructure as a Service; 
                                        over 200 products with high availability and extensive services 
                                        across various computing needs.
                                    </p>
                                </div>
                            </div>

                            <div className="tabs">
                                <div className="tabHeader">
                                    <div>Account</div>
                                    <div>People</div>
                                    <div>Conversations</div>
                                    <div>Activity</div>
                                    <div>Coordinations</div>
                                </div>
                                <div className="tabIndicator"></div>
                                <div className="tabBody">
                                    <div>
                                        <h2>Account</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nulla imperdiet facilisis sagittis. 
                                            Proin varius tellus et lacus rutrum viverra vel at felis. 
                                            Sed bibendum felis varius venenatis congue. 
                                            Quisque lacinia commodo blandit. 
                                            In suscipit, libero a tempus condimentum, 
                                            justo arcu sodales libero, id volutpat eros orci nec sapien. 
                                            Phasellus eget lacinia purus. Morbi elementum fringilla accumsan. 
                                            Mauris elit elit, cursus non libero vitae, sodales maximus tortor. 
                                            Morbi pellentesque quis nunc eu dapibus. Donec eget volutpat nunc. 
                                            Vivamus finibus congue risus, ac congue mauris condimentum et.</p>
                                    </div>
                                    <div>
                                        <h2>People</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nulla imperdiet facilisis sagittis. 
                                            Proin varius tellus et lacus rutrum viverra vel at felis. 
                                            Sed bibendum felis varius venenatis congue. 
                                            Quisque lacinia commodo blandit. 
                                            In suscipit, libero a tempus condimentum, 
                                            justo arcu sodales libero, id volutpat eros orci nec sapien. 
                                            Phasellus eget lacinia purus. Morbi elementum fringilla accumsan. 
                                            Mauris elit elit, cursus non libero vitae, sodales maximus tortor. 
                                            Morbi pellentesque quis nunc eu dapibus. Donec eget volutpat nunc. 
                                            Vivamus finibus congue risus, ac congue mauris condimentum et.</p>
                                    </div>
                                    <div>
                                        <h2>Conversations</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nulla imperdiet facilisis sagittis. 
                                            Proin varius tellus et lacus rutrum viverra vel at felis. 
                                            Sed bibendum felis varius venenatis congue. 
                                            Quisque lacinia commodo blandit. 
                                            In suscipit, libero a tempus condimentum, 
                                            justo arcu sodales libero, id volutpat eros orci nec sapien. 
                                            Phasellus eget lacinia purus. Morbi elementum fringilla accumsan. 
                                            Mauris elit elit, cursus non libero vitae, sodales maximus tortor. 
                                            Morbi pellentesque quis nunc eu dapibus. Donec eget volutpat nunc. 
                                            Vivamus finibus congue risus, ac congue mauris condimentum et.</p>
                                    </div>
                                    <div>
                                        <h2>Activity</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nulla imperdiet facilisis sagittis. 
                                            Proin varius tellus et lacus rutrum viverra vel at felis. 
                                            Sed bibendum felis varius venenatis congue. 
                                            Quisque lacinia commodo blandit. 
                                            In suscipit, libero a tempus condimentum, 
                                            justo arcu sodales libero, id volutpat eros orci nec sapien. 
                                            Phasellus eget lacinia purus. Morbi elementum fringilla accumsan. 
                                            Mauris elit elit, cursus non libero vitae, sodales maximus tortor. 
                                            Morbi pellentesque quis nunc eu dapibus. Donec eget volutpat nunc. 
                                            Vivamus finibus congue risus, ac congue mauris condimentum et.</p>
                                    </div>
                                    <div>
                                        <h2>Coordinations</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Nulla imperdiet facilisis sagittis. 
                                            Proin varius tellus et lacus rutrum viverra vel at felis. 
                                            Sed bibendum felis varius venenatis congue. 
                                            Quisque lacinia commodo blandit. 
                                            In suscipit, libero a tempus condimentum, 
                                            justo arcu sodales libero, id volutpat eros orci nec sapien. 
                                            Phasellus eget lacinia purus. Morbi elementum fringilla accumsan. 
                                            Mauris elit elit, cursus non libero vitae, sodales maximus tortor. 
                                            Morbi pellentesque quis nunc eu dapibus. Donec eget volutpat nunc. 
                                            Vivamus finibus congue risus, ac congue mauris condimentum et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='details__bottom'>
                            <h5>Open Opportunities</h5>
                            <div className="opportunities">
                                <div className='opportunity'>
                                    <h6>Eragon Core</h6>
                                    <p>300 Licenses with</p>
                                    <p>a pipeline of $225K</p>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>June 2024</span>
                                    </div>
                                </div>

                                <div className='opportunity'>
                                    <h6>Eragon Core</h6>
                                    <p>300 Licenses with</p>
                                    <p>a pipeline of $225K</p>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>June 2024</span>
                                    </div>
                                </div>

                                <div className='opportunity'>
                                    <h6>Eragon Core</h6>
                                    <p>300 Licenses with</p>
                                    <p>a pipeline of $225K</p>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>June 2024</span>
                                    </div>
                                </div>

                                <div className='opportunity'>
                                    <h6>Eragon Core</h6>
                                    <p>300 Licenses with</p>
                                    <p>a pipeline of $225K</p>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>June 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form action="#" class="search">
                        <button type="submit" class="search__button">
                            <img src="./images/search.png" alt="search icon" className='search__icon' />
                        </button>
                        <input type="text" class="search__input" placeholder="In a few sentences, what would you like to know about the account?" />
                    </form>
                </main>
            </div>
        </>
    )
};

export default AccountPlanB;