/* eslint-disable */

export const boardBody = `<div class="boardBody">
<div class="boardFieldsContainer"></div>
<div class="chat" id="gameChat"><h3 class="block-name">CHAT</h3></div>
<div class="playerMainView"><div id="pmv"></div></div>
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

export const topBottomSharesFields = [2, 4, 5, 9, 10, 12, 28, 29, 31, 21, 23, 24]
export const leftrightSharesFields = [14, 15, 16, 18, 19, 33, 34, 35, 37, 38]
export const skSharesFields = [7, 26]
export const chinaSharesFields = [3, 30, 11, 22]
export const skChinaFields = [skSharesFields, chinaSharesFields].flat()
export const tradebleCards = [topBottomSharesFields, leftrightSharesFields, skSharesFields, chinaSharesFields].flat()

export const tradeChoosePlayerWindow = `
<span id="tradeClose">X</span>
<div class="trade__container">
<p class="trade__title">Current Player: <span id="tradeCP"></span></p>
<p class="trade__title">Choose player:</p>
<select id="tradeSelectPlayer"></select>
<button id="tradeBtn">Trade</button>
</div>`

export const tradeContainer = `
    <div class="trade__top-player">
    <p class="trade__title"><span id="tradeCP"></span></p>
        <input type="range" id="tpRange" value="0" step="1">
        <div class="range-value">$<output id="tpValue">0</output>K</div>
        <p class="trade__title">Property:</p>
        <div id="tpCards"></div>
    </div>
    <div class="trade__bottom-player">
    <p class="trade__title"><span id="tradeBP"></span></p>
        <input type="range" id="bpRange" value="0" step="1">
        <div class="range-value">$<output id="bpValue">0</output>K</div>
        <p class="trade__title">Property:</p>
        <div id="bpCards"></div>
    </div>
    <button id="makeOfferBtn">Make offer!</button>
`
export const mortgageMenu = `
<div class="mortgage">
<button id="exitLockBtn">Exit</button>
</div>`