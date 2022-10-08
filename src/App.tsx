import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "./StyleSavvy.css";
//import Hamster from "./images/hamsterposting.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        //test change
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>WOAHHH</h1>
            {/* <img src={Hamster} alt="da funny hampster doe" /> */}
            <img
                src="https://cdn.myanimelist.net/r/360x360/images/anime/10/27428.jpg?s=b357a474d645269c66680e709a78394d"
                alt="Hamster Club Promotional Art"
            ></img>
            <Button
                className="buttony"
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </Button>
            <p>
                Edit<code> src/App.tsx</code> and save. This page will
                automatically reload. Blade was here B] and Hello World
            </p>
            Reasons you should play Petz Hamsterz Life 2 for the GBA:
            <ul className="listy">
                <li>The hamsters are very cute</li>
                <li>
                    I have never felt more joy than when I am playing this game
                </li>
                <li>The hamsters cannot die tragically</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div className="redrect">omg wow</div>
                    </Col>
                    <Col>
                        <div className="redrect">hampter</div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            <DoubleHalf></DoubleHalf>
        </div>
    );
}

export default App;
