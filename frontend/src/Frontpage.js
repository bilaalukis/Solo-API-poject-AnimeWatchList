import React, { component, useEffect, useState, useRef} from 'react'


export default function Frontpage (props) {

    const handleClick = () => {
        props.setView("User")
    }

    return (
        <section className = "frontpage">
            <h1>My Anime List</h1>
            <button onClick={handleClick}>Enter the vault</button>

            <section>
                <a href ="https://github.com/bilaalukis/Solo-API-poject-AnimeWatchList" >Check out my repo!</a>
            </section>
        </section>
    )
}