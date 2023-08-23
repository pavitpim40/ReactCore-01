// JSX Only
const userProfile = (
    <div className='profile__card'>
        <h1>FullName : John Doe</h1>
        <h2>Age : 30</h2>
    </div>
);

const appComponent = (
    <>
        {userProfile}
        {userProfile}
        {userProfile}
    </>
);

// Component
// สร้าง Component ได้ 2 วิธี
// 1.Function Component (implement 2018-present)
// 2.Class Component (since 2013-present)

// #1 Review JS-Function (Call == Reuse Logic == Gen Value)
// JS-FN : (data) => data
function randomInRange(min, max) {
    let result = min + Math.floor(Math.random() * (max - min + 1));
    return result;
}
// Syntax Call : FN()
let r = randomInRange(1, 10);
let r2 = randomInRange(1, 10);
console.log(r, r2);

// #2 Function Component
// () =>  JSX | ReactElement

// การประกาศ ชื่อฟังก์ชันขึ้นตัวด้วยตัวใหญ่ (react + dev จะรู้่ว่าเป็น Component ไม่ใช่ JS-Function)
// การเรียกใช้ Function Component === Reuse JSX === Reuse UI
// F.C. == FunctionComponent
// Call F.C == <FnName />
function UserProfileComponent() {
    return <h1>FullName : John Doe</h1>;
}

// function UserProfile() {
//     return <h1>FullName : John Doe!</h1>;
// }

function UserProfile() {
    return (
        <div className='profile__card'>
            <h1>FullName : John Doe</h1>
            <h2>Age : 30</h2>
        </div>
    );
}
// Call-1 : UserProfile()
// Call-2 : <UserProfile />

// let user1 = userProfileComponent();
// user1 = <h1>FullName : John Doe</h1>

// ******************************* ดอกจันทร์ล้านตัว
// userProfileComponent() === <userProfileComponent/>
// SYNTAX : <userComponent /> == การ Call,Invoke,เรียกใช้ Function Component

// const app = (
//     <div>
//         {UserProfileComponent()}
//         <UserProfileComponent />
//         <UserProfile />
//         {/* // === UserProfile() == <h1>FullName : John Doe!</h1>; */}
//     </div>
// );

// Biggest Component
function App() {
    return (
        <div className='app'>
            <UserProfile />
            <UserProfile />
            <UserProfile />
        </div>
    );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

// root.render(<h1>FullName : John Doe</h1>);

// root.render(UserProfile());
// root.render(<UserProfile />);

// root.render(App());
root.render(<App />);

/*
<div id="root"> 
	<div class="app">
		<h1>FullName : John Doe!</h1>;
	</div>
</div>
*/
