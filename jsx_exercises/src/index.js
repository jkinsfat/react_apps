import React from 'react';
import ReactDOM from 'react-dom';

//1. Component Construction
// function Title() {
//     return (
//         <div>The Title</div>
//     );
// }

// function Author() {
//     return (
//         <div>The Author</div>
//     );
// }

// function Rating() {
//     return (
//         <li>
//             5 Stars
//         </li>
//     );
// }

// function ISBN() {
//     return (
//         <li>
//             12-345678-910
//         </li>
//     )
// }

// function Stats() {
//     return (
//         <ul>
//             <Rating/>
//             <ISBN/>
//         </ul>
//     );
// }

// function Book() {
//     return (
//         <div>
//             <Title/>
//             <Author/>
//             <Stats/>
//         </div>
//     );
// }
// ReactDOM.render(<Book/>, document.getElementById('root'));

// //2. Testing Whitespace
// function SingleLine() {
//     return (
//         <div>
//             Newline
//             Test
//         </div>
//     )
// }
// function EmptyNewLines() {
//    return (
//         <div>
//             empty

//             Newlines

//             Here
//         </div>
//    ) 
// }

// function SpacesWithNewLines() {
//     return (
//         <div>
//             &nbsp;Non-breaking
//             &nbsp;Space&nbsp;
//         </div>
//     )
// }

// function InsertingSpaces() {
//     return (
//         <div>
//             Line1
//             {' '}
//             Line2
//         </div>
//     )
// }

// function SpaceTest() {
//     return (
//         <div>
//             <SingleLine/>
//             <EmptyNewLines/>
//             <SpacesWithNewLines/>
//             <InsertingSpaces/>
//         </div>
//     )
// }

// ReactDOM.render(SpaceTest(), document.getElementById('root'));
// //In Conclusion, all newlines between strings are concatenated as a space in the innerHTML value

// //3. Remake the book card in 1 but with react.createElement
// function Book() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement(
//             'div',
//             {className: 'title'},
//             'The Title'
//         ),
//         React.createElement(
//             'div',
//             {className: 'author'},
//             'The Author'
//         ),
//         React.createElement(
//             'ul',
//             {className: 'stats'},
//             React.createElement(
//                 'li',
//                 {className: 'rating'},
//                 '5 Stars'
//             ),
//             React.createElement(
//                 'li',
//                 {className: 'isbn'},
//                 '12-345678-910'
//             )
//         )
//     )
// }

// ReactDOM.render(Book(), document.getElementById('root'));
 
// /*4. Return the appropriate JSX from this component so that when username is undefined
// or null, it renders “Not logged in”. When username is a string, render “Hello, username”.*/

// function Greeting() {
//     // Try all of these variations: 
//     //let username = "root";
//     //let username = undefined; 
//     //let username = null;
//     //let username = false;
//     let greeting = username ? 'Welcome, ' + username : 'Not Logged In';
//     return (
//         <h1>
//             {greeting}
//         </h1>
//     );
// };

// ReactDOM.render(<Greeting/>, document.getElementById('root'));

