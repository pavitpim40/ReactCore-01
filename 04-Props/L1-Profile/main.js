function Profile(props) {
    // props = {name:"J.D.", age:33}
    return (
        <>
            <h1>NAME : {props.name}</h1>
            <p>AGE : {props.age} </p>
        </>
    );
}

function App() {
    return (
        <div className='container'>
            <Profile name='J.D.' age={33} />
            <Profile name='J.K.' age={40} />
            {Profile({ name: 'j.d.', age: 34 })}
            {Profile({ name: 'j.k.', age: 41 })}
        </div>
    );
}

// <Profile /> 						 === Profile({})
// <Profile name="J.D." /> 			 === Profile({name:"J.D"})
// <Profile name="J.D." age={33} />  === Profile({name:"J.D",age:33})
// <Profile name="J.K." age={40} />  === Profile({name:"J.K",age:40})

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
