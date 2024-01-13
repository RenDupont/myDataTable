import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './lib/MyComponent';

const columns = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'StartDate', label: 'startDate' },
    { key: 'Department', label: 'department' },
    { key: 'DateofBirth', label: 'dateOfBirth' },
    { key: 'Street', label: 'street' },
    { key: 'City', label: 'city' },
    { key: 'State', label: 'state' },
    { key: 'ZipCode', label: 'zipCode' },
];
  
const data = [
    {
        firstName: 'test',
        lastName: 'test',
        StartDate: 'today',
        Department: 'Sales',
        DateofBirth: 'yesterday',
        Street: '1234',
        City: 'here',
        State: 'CA',
        ZipCode: '1234',
    },
    {
        firstName: 'test2',
        lastName: 'test2',
        StartDate: 'today',
        Department: 'Sales',
        DateofBirth: 'yesterday',
        Street: '1234',
        City: 'here',
        State: 'CA',
        ZipCode: '1234',
    },
    {
        firstName: 'test3',
        lastName: 'test3',
        StartDate: 'today',
        Department: 'Sales',
        DateofBirth: 'yesterday',
        Street: '1234',
        City: 'here',
        State: 'CA',
        ZipCode: '1234',
    },
    {
        firstName: 'test4',
        lastName: 'test4',
        StartDate: 'today',
        Department: 'Sales',
        DateofBirth: 'yesterday',
        Street: '1234',
        City: 'here',
        State: 'CA',
        ZipCode: '1234',
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyComponent data={data} columns={columns} />
    </React.StrictMode>
);