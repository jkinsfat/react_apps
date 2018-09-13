import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import Time from './time';
import './index.css';

function FileList({ files }) {
    return (
        <table className="file-list">
            <tbody>
                {files.map( file => 
                    <FileListItem key={file.id} file={file} />  
                )}
            </tbody>
        </table>
    );
}       
FileList.propTypes = {
    files: PropTypes.array
}

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <FileName file={file}/>
        <CommitMessage message={file.message}/>
        <td className="age">
            <Time time={file.updatedAt}/>
        </td>
    </tr>
)
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

function CommitMessage({ message }) {
    return (
        <td className="commit-message">{message}</td>
    )
}
CommitMessage.propTypes = {
    message: PropTypes.string.isRequired
}
function FileIcon({ fileType }) {
    let icon = faFile;
    if (fileType === 'folder') {
        icon = faFolder;
    }
    return (
        <td className="file-icon">
            <FontAwesomeIcon icon={icon}/>
        </td>
    );
}

function FileName({ file }) {
    return (
        <React.Fragment>
            <FileIcon fileType={file.type}/>
            <td className="file-name">{file.name}</td>
        </React.Fragment>
    )
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};

class File {
    constructor(id, name, type, updatedAt,  message) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.message = message;
        this.updatedAt = updatedAt;
    }
}
// //Can't write es5 classes in this context. 
// //Babel, assuming an es6 context, will transpile this to undefined
// function File(id, name, type, updatedAt, message) {
//     this.id = id;
//     this.name = name;
//     this.type = type;
//     this.message = message;
//     this.updatedAt = updatedAt;
//     return this;
// }

let myFileList = [
    new File(1, 'src', 'folder', '2016-07-11 21:24:00', 'initial commit'),
    new File(2, 'tests', 'folder', '2016-07-11 21:24:00', 'initial commit'),
    new File(3, 'README', 'file', '2016-07-18 21:24:00', 'Added a readme'),
]

ReactDOM.render(
    <FileList files={myFileList}/>, 
    document.getElementById('root')
);