import React from 'react'

function avg(props) {
    return (
        <div id="ratings">
            <h2>Avg Ratings</h2>
            <h3>{props.avg}</h3>

        </div>
    )
}

export default avg