import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// function FirstChildOnly({ children }) {
//     let firstChild = React.Children.toArray(children)[0];
//     return firstChild;
// } 

// function LastChildOnly({ children }) {
//     let childArray = React.Children.toArray(children);
//     let lastChild = childArray[childArray.length - 1];
//     return lastChild;
// }

// function Head({ number , children }) {
//     let childArray = React.Children.toArray(children);  
//     if (number > 0) {
//         return childArray.slice(
//             0, 
//             number <= childArray.length ? number : childArray.length
//         );
//     }
//     return null;
// }

// function Tail({ number , children }) {
//     let childArray = React.Children.toArray(children);
//     if (number > 0) {
//         return childArray.slice(
//             childArray.length - number > 0 ? childArray.length - number : 0,
//             childArray.length
//         );
//     }
//     return null;
// }

// function TestChildBearingComponent({ Component, number }) {
//     return (
//         <Component number={number}>
//             <p>I'm First!</p>
//             <p>I'm second.</p>
//             <p>Topping off third</p>
//             <p>Fourth</p>
//             <p>Down a fifth</p>
//             <p>Sixth sick sheep</p>
//             <p>Seven is Heaven</p>
//             <p>Last, finally.</p>
//         </Component>
//     )
// }

// ReactDOM.render(
//     <TestChildBearingComponent Component={Tail} number={4}/>,
//     document.getElementById('root')
// );

function Dialog({ children }) {
    let title = null,
        body = null,
        footer = null

        React.Children.forEach(children, (child) => {
            console.log("child")
            switch (child.type) {
                case Title:
                    title = child
                    break;
                case Body: 
                    body = child
                    break;
                case Footer:
                    footer = child
                    break;
                default:
                    throw new Error("Chilrencomponents must be of types Title, Body, or Footer");
            }
        });

        return (
            <div>
                {title}
                {body}
                {footer}
            </div>
        );
}

function Title() {
    return <h1>Happy Wednesday!</h1>
}
function Body() {
    return <p> some lovely things </p>
}
function Footer() {
    return (
        <div>
            <button>Close</button>
        </div>
    );
}

function Other() {
    return <p>Don't display me!</p>
}

ReactDOM.render(
    (<Dialog>
        <Title/>
        <Body/>
        <Footer/>
        <Other/>
    </Dialog>),
    document.getElementById('root')
);