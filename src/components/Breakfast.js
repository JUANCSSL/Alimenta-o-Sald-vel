import React, { useEffect, useState} from "react";
import { getBreakfast } from "../api";
import { response } from "express";

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        getBreakfast().then((response) => {
            setBreakfast(response.data);
        });
    }, []);

    return (
        <section id="breakfast">
            <h2>Café de Manhã Saldável</h2>
            <ul>
                {breakfast.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default Breakfast;