/* eslint-disable */

export const boardBody = `<div class="boardBody">
<div class="boardFieldsContainer"></div>
<div class="chat" id="gameChat"><h3 class="block-name">CHAT</h3></div>
<div class="playerMainView"><h3 class="block-name">GAME INTERFACE</h3><div id="pmv"></div></div>
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

export const tradeWindow = `<div class="trade">
<span id="trade__close">X</span>
</div>`
export const tradeChoosePlayerWindow = `<div class="trade">
<span id="trade__close">X</span>
<p class="trade__title">Choose player:</p>
<select id="tradeSelectPlayer">
</div>`

export const tradeContainer = `<div class="trade__container">
    <div class="trade__top-player">
        <input type="range" id="tpRange" step="1">
        $<output id="tpValue"></output>
        <p class="trade__title">Property:</p>
        <div id="tpCards"></div>
    </div>
    <div class="trade__bottom-player">
        <input type="range" id="bpRange" step="1">
        $<output id="bpValue"></output>
        <p class="trade__title">Property:</p>
        <div id="bpCards"></div>
    </div>
</div>`