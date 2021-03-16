import React, { component, useEffect, useState, useRef} from 'react'
import axios from "axios";
import Animelist from './Animelist';

// import 'react-table/react-table.css'

export default function Userpage (props) {

    const [dataArr, setData] = useState([]);

    const handleClick1 = () => {
        
    }
    const handleClick2 = () => {
        
    }
    const handleClick3 = () => {
        
    }
    const handleClick4 = () => {
        props.setView("Front")
    }

    useEffect(()=> {
        const componentDidMount = async () => {
            const dataList = await axios.get("/animes");
                setData(dataList.data)
        }     
        componentDidMount();
    }, [])
    
    console.log(dataArr);
    
    return (
        <section className = "userpage">
            <section>
                <h1 onClick={handleClick4}>Return to Top</h1>
            </section>
            
            <section>
                <button onClick={handleClick1}>Add anime</button>
                <button onClick={handleClick2}>Update anime</button>
                <button onClick={handleClick3}>Delete anime</button>
            </section>

            <section>
                <Animelist dataArr={dataArr}/>
            </section>

        </section>
    )

}