/* eslint-disable */
//       "id": "1",
//       "name": "Pavel",
//       "money": "1500",
//       "capital": "1500",

import { GameCubeRoll } from "../../blocks/createNumbers"

//       "color": "red"
interface Player {
  id: number,
  name: string,
  money: number,
  capital: number,
  color: string,
  currentPosition: number
}
// interface IConfigurator {
//   player1: Player
//   player2: Player
//   player3?: Player
//   player4?: Player
//   player5?: Player

// }


export class Game {
  players: Player[]
  currPlayer = 0
  playersQnt: number

  playerInterface = document.querySelector('#pmv') as HTMLDivElement
  cube: GameCubeRoll
  constructor(players: Player[]) {
    this.players = players
    this.playersQnt = players.length
    this.cube = new GameCubeRoll()
  }
  init() {
    this.newTurn(this.players[this.currPlayer])
  }
  newTurn(player: Player) {
    this.playerInterface.innerHTML = ''
    const currPlayerChip = document.querySelectorAll('.fieldChip')[this.currPlayer] as HTMLDivElement
    const rollBtn = document.createElement('button')
    rollBtn.innerText = 'roll'
    const tradeBtn = document.createElement('button')
    tradeBtn.innerText = 'trade'
    const endTurnBtn = document.createElement('button')
    endTurnBtn.innerText = 'end turn'
    this.playerInterface.appendChild(rollBtn)
    this.playerInterface.appendChild(tradeBtn)
    this.playerInterface.appendChild(endTurnBtn)

    rollBtn.addEventListener('click', () => {
      this.cube.roll()
      // this.move(player, this.cube.sum, currPlayerChip)
    })
    endTurnBtn.addEventListener('click', () => {
      this.currPlayer += 1
      if (this.currPlayer === this.players.length) {
        this.currPlayer = 0
      }
      this.newTurn(this.players[this.currPlayer])
    })

  }
  // move(player: Player, cubeSum: number, chip: HTMLDivElement) {
  //   //  CURR POS
  //   const currField = player.currentPosition
  //   const currFieldElem = document.querySelector(`#field${currField}`) as HTMLDivElement

  //   const targetField = currField + 5/* cubeSum */


  //   // const currPLayerLeft = (13 <= targetField && targetField <= 31) ? `${100 - Number(chip.style.left.replace(/%/g, ''))}%` : chip.style.left
  //   // const currPLayerTop = (20 <= targetField && targetField <= 38) ? `${100 - Number(chip.style.top.replace(/%/g, ''))}%` : chip.style.top


  //   //  TARGET POS
  //   const targetFieldElem = document.querySelector(`#field${targetField}`) as HTMLDivElement
  //   const targetFieldElemLeft = (13 <= targetField && targetField <= 31) ? `${100 - Number(targetFieldElem.style.left.replace(/%/g, ''))}%` : targetFieldElem.style.left
  //   const targetFieldElemTop = (20 <= targetField && targetField <= 38) ? `${100 - Number(targetFieldElem.style.top.replace(/%/g, ''))}%` : targetFieldElem.style.top

  //   //  POS'S OF CORNERS
  //   const topLeftCornerElem = document.querySelector(`#field${1}`) as HTMLDivElement
  //   const topLeftCornerElemLeft = topLeftCornerElem.style.left
  //   const topLeftCornerElemTop = topLeftCornerElem.style.top

  //   const topRightCornerElem = document.querySelector(`#field${13}`) as HTMLDivElement
  //   const topRightCornerElemLeft = `90%`
  //   const topRightCornerElemTop = topRightCornerElem.style.top

  //   const bottomRightCornerElem = document.querySelector(`#field${20}`) as HTMLDivElement
  //   const bottomRightCornerElemRight = bottomRightCornerElem.style.right
  //   const bottomRightCornerElemTop = `90%`

  //   const bottomLeftCornerElem = document.querySelector(`#field${32}`) as HTMLDivElement
  //   const bottomLeftCornerElemLeft = bottomLeftCornerElem.style.left
  //   const bottomLeftCornerElemTop = `90%`



  //   const fieldsBetween = [...Array(targetField - currField).keys()].map((n) => n + currField + 1)
  //   const cornerFields = [1, 13, 20, 32]
  //   console.log(fieldsBetween);


