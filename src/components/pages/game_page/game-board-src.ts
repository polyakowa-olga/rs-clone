import createArrayBlocks from "../../blocks/createNumbers";
import createIntoGame from "./intoGameView/intoGameView";

const araystwo = new createArrayBlocks();
console.log(araystwo);
const pageInto = new createIntoGame(
  `${araystwo.oneNumber}`,
  `${araystwo.twoNumber}`
);
const sumNumber = araystwo.oneNumber + araystwo.twoNumber;
console.log(pageInto);
console.log(`one block: ${araystwo.oneNumber}`);
console.log(`two block: ${araystwo.twoNumber}`);
console.log(`sum numbers: ${sumNumber}`);
console.log(`array one block:${araystwo.arrayNumbersOneBlock}`);
console.log(`array two block:${araystwo.arrayNumbersTwoBlock}`);

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
