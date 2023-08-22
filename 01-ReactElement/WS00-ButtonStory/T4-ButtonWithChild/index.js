// #1 React : CreateElement
/*
<button >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>Button</span>
</button>
*/

// 1 Tag === 1 ReactElement

// Child
const span1 = React.createElement('span', null);
const span2 = React.createElement('span', null);
const span3 = React.createElement('span', null);
const span4 = React.createElement('span', null);
const span5 = React.createElement('span', null, 'Button');

// Parent : button
const button = React.createElement('button', null, span1, span2, span3, span3, span5);
console.log(button);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);

const props = {
    className: 'btn',
    type: 'submit',
};
