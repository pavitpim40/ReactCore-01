console.log('learn react');

// ## Vanilla (JS DOM API)
// Create Element
// const btn = document.createElement('button');
// btn.innerText = 'cart';
// btn.classList = 'red';

// let count = 0;
// for (let key in btn) {
//     count++;
// }
// console.log(count);

// Render
// const root = document.getElementById('root');
// root.appendChild(btn);

// ## React
// React ==== Global Object (via CDN Link)
// console.log(React);

// React : Create React Element
// <button class="red" >cart</button>
// <button class="blue" >cart</button>
// const reactElement = React.createElement('button', { className: 'blue' }, 'cart');
// console.log(reactElement);

// let count = 0;
// for (let key in reactElement) {
//     count++;
// }
// console.log(count);

// ReactDOM : Render to browser

// Pick DOM
// const domRoot = document.getElementById('root');
// // TakeOver
// const root = ReactDOM.createRoot(domRoot);
// // Render
// root.render(reactElement);

// <button       ><button/>
// React.createElement('button', null);

// <button type="submit" class="btn"></button>

// #1 Object == PROPS
// const props = {
//     type: 'submit',
//     className: 'btn',
// };

// React.createElement => ReactElement == Node == HTML element (V-DOM) == JS OBJ
// const buttonEl = React.createElement('button', props);
// console.log(buttonEl);

// KEY-1
// ReactElement = JS Object ที่เอาไป render ใน Browser ได้
// สร้างโดย React.createElement(tag, propsObj, ...child)

// <button type="submit" class="btn">Hi</button>

const props = {
    type: 'submit',
    className: 'btn',
};
const btnEl = React.createElement('button', props, 'Hi');
console.log(btnEl);

/*
<button >
	<span>C1</span>
	<span>C2</span>
	<span>C3</span>
	<span>C4</span>
	<span>Button</span>
</button>
*/
const child1 = React.createElement('span', null, 'C1');
const child2 = React.createElement('span', null, 'C2');
const child3 = React.createElement('span', null, 'C3');
const child4 = React.createElement('span', null, 'C4');
const child5 = React.createElement('span', null, 'Button');
const parent = React.createElement('button', null, child1, child2, child3, child4, child5);
// params3 ==> child-1
// params4 ==> child-2
// params5 ==> child-3
// paramsN ==> child-N-2

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(parent);
