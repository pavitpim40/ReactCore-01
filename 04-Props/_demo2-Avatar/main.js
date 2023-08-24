const persons = [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
];

// Function Component
// props =  { source : "img.png", alt:"Arya"}
function Avatar(props) {
    return (
        <div className='avatar' id='pic'>
            <img className='avatar__image' alt={props.alt} src={props.source} />
        </div>
    );
}
// function AvatarGroup() {
//     return (
//         <div className='container'>
//             <Avatar
//                 source='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//                 alt='Tony Stark'
//             />
//             <Avatar
//                 source='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//                 alt='Ned Stark'
//             />
//         </div>
//     );
// }

// LIST Render

const people = ['Arya', 'Ned', 'Rob', 'John', 'Sansa'];
/* 
    <Avatar alt="Arya"/>
    <Avatar alt="Ned"/>
    <Avatar alt="Rob"/>
    <Avatar alt="John"/>
*/

// MAP : name => <Avatar />
// 1st : "Arya" => <Avatar alt="Arya" />
// 2nd : "Ned" => <Avatar alt="Ned" />
// 3rd : "Rob" => <Avatar alt="Rob" />
// 4rd : "John" => <Avatar alt="John" />

const lists = people.map((name) => <Avatar alt={name} />);
// const lists = people.map((name) => <h1>{name}</h1>);
/*
lists = [
     <Avatar alt="Arya" />,
     <Avatar alt="Ned" />,
     <Avatar alt="Rob" />,
     <Avatar alt="John" />
]
*/

// function AvatarGroup() {
//     return (
//         <div className='container'>
//             {/* <Avatar alt={people[0]} />
//             <Avatar alt={people[1]} />
//             <Avatar alt={people[2]} />
//             <Avatar alt={people[3]} /> */}

//             {/* {lists} */}

//             {people.map((name) => (
//                 <Avatar alt={name} />
//             ))}
//         </div>
//     );
// }

const peopleLists = [
    {
        id: 1,
        name: 'Arya',
        age: 18,
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 2,
        name: 'Ned',
        age: 45,
        src: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 3,
        name: 'Rob',
        age: 25,
        src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 4,
        name: 'John',
        age: 25,
        src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    },
];

function AvatarGroup() {
    return (
        <div className='container'>
            {peopleLists.map((person) => (
                <Avatar alt={person.name} source={person.src} />
            ))}
        </div>
    );
}
// Array => MAP each Object => Render Avatar => Pass Props alt, source

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<AvatarGroup />);
