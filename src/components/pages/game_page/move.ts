import SoundsGame from "../../sounds/Sounds";
import { IPlayer } from "../../interfaces/interfaces";
import { Game } from "./init-game";
import { PlayerCash } from "./playerCash";

/* eslint-disable */
export class Move {
  public static move(player: IPlayer, targetField: number) {
    const currField = player.currentPosition;
    Move.playerChipMove(player, targetField);
    SoundsGame.chipShuffle();
    if ((27 <= currField && currField <= 38) && (1 <= targetField && targetField <= 12)) {
      // chat message "give 200k$ for round"
      PlayerCash.addMoneyToPlayer(player, 200)
      console.log(`player ${player.id} gets 200$ and now have ${player.money}`);
    }

    player.currentPosition = targetField
  }


  protected static playerChipMove(player: IPlayer, targetField: number) {
    // const currFieldElem = document.querySelector(`#field${currField}`) as HTMLDivElement
    const currPlayer = Game.currPlayer
    const currPlayerChip = document.querySelectorAll('.fieldChip')[currPlayer] as HTMLDivElement
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
  }
}