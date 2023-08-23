// #H3 : สร้าง <Logo/> <NavMenu/>
const Logo = () => (
    <div className='logo'>
        <h2>CodeCamp</h2>
    </div>
);

function NavMenu() {
    return (
        <div className='nav_menu' id='nav_menu'>
            <ul className='menu_list'>
                <li className='nav_menu_item'>
                    <a href='#' className='nav_menu_link'>
                        account
                    </a>
                </li>
                <li className='nav_menu_item'>
                    <a href='#' className='nav_menu_link'>
                        about
                    </a>
                </li>
                <li className='nav_menu_item'>
                    <a href='#' className='nav_menu_link'>
                        service
                    </a>
                </li>
                <li className='nav_menu_item'>
                    <a href='#' className='nav_menu_link'>
                        contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

// #H2 : สร้าง Header Component
function Header() {
    return (
        <header className='container header'>
            <nav className='nav'>
                <Logo />
                <NavMenu />
            </nav>
        </header>
    );
}

// #H2 : สร้าง Hero Component...
function Hero() {
    return (
        <section className='wrapper'>
            <div className='container'>
                <div className='grid-cols-2'>
                    <div className='grid-item-1'>
                        <h1 className='main-heading'>
                            Welcome to <span>CodeCamp</span>
                            <br />
                            Develop anything.
                        </h1>
                        <p className='info-text'>
                            Build a beautiful, modern website with flexible components built from
                            scratch.
                        </p>
                        <div className='btn_wrapper'>
                            <button className='btn view_more_btn'>view all pages</button>
                            <button className='btn documentation_btn'>documentation</button>
                        </div>
                    </div>
                    <div className='grid-item-2'>
                        <div className='team_img_wrapper'>
                            <img src='https://i.ibb.co/YkbPPn3/team.png' alt='team-photo' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// # H1 : สร้าง AppComponent
// ประกาศฟังก์ชันคอมโพเนนต์
function App() {
    // return React.createElement('div', null, 'App!');
    return (
        <div className='app'>
            <Header />
            <Hero />
        </div>
    );
}
// เรียกใช้ฟังก์ชันคอมโพเนนต์
// <App/>

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

const myJSX = (
    <div>
        <h1>Hello</h1>
        <h4>Age</h4>
    </div>
);

root.render(<App />);
