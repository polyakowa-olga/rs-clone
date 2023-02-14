import { Player } from "./init-game";

/* eslint-disable */
export class Move {
  public static move(player: Player, currPlayer: number, cubeSum: number, currPlayerChip: HTMLDivElement) {
    const currField = player.currentPosition
    // const currFieldElem = document.querySelector(`#field${currField}`) as HTMLDivElement
    const targetField = (currField + 5) === 38 ? 38 : (currField + 5) % 38/* cubeSum here */
    const targetFieldElem = document.querySelector(`#field${targetField}`) as HTMLDivElement
    const targetFieldElemStyleLeft = (1 <= targetField && targetField <= 12 || 32 <= targetField && targetField <= 38) ? 'left' : 'right'
    const targetFieldElemStyleTop = (1 <= targetField && targetField <= 19) ? 'top' : 'bottom'

    const targetLeft = targetFieldElemStyleLeft === `left` ? targetFieldElem.style.left : targetFieldElem.style.right
    const targetTop = targetFieldElemStyleTop === `top` ? targetFieldElem.style.top : targetFieldElem.style.bottom
    currPlayerChip.setAttribute("style", `${targetFieldElemStyleLeft}:${targetLeft};${targetFieldElemStyleTop}:${targetTop};`);
    switch (currPlayer) {
      case 0:
        if (targetFieldElemStyleLeft === 'left') {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${0}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        } else {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${-0}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        }
        break;
      case 1:
        if (targetFieldElemStyleLeft === 'left') {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${30}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        } else {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${-30}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        }
        break;
      case 2:
        if (targetFieldElemStyleLeft === 'left') {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${60}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        } else {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${-60}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        }
        break;
      case 3:
        if (targetFieldElemStyleLeft === 'left') {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${80}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        } else {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${-80}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        }
        break;
      case 4:
        if (targetFieldElemStyleLeft === 'left') {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${90}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        } else {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${-90}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        }
        break;
      case 5:
        if (targetFieldElemStyleLeft === 'left') {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${100}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        } else {
          currPlayerChip.animate([
            // keyframes
            { transform: `translateX(${-100}%)` },
          ], {
            // timing options
            duration: 1000,
            fill: 'forwards',
          })
        }
        break;
    }

    player.currentPosition = targetField
  }
}