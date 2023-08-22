// #1 React : CreateElement
// <button class="btn" role="button" type="submit">Register</button>
//  <button class="btn" role="button" type="submit" onclick="fn()">Register</button>

// onclick => onClick
const props = {
    className: 'btn',
    role: 'button',
    type: 'submit',
    onClick: () => alert('Successfully Register'),
};
const btnEl = React.createElement('button', props, 'Register');
// console.log(btnEl);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);
