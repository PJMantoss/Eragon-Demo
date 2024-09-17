import Header from '../components/Header';
import './page.css';

const AccountPlanC = () => {

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
                                    <div className='active'>People</div>
                                    <div>Conversations</div>
                                    <div>Activity</div>
                                    <div>Coordinations</div>
                                </div>
                                <div className="tab-indicator2"></div>
                                <div className="tab-body2">
                                    <div className='active'>
                                        <section className="person-summary">
                                            <h5>Anasuya S.</h5>
                                            <section className="profile2">
                                                <img src="./images/square.png" alt="Play" className='square'/>
                                                <section className="person2">
                                                    <h5>Person Summary</h5>
                                                    <p>Decades-long tech leader from Siebel to AWS; specialized in strategic planning.</p>
                                                </section>
                                            </section>
                                        </section>
                                        
                                        <section className="team">
                                            <h5>Our Team in Contact</h5>
                                            <section className="team-members">
                                                <section className='company-person'>
                                                    <section className="profile">
                                                        <img src="./images/red-avatar.png" alt="Play" />
                                                        <section className="person">
                                                            <h6>Name</h6>
                                                            <p>Position</p>
                                                        </section>
                                                    </section>

                                                    <section className="profile">
                                                        <img src="./images/red-avatar.png" alt="Play" />
                                                        <section className="person">
                                                            <h6>Name</h6>
                                                            <p>Position</p>
                                                        </section>
                                                    </section>

                                                    <section className="profile">
                                                        <img src="./images/playBtn.png" alt="Play" />
                                                        <section className="person">
                                                            <h6>Name</h6>
                                                            <p>Position</p>
                                                        </section>
                                                    </section>

                                                    <section className="profile">
                                                        <img src="./images/playBtn.png" alt="Play" />
                                                        <section className="person">
                                                            <h6>Name</h6>
                                                            <p>Position</p>
                                                        </section>
                                                    </section>

                                                    <section className="profile">
                                                        <img src="./images/playBtn.png" alt="Play" />
                                                        <section className="person">
                                                            <h6>Name</h6>
                                                            <p>Position</p>
                                                        </section>
                                                    </section>
                                                </section>
                                            </section>
                                        </section>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='details__bottom2'>
                            <h5>All Conversations with Anasuya</h5>
                            <hr />
                            <div className="opportunities2">
                                <div className='opportunity2'>
                                    <h6>Upgrade</h6>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>June 2024</span>
                                    </div>
                                </div>

                                <div className='opportunity2'>
                                    <h6>Discovery Call</h6>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>April 2023</span>
                                    </div>
                                </div>

                                <div className='opportunity2'>
                                    <h6>Purchase</h6>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>June 2022</span>
                                    </div>
                                </div>

                                <div className='opportunity2'>
                                    <h6>Attended Conference</h6>
                                    <div className='calendar'>
                                        <img src="./images/calendar.png" alt="calendar" />
                                        <span>Dec 2021</span>
                                    </div>
                                </div>

                                <div className='opportunity2'>
                                    <h6>Upgrade</h6>
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

export default AccountPlanC;