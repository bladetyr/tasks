import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(2);
    const [right, setRight] = useState<number>(3);
    //const [win, setWin] = useState<boolean>(false);
    //const [lose, setLose] = useState<boolean>(false);

    /*function checkWin(): void {
        if (left === right && left != 1) {
            setWin(true);
        } else {
            setWin(false);
        }
        if (left === right && left === 1) {
            setLose(true);
        } else {
            setLose(false);
        }
    }*/
    return (
        <div>
            <span data-testid="left-die">{left}</span>
            <Button
                onClick={() => {
                    setLeft(d6);
                    //checkWin();
                    //console.log(left);
                }}
            >
                Roll Left
            </Button>
            <span data-testid="right-die">{right}</span>
            <Button
                onClick={() => {
                    setRight(d6);
                    //checkWin();
                    //console.log(right);
                }}
            >
                Roll Right
            </Button>
            {left === right && left != 1 && <div>Win</div>}
            {left === right && left === 1 && <div>Lose</div>}
        </div>
    );
}
