// #1 React : JSX
let height = 1.75;
let weight = 60;

const calcBMI = (w, h) => w / h ** 2;

// function calcBMI (weight,height) {
// 	// Parameter : ตัวแปร JS ที่ใช้ใน Function (แต่คนเรียกใช้ function เป็นคนกำหนดค่า)
// 	// let w = 60
// 	// let h = 1.75

// }
// calcBMI(9,5)
calcBMI(weight, height); // calBMI(60,1.75)
// calcBMI(5,9)

const userBmi = (
    <>
        <h1>My BMI</h1>
        <h3>{calcBMI(weight, height).toFixed(2)}</h3>
    </>
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(userBmi);

// <h3> {(w / h ** 2).toFixed(2)} </h3>
