import React from 'react';
import PropTypes from 'prop-types';

function FileName({ fileName }) {
    return <span>{fileName}</span>
}
FileName.propTypes = {
    fileName: PropTypes.string.isRequired
}

export default FileName;