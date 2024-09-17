import Header from '../components/Header';
import './page.css';

const AccountPlanG = () => {

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
                                <div className="tab-header">
                                    <div>Account</div>
                                    <div>People</div>
                                    <div>Conversations</div>
                                    <div>Activity</div>
                                    <div className='active'>Coordinations</div>
                                </div>
                                <div className="tab-indicator4"></div>
                                <div className="tab-body3">
                                    <div className='active'>
                                        <section className="staff">
                                            <section className='staff-profile'>
                                                <img src="./images/tom.png" alt="Tom" />
                                                <div className='staff-details'>
                                                    <div className="full-name">
                                                        <div className="name">
                                                            <img src="./images/dot.png" alt="Dot" />
                                                            <h5>Tom Scott</h5>
                                                        </div>

                                                        <div className="number">
                                                            <span>3</span>
                                                            <img src="./images/add-square.png" alt="Add" />
                                                        </div>
                                                    </div>

                                                    <div className="post">
                                                        <div className="info">
                                                            <span className="status">Low</span>
                                                            <p className="continue">...</p>
                                                            <h6 className="title">Dinner with C-Suite</h6>
                                                            <p className="text">Taking Scott, Ashley, and Tom to McDonalds</p>
                                                        </div>

                                                        <div className="friends">
                                                            <img src="./images/tomsfriend1.png" alt="friend" />
                                                            <img src="./images/tomsfriend2.png" alt="friend" />
                                                        </div>
                                                    </div>

                                                    <div className="post">
                                                        <div className="info">
                                                            <span className="status pink">High</span>
                                                            <p className="continue">...</p>
                                                            <h6 className="title">Business Case Rough Draft</h6>
                                                            <p className="text">Service Cloud 3 Year ACV ROI and TCO presentation</p>
                                                        </div>

                                                        <div className="friends">
                                                            <img src="./images/tomsfriend1.png" alt="friend" />
                                                            <img src="./images/tomsfriend2.png" alt="friend" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </section>
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

export default AccountPlanG;