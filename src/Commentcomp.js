import React from 'react'

function Commentcomp(props) {
    return (
        <>
            <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.authorname}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">
                        {props.time}
                    </span>
                </div>
                <div className="text">
                    {props.txt}
                </div>

            </div>
        </>
    )
}

export default Commentcomp


