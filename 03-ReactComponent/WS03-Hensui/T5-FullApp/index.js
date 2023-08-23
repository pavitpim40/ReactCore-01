// #1 React : CreateElement
const Header = () => {
    return <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>;
};

function Hero() {
    return (
        <div className='hero'>
            <img src='./hero.png' />
        </div>
    );
}

function ContactUs() {
    return (
        <form className='contact'>
            <input />
            <button>submit</button>
        </form>
    );
}

const InfoText = function () {
    return (
        <p>
            Welcome to Hensui, the newest addition to the vibrant Los Angeles dining scene! Our
            restaurant is dedicated to bringing you the most authentic and delicious Japanese
            cuisine. Stay tuned for our grand opening date, sign up with your e-mail address to get
            notified.{' '}
        </p>
    );
};

function App() {
    return (
        <div className='app'>
            {/* Left */}
            <Hero />
            {/* Right */}
            <div className='info'>
                <Header />
                <InfoText />
                <ContactUs />
            </div>
        </div>
    );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
