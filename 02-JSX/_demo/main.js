// #1 Vanilla (JS-DOM)
// ## Imperative Way (พรรณนา)
// const header = document.createElement("h1")
// header.innerText = "Hello"

// #2A : Vanilla (React)
// const header = React.createElement("h1",{className:"header"},"Hello")

// #2B : JSX : Javascript Syntax Extension + Babel
// ## Declarative : อยากได้อะไรให้บอก เดี๋ยวจัดการที่เหลือให้

// const header = <h1>Hello</h1>; // ReactElement

const userAge = 42;
const fullName = 'John Doe';
const userHobby = 'FOOTBALL';
const isMarried = true;
const exp = ['Driver', 'Dev', 'Prime minister'];

const userPets = {
    dog: 'Jum-meng',
    cat: 'Kai-kow',
};

// ORG :   ['Driver', 'Dev', 'Prime minister']
// New : [<li>Driver</li>, <li>Dev</li>, <li>Prime minister</li>]

const expList = exp.map((career) => <li>{career}</li>);

// const string = `hello ${userAge}`;
// console.log(string);
// JSX => not render Boolean

function myLuckyNumber() {
    return 1 + Math.floor(Math.random() * 10);
}
// myLuckyNumber() === Expression

//  JSX : Html likes Syntax == ReactElement
// { JS AREA }

const styleObj = {
    color: 'blue',
    textAlign: 'center',
};
const userProfile = (
    <div>
        <input />
        <h1 className='header'>FullName : {fullName} </h1>
        <h4>age : {userAge} </h4>
        <h4>hobby : {userHobby}</h4>
        <h4>isMarried : {isMarried ? 'true' : 'false'}</h4>
        <h4>Experience</h4>
        <ul>
            {exp.map((career) => (
                <li>{career}</li>
            ))}
        </ul>
        {/* <ul> 
			<li>Driver</li>
			<li>Dev</li>
			<li>Prime minister</li>
		</ul> */}
        <h4>Pets</h4>
        <p style={styleObj}>DOG : {userPets.dog}</p>
        <p> CAT : {userPets.cat}</p>
        <h4>MyLuckyNumber : {myLuckyNumber()}</h4>
    </div>
);
// console.log(userProfile);

// ReactDOM
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);
