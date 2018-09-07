import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faHeart, faEllipsisH, faReply } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}
Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string.isRequired,
        gravatar: PropTypes.string,
        timestamp: PropTypes.string.isRequired,
        retweets: PropTypes.number,
        likes: PropTypes.number,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            handle: PropTypes.string.isRequired,
        })
    })
}

function Avatar({ hash }) {
    let url = `https://www.gravatar.com/avatar/${ hash ? hash : "nothing"}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar"
        />
    );
}
Avatar.propTypes = {
    hash: PropTypes.string
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}
NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    })
}

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
}

const Message = ({ text }) => <div className="message">{text}</div>
Message.propTypes = {
    text: PropTypes.string.isRequired
}

const ReplyButton = () => (
    <span className="reply-button">
        <FontAwesomeIcon icon={faReply}/>
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
        <FontAwesomeIcon icon={faHeart}/>
        <span className="like-count">{count ? count : null}</span>
    </span>
);
LikeButton.propTypes = {
    count: PropTypes.number
}

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}
getRetweetCount.propTypes = {
    count: PropTypes.number
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <FontAwesomeIcon icon={faRetweet}/>
        {getRetweetCount(count)}
    </span>
);
RetweetButton.propTypes = {
    count: PropTypes.number
}
const MoreOptionsButton = () => (
    <span className="more-options-button">
        <FontAwesomeIcon icon={faEllipsisH}/>
    </span>
);

let testTweet = {
    message: "The fractured I swarms with larval selves",
    gravatar: "?mm",
    author: {
        handle: "rhizomatic",
        name: "Gilles Guattari"
    },
    likes: 7,
    retweets: 46,
    timestamp: "2018-09-05 16:05:00"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));