import React from 'react';
import ReactDOM from 'react-dom';



var luckyNumber = () => {
    return Math.floor(Math.random() * 1001);
};
const user = {
    'name': 'Jenny',
    'luckyNumber': luckyNumber(),
};
function greeting(user){
    let parentDiv = <div className="container">
        <h1>Hello {user.name}!</h1>
        <h2 className="text-muted">Your lucky number is {user.luckyNumber}!</h2>
    </div>;
    
    return parentDiv;
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);




