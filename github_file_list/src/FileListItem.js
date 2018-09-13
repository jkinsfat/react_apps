import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <td className="file-icon"><FileIcon fileType={file.type}/></td>
        <td className="file-name"><FileName fileName={file.name}/></td>
        <td><CommitMessage message={file.message}/></td>
        <td className="age">
            <Time time={file.updatedAt}/>
        </td>
    </tr>
)
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

export default FileListItem;