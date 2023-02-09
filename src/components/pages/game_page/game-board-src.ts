/* eslint-disable */
import createNumbers from "../../blocks/createNumbers";
import createIntoGame from "./intoGameView/intoGameView";

const oneNumber = new createNumbers(1, 7).creatNumber();
const twoNumber = new createNumbers(1, 7).creatNumber();
const pageInto = new createIntoGame(`${oneNumber}`, `${twoNumber}`);
const sumNumber = oneNumber + twoNumber;
// console.log(pageInto);
// console.log(oneNumber);
// console.log(twoNumber);
// console.log(sumNumber);

export const boardBody = `<div class="boardBody">
<div class="boardFieldsContainer"></div>
<div class="chat" id="gameChat">CHAT</div>
<div class="playerMainView" id="playerMainView">GAME INTERFACE</div>
</div>`;

export const boardTradeElement = `    
<div class="playerColor"></div>
<div class="flag"></div>
<div class="logo"></div>
<div class="darker"></div>
<div class="lock"></div>
<div class="fieldPrice"></div>
<div class="shares"></div>`;

export const boardAccidental = `<div class="accidential">
</div>`;
