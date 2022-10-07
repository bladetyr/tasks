import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

//prop time again? yes?
//I think passing in colorIndex is fine but I don't think React is noticing that I changed the button color
//so it's not changing
//...so ig I'll try a prop???
interface colorTime {
    setColor: (color: number) => void;
    color: number;
}

function ChangeColor({ setColor }: colorTime): JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColor(1 % COLORS.length)}>Next Color</Button>
    );
}

function ColorPreview({ color }: colorTime): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color % COLORS.length],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colors, setColors] = useState<number>(0);
    const finalColor = () => setColors(colors + 1);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colors % COLORS.length]}</span>
            <div>
                <ChangeColor setColor={finalColor} color={colors}></ChangeColor>
                <ColorPreview
                    setColor={finalColor}
                    color={colors}
                ></ColorPreview>
            </div>
        </div>
    );
}
