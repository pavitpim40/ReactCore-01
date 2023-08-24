function MyComponent(props) {
    // console.log(props);
    return <h4>Hello {props.text}!!</h4>;
}

function Button(props) {
    // Reassign Key Text (Modify PropsObj)
    // props.text = 'click';
    return <button className={`btn ${props.className}`}>{props.text}</button>;
}

// ## ส่ง ATTRIBUTE ให้ ReactElement
// JSX : <h1 className="red" role="button">Header</h1>
// const props = {className:"red", role:"button"}
// React : React.createElement("h1",props, "Header")

// ## ส่ง ATTRIBUTE ให้ FunctionComponent
// JSX : <MyComponent text='React' className="red"/>
// const props = {text:"React", className="red"}

// 0 attr : <MyComponent/> === MyComponent()
// 1 attr : <MyComponent text="react" /> == MyComponent(props)
// 2 attr : <MyComponent text="react" className="red" /> == MyComponent(props)
// 2 attr : <MyComponent className="red" text="react" /> == MyComponent(props)

function App() {
    return (
        <div>
            <h1 className='red'>Header</h1>

            <MyComponent text='React' />
            {/* MyComponent({text:"React"}) */}
            <MyComponent text='CSS' />
            {/* MyComponent({text:"CSS"}) */}
            <MyComponent text='JS' className='red' />
            {/* MyComponent({text:"JS", className:"red"}) */}
            <MyComponent text='Go' />
            <MyComponent text='Java' />
            <MyComponent text='Assembly' />
            <Button text='cancel' className='red' />
            <Button text='submit' isAdmin={true} />
            <Button text='continue' className='black' />
        </div>
    );
}
// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
