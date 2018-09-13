import React from 'react';
import PropTypes from 'prop-types';

function CommitMessage({ message }) {
    return <span className="commit-message">{message}</span>
}
CommitMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default CommitMessage;