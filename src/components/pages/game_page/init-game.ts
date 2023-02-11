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
      this.move(player, this.cube.sum, currPlayerChip)
    })
    endTurnBtn.addEventListener('click', () => {
      this.currPlayer += 1
      if (this.currPlayer === this.players.length) {
        this.currPlayer = 0
      }
      this.newTurn(this.players[this.currPlayer])
    })

  }
  move(player: Player, cubeSum: number, chip: HTMLDivElement) {

    const currField = player.currentPosition
    const currFieldElem = document.querySelector(`#field${currField}`) as HTMLDivElement
    const chipStyle = window.getComputedStyle(chip)
    // const currPLayerPosX = chipStyle.getPropertyValue('left')
    // const currPLayerPosY = chipStyle.getPropertyValue('top')


    const targetField = currField + 5/* cubeSum */
    const targetFieldElem = document.querySelector(`#field${targetField}`) as HTMLDivElement
    const targetFieldElemLeft = targetFieldElem.style.left
    // console.log(targetFieldElemLeft);


    const topLeftCornerElem = document.querySelector(`#field${1}`) as HTMLDivElement
    const topLeftCornerElemLeft = topLeftCornerElem.style.left
    const topLeftCornerElemTop = topLeftCornerElem.style.top

    const topRightCornerElem = document.querySelector(`#field${13}`) as HTMLDivElement
    const topRightCornerElemLeft = topRightCornerElem.style.left
    const topRightCornerElemTop = topRightCornerElem.style.top

    const bottomRightCornerElem = document.querySelector(`#field${20}`) as HTMLDivElement
    const bottomRightCornerElemLeft = bottomRightCornerElem.style.left
    const bottomRightCornerElemTop = bottomRightCornerElem.style.top

    const bottomLeftCornerElem = document.querySelector(`#field${32}`) as HTMLDivElement
    const bottomLeftCornerElemLeft = bottomLeftCornerElem.style.left
    const bottomLeftCornerElemTop = bottomLeftCornerElem.style.top





    // chip.style.left = targetLeft
    // chip.style.top = targetTop











    if (targetFieldElem.classList.contains('top')) {
      chip.animate([
        // keyframes
        // { left: cu },
        // { left: targetLeft },
        { left: targetFieldElemLeft },
        // { transform: `translateX(${targetLeft}) translateY(${targetTop})` },
      ], {
        // timing options
        duration: 1000,
        fill: 'forwards',
      })


    }
    // } else
    //   if (targetFieldElem.classList.contains('right')) {

    //     chip.animate([
    //       // keyframes
    //       { right: topRightCornerElemLeft, top: topRightCornerElemTop },
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

    player.currentPosition = targetField
  }
}