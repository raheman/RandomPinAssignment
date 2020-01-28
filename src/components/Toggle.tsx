import * as React from 'react';
import { type } from 'os';

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    StatusColor:statuscolor
}
type statuscolor="active"


export function Toggle(Props: ToggleProps) {
    var color=Props.StatusColor==="active"?"white":"red"
    return <div>
            <button onClick={Props.ClickHandler} style={{backgroundColor:color}}> Generate</button>
            <button onClick={Props.ClickHandler}>Saved</button>
            </div>
}