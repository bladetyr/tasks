import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holiday = "April Fool's,Christmas,Easter,Halloween,Mischief Night";
    const [currentHoliday, setCurrentHoliday] =
        useState<string>("Mischief Night");
    const [emoji, setEmojii] = useState<string>("🥚");

    function alphabetical(): void {
        const list = holiday.split(",");
        const index = list.indexOf(currentHoliday);
        if (index === list.length - 1) {
            setCurrentHoliday(list[0]);
        } else {
            setCurrentHoliday(list[index + 1]);
        }
    }

    function date(): void {
        if (currentHoliday === "Mischief Night") {
            setCurrentHoliday("Halloween");
        } else if (currentHoliday === "Halloween") {
            setCurrentHoliday("Christmas");
        } else if (currentHoliday === "Christmas") {
            setCurrentHoliday("April Fool's");
        } else if (currentHoliday === "April Fool's") {
            setCurrentHoliday("Easter");
        } else if (currentHoliday === "Easter") {
            setCurrentHoliday("Mischief Night");
        }
    }

    function setEmoji(): void {
        if (currentHoliday === "Halloween") {
            setEmojii("🎃");
        } else if (currentHoliday === "Mischief Night") {
            setEmojii("🥚");
        } else if (currentHoliday === "Easter") {
            setEmojii("🐇");
        } else if (currentHoliday === "April Fool's") {
            setEmojii("😈");
        } else {
            setEmojii("🎄");
        }
    }

    return (
        <div>
            <Button
                onClick={() => {
                    alphabetical();
                    setEmoji();
                }}
            >
                {" "}
                Alphabet{" "}
            </Button>
            <Button
                onClick={() => {
                    date();
                    setEmoji();
                }}
            >
                Year
            </Button>
            {emoji}
        </div>
    );
}
