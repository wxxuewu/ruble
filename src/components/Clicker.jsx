import {useState} from "react";

export const Clicker = () => {

    const [rubles, setRubles] = useState(2);

    const onButtonClick = () => {
        setRubles(rubles + 1);
    }

    return (
        <>
            <p> У тебя {rubles} рублей</p>
            <button onClick={onButtonClick}>Click!</button>
        </>
    )
}