import React, { component, useEffect, useState, useRef} from 'react'


export default function Frontpage () {

    const [currentView, setView] = useState("All");
    
    return (
        <section className = "navbar">
            <h1>My Anime List</h1>
            <button>Log in</button>
        </section>
    )

}