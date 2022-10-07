import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

//okay prop time
interface doubleProp {
    setValue: (value: number) => void;
}

function Doubler({ setValue }: doubleProp): JSX.Element {
    return <Button onClick={() => setValue(2)}>Double</Button>;
}

function Halver({ setValue }: doubleProp): JSX.Element {
    return <Button onClick={() => setValue(0.5)}> Halve </Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const dhDouble = () => setDhValue(2 * dhValue);
    const dhHalf = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>{" "}
            </div>
            <Doubler setValue={dhDouble}></Doubler>
            <Halver setValue={dhHalf}></Halver>
        </div>
    );
}
