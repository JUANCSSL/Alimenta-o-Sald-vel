import React, {useEffect, useState} from "react";
import { getDinner } from "../api";
import { response } from "express";

const Dinner = () => {
    const[dinner, setDiner] = useState([]);
    
    useEffect(() => {
        getDinner().then((response) => {
            setDiner(response.date);
        });
    }, []);

    return (
        <section id="dinner">
            <h2>Jantar Saldavel</h2>
            <ul>
                {dinner.map((item,index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default Dinner;