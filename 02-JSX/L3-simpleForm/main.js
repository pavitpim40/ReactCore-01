// ให้สร้าง tag <label> และ <input>
// tag <input> มี class ชื่อ username มี id คือ username และมี attribute ชื่อ name ให้มีค่าเท่ากับ username
// tag <label> ให้ใส่ข้อความ Username และมี attribute ชื่อ for ให้มีค่าเท่ากับ id ของ tag <input>
// ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX

// #1 React : JSX
// <input /> Self Closing (No need Child
// class => className
// for => htmlFor
// onclick => onClick

const formData = (
    <>
        <label htmlFor='username_id'>Username</label>
        <input className='username' id='username_id' name='username' />
    </>
);
{
    /* <input className='username' id='username_id' name='username' /> */
}
// const props =  {className:"username", id:"username_id",name:"username"}
// React.createElement("input",props)

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(formData);
