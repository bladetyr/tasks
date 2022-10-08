import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("pink");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        id="colorButtons"
                        name="Pick your favorite!"
                        value={c}
                        label={c}
                        onChange={updateColor}
                    />
                </>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                Your chosen color is {color}
            </div>
        </div>
    );
}
