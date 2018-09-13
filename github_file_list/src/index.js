import React from 'react';
import ReactDOM from 'react-dom';
import File from './File';
import FileList from  './FileList';
import './index.css';

let myFiles = [
    new File(1, 'src', 'folder', '2016-07-11 21:24:00', 'initial commit'),
    new File(2, 'tests', 'folder', '2016-07-11 21:24:00', 'initial commit'),
    new File(3, 'README', 'file', '2016-07-18 21:24:00', 'Added a readme'),
];

ReactDOM.render(
    <FileList files={myFiles}/>, 
    document.getElementById('root')
);