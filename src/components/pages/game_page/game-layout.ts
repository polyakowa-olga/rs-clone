import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { chinaSharesFields, leftrightSharesFields, skSharesFields, topBottomSharesFields, winnerMenu } from "./game-board-src";
import { winnerMenuRu } from "./game-board-src";
/* eslint-disable */
export class GameLayout {
  public static changeFieldValue(fields: ICardsData[]) {
    fields.forEach((field) => {
      const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
      const priceElem = cardElem.querySelector('.fieldPrice') as HTMLDivElement
      const sharesElem = cardElem.querySelector('.shares') as HTMLDivElement
      const currValue = field.currValue ? field.currValue : field.price

      if ([7, 26].includes(field.id) && field.owner !== null) {
        priceElem.innerText = `🎲🎲X${currValue}`
      } else {
        priceElem.innerText = `$${currValue}K`
      }
      const currFieldShares: number[] | undefined = field.value?.shares
      if (currFieldShares) {
        sharesElem.removeAttribute('class');
        sharesElem.classList.add('shares');
        switch (field.currValue) {
          case currFieldShares[0]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares1')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares1v')
            } else if (skSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesKO1')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN1')
            }
            break;
          case currFieldShares[1]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares2')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares2v')
            } else if (skSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesKO2')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN2')
            }
            break;
          case currFieldShares[2]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares3')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares3v')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN3')
            }
            break;
          case currFieldShares[3]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares4')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares4v')
            } else if (chinaSharesFields.includes(field.id)) {
              sharesElem.classList.add('sharesCHN4')
            }
            break;
          case currFieldShares[4]:
            if (topBottomSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares5')
            } else if (leftrightSharesFields.includes(field.id)) {
              sharesElem.classList.add('shares5v')
            }
            break;
          default:
            break;
        }
      }
    })
  }
  public static refreshPlayerHTML(player: IPlayer) {
    const capitalElem = document.querySelector(`#capital-${player.id}`) as HTMLDivElement
    const moneyElem = document.querySelector(`#money-${player.id}`) as HTMLDivElement
    capitalElem.innerText = `${player.capital}`
    moneyElem.innerText = `${player.money}`
  }

  public static removePlayerHTML(player: IPlayer) {
    const playerElem = document.getElementById(`${player.id}`) as HTMLDivElement
    const capitalElem = document.querySelector(`#capital-${player.id}`) as HTMLDivElement
    const moneyElem = document.querySelector(`#money-${player.id}`) as HTMLDivElement
    capitalElem.innerText = `${0}`
    moneyElem.innerText = `${0}`
    playerElem.classList.add('bankruptPlayer')
  }

  public static playerColorField(player: IPlayer, field: ICardsData) {
    const cardElem = document.querySelector(`#field${field.id}`) as HTMLDivElement
    const cardColorElem = cardElem.querySelector('.playerColor') as HTMLDivElement
    cardColorElem.className = ''
    cardColorElem.classList.add('playerColor', `color${player.id}`)
  }

  public static winnerHtml(player: IPlayer) {
    const gamePageElem = document.querySelector('#game-page') as HTMLDivElement
    const timerElem = document.querySelector('#timer') as HTMLDivElement
    const time = timerElem.innerText
    timerElem.style.visibility = 'hidden'
    gamePageElem?.classList.add('end-game');

    if (localStorage.getItem("language") === "ru") {
      gamePageElem?.insertAdjacentHTML('afterbegin', winnerMenuRu);
    } else {
      gamePageElem?.insertAdjacentHTML('afterbegin', winnerMenu);
    }

    const winnerNameElem = document.querySelector('.winner__name') as HTMLDivElement
    const winnerCapitalElem = document.querySelector('.winner__capital') as HTMLDivElement
    const timeElem = document.querySelector('.winner__time') as HTMLDivElement

    winnerNameElem.innerText = player.name
    winnerCapitalElem.innerText = `Capital: ${player.capital}`;
    if (localStorage.getItem("language") === "ru") {
      winnerCapitalElem.innerText = `Капитал: ${player.capital}`;
    }
    timeElem.innerText = `time: ${time}`;
    if (localStorage.getItem("language") === "ru") {
      timeElem.innerText = `Время: ${time}`;
    }
  }

  public static fullScreen() {
    const fSelem = document.createElement('div')
    const btn = document.createElement('div')
    fSelem.append(btn)
    btn.classList.add('fullScreenBtn')
    fSelem.classList.add('fullScreenElem')
    btn.title = "fullscreen mode"
    const main = document.querySelector('#game-page') as HTMLDivElement
    btn.addEventListener('click', () => {
      toggleFullscreen()
    })
    main.append(fSelem)


    function toggleFullscreen() {
      let elem = document.querySelector('#game-page') as HTMLDivElement;
      btn.classList.toggle('open-full-screen')
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch((err) => {
          alert(
            `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
          );
        });
      } else {
        document.exitFullscreen();
      }
    }
  }

  public static timerHTML(time: number) {
    const boardElem = document.querySelector('.board') as HTMLDivElement
    let timerElem = document.querySelector('#timer') as HTMLDivElement
    if (!timerElem) {
      const timer = document.createElement('div')
      timer.id = 'timer'
      timerElem = timer
      boardElem.append(timer)
    }
    const currTimeLine = (time: number) => {
      let hh: number | string
      let mm: number | string
      let ss: number | string
      hh = Math.floor(time / 3600)
      mm = Math.floor((time / 3600 - hh) * 60)
      ss = Math.floor(time - hh * 3600 - mm * 60)

      if (hh >= 10) {
        hh = `${hh}`
      } else {
        hh = `0${hh}`
      }
      if (mm >= 10) {
        mm = `${mm}`
      } else {
        mm = `0${mm}`
      }
      if (ss >= 10) {
        ss = `${ss}`
      } else {
        ss = `0${ss}`
      }

      return `${hh}:${mm}:${ss}`
    }

    timerElem.innerText = currTimeLine(time)
  }
}