// #1 React : CreateElement

// Syntax : React.createElement(tag, props, ...child)
// Params : parentTag, attributes, children <Text | Tag>

// TASK1 : Info Text
/*<p class="info-text">
    Build a beautiful, modern website with flexible components built from scratch.
</p>
*/
const infoText = ' Build a beautiful, modern website with flexible components built from scratch.';
const infoElement = React.createElement('p', { className: 'info-text' }, infoText);

// TASK2 : ButtonGroup
/*
<div class="btn_wrapper">
    <button class="btn view_more_btn">view all pages</button>
    <button class="btn documentation_btn">documentation</button>
</div>
*/
const btnElement_1 = React.createElement(
    'button',
    { className: 'btn view_more_btn' },
    'view all pages'
);
const btnElement_2 = React.createElement(
    'button',
    { className: 'btn documentation_btn' },
    'view all pages'
);

const buttonGroupElement = React.createElement(
    'div',
    { className: 'btn_wrapper' },
    btnElement_1,
    btnElement_2
);

// TASK3 : Header
/* 
<h1 class="main-heading">
    Welcome to 
	<span>Codecamp.</span>
    <br />
    Develop anything.
</h1>
*/
const headerChild_1 = 'Welcome To ';
const headerChild_2 = React.createElement('span', null, 'Codecamp.');
const headerChild_3 = React.createElement('br', null);
const headerChild_4 = 'Develop anything';

const HeaderElement = React.createElement(
    'h1',
    { className: 'main-heading' },
    headerChild_1,
    headerChild_2,
    headerChild_3,
    headerChild_4
);

// TASK4 : Hero Image
/* 
<div class="team_img_wrapper">
    <img
        src="https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04"
        alt="team-photo"
    />
</div>
*/
const image = React.createElement('img', {
    src: 'https://i.ibb.co/mhcL2P6/image.png',
    alt: 'team-photo',
});
const heroImageElement = React.createElement('div', { className: 'team_img_wrapper' }, image);

// TASK 5 : Logo
/*
<div class="logo">
    <h2>CodeCamp</h2>
</div>
*/

const logoElement = React.createElement(
    'div',
    { className: 'logo' },
    React.createElement('h2', null, 'CodeCamp')
);

// TASK 6 : Nav-item
/*
<li class="nav_menu_item">
    <a href="#" class="nav_menu_link">account</a>
</li>
*/
// const anchorTag = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'account');
// const navItemElement = React.createElement('li', { className: 'nav_menu_item' }, anchorTag);

// TASK7 : Nav-List
/*
<ul class="nav_menu_list">
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">account</a>
    </li>
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">about</a>
    </li>
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">service</a>
    </li>
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">contact</a>
    </li>
</ul>
*/

// const anchorTag_1 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'account');
// const navItemElement_1 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_1);

// const anchorTag_2 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'about');
// const navItemElement_2 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_2);

// const anchorTag_3 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'service');
// const navItemElement_3 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_3);

// const anchorTag_4 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'service');
// const navItemElement_4 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_4);

// DRY : Don't Repeat Yourself

// FN : (text) => ReactElement
function createNavElement(text) {
    const anchorTag = React.createElement('a', { href: '#', className: 'nav_menu_link' }, text);
    // const navItemElement = React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
    // return navItemElement
    return React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
}

const navItemElement_1 = createNavElement('account');
const navItemElement_2 = createNavElement('about');
const navItemElement_3 = createNavElement('service');
const navItemElement_4 = createNavElement('contact');
const lists = [navItemElement_1, navItemElement_2, navItemElement_3, navItemElement_4];

const navListElement = React.createElement('ul', { className: 'nav_menu_list' }, ...lists);

// TASK 8 : Header
/*
<header class="container header">
    <!-- ==== NAVBAR ==== -->
    <nav class="nav">
        <Task5 />
        <div class="nav_menu" id="nav_menu">
			<Task7/>
        </div>
    </nav>
</header>
*/

const navElement = React.createElement(
    'nav',
    { className: 'nav' },
    logoElement,
    React.createElement('div', { className: 'nav_menu', id: 'nav_menu' }, navListElement)
);
const headerElement = React.createElement('header', { className: 'container header' }, navElement);

// Task 9 : Layout
/*
<section class="wrapper">
    <div class="container">
        <div class="grid-cols-2">
            <!-- left -->
            <div class="grid-item-1">
                <!-- TASK-3 :HEADING -->
                <!-- TASK-1 :INFO-->
                <!-- TASK-2 :BTN -->
            </div>

            <!-- right -->
            <div class="grid-item-2">
                <!-- TASK4:Hero-Image -->
            </div>
        </div>
    </div>
</section>
*/

const left = React.createElement(
    'div',
    { className: 'grid-item-1' },
    HeaderElement,
    infoElement,
    buttonGroupElement
);

const right = React.createElement('div', { className: 'grid-item-2' }, heroImageElement);
const container = React.createElement('div', { className: 'grid-cols-2' }, left, right);
const heroContainer = React.createElement('div', { className: 'container' }, container);
const heroSectionElement = React.createElement('section', { className: 'wrapper' }, heroContainer);

// TASK 10 : FullPage
/*
<>
<Task8/>
<Task9/>
<>
*/

const app = React.createElement(React.Fragment, null, headerElement, heroSectionElement);

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(app);

{
    /* <button type="submit">Button</button>

const props  = {
	type: "submit"
} */
}

{
    /* <MyCompoment title="pavit"/> */
}

// const props = {
// 	title : "pavit"
// }
