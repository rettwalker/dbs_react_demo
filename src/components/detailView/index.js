import React from 'react'

export default function (props) {
    return (
        <div className="d-flex flex-column align-items-start pl-3">
            <h4>Name: <span>{props.name}</span></h4>
            <h4>Description:</h4>
            <p className="pl-5">{props.description}</p>
        </div>
    )
}
