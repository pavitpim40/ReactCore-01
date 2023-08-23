// ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง
// ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง
// ให้ render หน้า web โดยใช้ JSX ดังนี้
// แสดงชื่อ fullName ใน tag <h1>
// แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)

// #1 React : JSX
// JSX == 1 Root Element (1 Parent)
// JSX == <> </>
// แทรก JS ลงใน JSX ให้ใช้ {}
// const age = 30;
let fullName = 'Pavit Pimchanagul';
let birthYear = 2000;
const CURRENT_YEAR = 2023;
let textColor = 'text-blue';
const userProfile = (
    <>
        <h1 className='text-red'>fullname: {fullName} </h1>
        <p className={textColor}>Age {CURRENT_YEAR - birthYear}</p>
    </>
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(userProfile);
// 1 Tag == 1 ReactElement == 1 Node (V-DOM) == 1 Obj
// 1 JSX ==  1 ReactElement (HTML Likes Syntax)
