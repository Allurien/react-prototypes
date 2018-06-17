import React from 'react';
import Table from './table';

const App = () => {
    const students = [
        {
            'name': 'Jenny',
            'course': 'Gymnastics',
            'grade': '89'
        },
        {
            'name': 'Johanna',
            'course': 'Nursing',
            'grade': '98'
        },
        {
            'name': 'Jessie',
            'course': 'Spanish',
            'grade': '92'
        }
    ];
    return (
        <div className ="container">
            <h1>Student Grade Table</h1>
            <Table data={students} />
        </div>
    )
};




export default App;

