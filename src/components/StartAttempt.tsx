import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [disable, setDisable] = useState<boolean>(true);
    const [inProgress, setProgress] = useState<boolean>(true);

    function disableToggle(): void {
        setDisable(!disable);
    }

    function progressToggle(): void {
        setProgress(!inProgress);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={() => setAttempts(1 + attempts)}
                    disabled={!disable}
                >
                    Mulligan
                </Button>
                Your Attempts: {attempts}
            </div>

            <div>
                <Button
                    onClick={() => {
                        progressToggle();
                        disableToggle();
                        setAttempts(attempts - 1);
                    }}
                    disabled={!disable || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>

            <div>
                <Button
                    onClick={() => {
                        progressToggle();
                        disableToggle();
                    }}
                    disabled={disable}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
