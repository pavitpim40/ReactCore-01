// #1 React : CreateElement

// HTML => React
// class => className
// onclick => onClick
const attributes = {
    className: 'btn',
};

// <button class="btn">Button</button>
const BtnElement = React.createElement('button', attributes, 'Button');

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task

// root.render( "string" | reactElement)
root.render(BtnElement);
