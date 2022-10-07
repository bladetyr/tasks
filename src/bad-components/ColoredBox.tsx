import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

//prop time again? yes?
//I think passing in colorIndex is fine but I don't think React is noticing that I changed the button color
//so it's not changing
//...so ig I'll try a prop???
interface colorTime {
    setColor: (color: number) => void;
}

function ChangeColor({ setColor }: colorTime): JSX.Element {
    return (
        <Button onClick={() => setColor((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview(): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
