// #1 Write Your Function Component
function ContactUs() {
    return (
        <form className='contact'>
            <input />
            <button>submit</button>
        </form>
    );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<ContactUs />);
