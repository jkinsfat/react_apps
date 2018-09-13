import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Time({ time }) {
    const timePassed = moment(time).fromNow();
    return (
        <span className="time">
            {timePassed}
        </span>
    );
}
Time.propTypes = {
    time: PropTypes.string.isRequired
};

export default Time;