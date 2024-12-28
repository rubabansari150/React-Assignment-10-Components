import React from 'react'

export default function List(props) {
    return (
        <>
            <div className="container mx-auto mt-5">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-success text-center">{props.text}</li>
                    <li className="list-group-item list-group-item-danger text-center">A simple danger list group item</li>
                    <li className="list-group-item list-group-item-warning text-center">A simple warning list group item</li>
                    <li className="list-group-item list-group-item-info text-center">A simple info list group item</li>
                    <li className="list-group-item list-group-item-dark text-center">A simple dark list group item</li>
                </ul>
            </div>
        </>
    )
}
