import React, { useEffect, useState} from "react";
import { getLunch } from "../api";


const Lunch = () => {
    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        getLunch().then((response) => {
            setLunch(response.data);
        });
    }, []);

    return (
        <section id="lunch">
            <h2>Almoço Saldavel</h2>
            <ul>
                {lunch.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default Lunch;