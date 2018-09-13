import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';

function FileIcon({ fileType }) {
    let icon = faFile;
    if (fileType === 'folder') {
        icon = faFolder;
    }
    return (
        <span>
            <FontAwesomeIcon icon={icon}/>
        </span>
    );
}
FileIcon.propTypes = {
    fileType: PropTypes.string.isRequired
}

export default FileIcon;