// #1 React : CreateElement
function Hero() {
    return (
        <div className='img__container'>
            <img src='./image.png' />
        </div>
    );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Hero />);
