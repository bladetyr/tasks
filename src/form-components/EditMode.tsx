import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, setStudent] = useState<string>("Your Name");
    const [dis, setDis] = useState<boolean>(true);
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //onChange={setDis(event.target.checked)} doesn't work so
    //function time ig?
    function updateDis(event: React.ChangeEvent<HTMLInputElement>) {
        setDis(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="checkbox"
                id="isStudent"
                label="Are you a student?"
                checked={isStudent}
                onChange={updateStudent}
            />
            <Form.Check
                type="switch"
                id="editCheck"
                label="Toggle Edit Mode"
                checked={dis}
                onChange={updateDis}
            />
            <Form.Group controlId="formStudentName">
                <Form.Label>Student:</Form.Label>
                <Form.Control
                    type="textbox"
                    value={student}
                    disabled={dis}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setStudent(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                {student} is {isStudent ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