  //   if (fieldsBetween.includes(13)) {
  //     chip.animate([
  //       // keyframes
  //       { left: topRightCornerElemLeft, top: topLeftCornerElemTop },
  //     ], {
  //       // timing options
  //       duration: 1000,
  //       fill: 'forwards',
  //     })
  //   }
  //   if (fieldsBetween.includes(20)) {
  //     chip.animate([
  //       // keyframes
  //       { left: bottomRightCornerElemRight, top: bottomRightCornerElemTop },
  //     ], {
  //       // timing options
  //       duration: 1000,
  //       fill: 'forwards',
  //     })
  //   }
  //   if (fieldsBetween.includes(32)) {
  //     chip.animate([
  //       // keyframes
  //       { left: bottomLeftCornerElemLeft, top: bottomLeftCornerElemTop },
  //     ], {
  //       // timing options
  //       duration: 1000,
  //       fill: 'forwards',
  //     })
  //   }
  //   if (fieldsBetween.includes(1)) {
  //     chip.animate([
  //       // keyframes
  //       { left: topLeftCornerElemLeft, top: topLeftCornerElemTop },
  //     ], {
  //       // timing options
  //       duration: 1000,
  //       fill: 'forwards',
  //     })
  //   }
  //   if (!(cornerFields.some((n) => fieldsBetween.lastIndexOf(n) === fieldsBetween.length - 1))) {
  //     if (targetField > 13 && targetField < 20) {

  //       chip.animate([
  //         // keyframes
  //         { left: targetFieldElemLeft, top: targetFieldElemTop },
  //       ], {
  //         // timing options
  //         duration: 1000,
  //         fill: 'forwards',
  //       })
  //     } else
  //       if (targetField > 20 && targetField < 32) {
  //         chip.animate([
  //           // keyframes
  //           { top: targetFieldElemTop, left: targetFieldElemLeft },
  //         ], {
  //           // timing options
  //           duration: 1000,
  //           fill: 'forwards',
  //         })
  //       } else
  //         if (targetField > 32 && targetField < 1) {
  //           chip.animate([
  //             // keyframes
  //             { left: '0%', top: targetFieldElemTop },
  //           ], {
  //             // timing options
  //             duration: 1000,
  //             fill: 'forwards',
  //           })
  //         }
  //   }

  // if (targetFieldElem.classList.contains('top')) {
  //   if (targetFieldElem === topLeftCornerElem) {
  //     chip.animate([
  //       // keyframes
  //       { left: targetFieldElemLeft },
  //     ], {
  //       // timing options
  //       duration: 1000,
  //       fill: 'forwards',
  //     })
  //   }
  // }




  // if (targetFieldElem.classList.contains('top')) {
  //   chip.animate([
  //     // keyframes
  //     // { left: cu },
  //     // { left: targetLeft },
  //     { left: targetFieldElemLeft },
  //     // { transform: `translateX(${targetLeft}) translateY(${targetTop})` },
  //   ], {
  //     // timing options
  //     duration: 1000,
  //     fill: 'forwards',
  //   })


  // }
  // } else
  //   if (targetFieldElem.classList.contains('right')) {

  //     chip.animate([
  //       // keyframes
  //       { left: topRightCornerElemLeft, top: topRightCornerElemTop },
  //       { left: targetLeft, top: targetTop },
  //     ], {
  //       // timing options
  //       duration: 1000,
  //       fill: 'forwards',
  //     })
  //   }
  //     if (targetFieldElem.classList.contains('bottom')) {
  //       if (currFieldElem.classList.contains('top')) {
  //         chip.animate([
  //           // keyframes
  //           { transform: `translateX(${topRightCornerElemPosX}) translateY(${topRightCornerElemPosY})` },
  //           { transform: `translateX(${bottomRightCornerElemPosX}) translateY(${bottomRightCornerElemPosY})` },
  //           { transform: `translateX(${targetLeft}) translateY(${targetTop})` },

  //         ], {
  //           // timing options
  //           duration: 1000,
  //           fill: 'forwards',
  //         })
  //       } else {

  //         chip.animate([
  //           // keyframes
  //           { transform: `translateX(${bottomRightCornerElemPosX}) translateY(${bottomRightCornerElemPosY})` },
  //           { transform: `translateX(${targetLeft}) translateY(${targetTop})` },

  //         ], {
  //           // timing options
  //           duration: 1000,
  //           fill: 'forwards',
  //         })
  //       }

  //     } else
  //       if (targetFieldElem.classList.contains('left')) {
  //         if (currFieldElem.classList.contains('bottom')) {
  //           chip.animate([
  //             // keyframes

  //             { transform: `translateX(${bottomRightCornerElem}) translateY(${bottomRightCornerElem})` },
  //             { transform: `translateX(${targetLeft}) translateY(${targetTop})` },

  //           ], {
  //             // timing options
  //             duration: 1000,
  //             fill: 'forwards',
  //           })
  //         } else {

  //           chip.animate([
  //             // keyframes
  //             { transform: `translateX(${bottomRightCornerElem}) translateY(${bottomRightCornerElem})` },
  //             { transform: `translateX(${targetLeft}) translateY(${targetTop})` },

  //           ], {
  //             // timing options
  //             duration: 1000,
  //             fill: 'forwards',
  //           })
  //         }

  //       }

  // player.currentPosition = targetField
  // }
}