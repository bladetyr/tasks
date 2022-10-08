import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [gain, setGain] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => setAttempts((parseInt(gain) || 0) + attempts)}
            >
                gain
            </Button>
            <Form.Group controlId="formNumberGainAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setGain(event.target.value)
                    }
                />
            </Form.Group>
            <div>Attempts left: {attempts}.</div>
        </div>
    );
}
