/* eslint-disable prettier/prettier */
interface ISettings {
  x: number;
  y: number;
  size: number;
  line: number;
  sizeStep: number;
  lineStep: number;
  frontTranslateZStep: number;
  time1: number;
  time2: number;
  rotateXStep1: number;
  rotateYStep1: number;
  speedStep: number;
}

interface IDiceParams {
  diceId: string;
  frontId: string;
  backId: string;
  leftId: string;
  rightId: string;
  topId: string;
  bottomId: string;
}

class DiceAnimator {

  throwDice(diceParams: IDiceParams, { ...settings }: ISettings) {
    const { diceId, frontId, backId, leftId, rightId, topId, bottomId } = diceParams;
    const Dice = document.querySelector(diceId);
    const front = document.querySelector(frontId);
    const back = document.querySelector(backId);
    const left = document.querySelector(leftId);
    const right = document.querySelector(rightId);
    const top = document.querySelector(topId);
    const bottom = document.querySelector(bottomId);
    const animateId = requestAnimationFrame(animate);
    async function animate() {

      setTimeout(function spin() {
        (<HTMLElement>Dice).style.transform = `rotateX(${(settings.x -=
          settings.rotateXStep1)}deg) rotateY(${(settings.y +=
            settings.rotateYStep1)}deg)`;

        (<HTMLElement>Dice).style.width = `${(settings.line += settings.lineStep)}px`;
        (<HTMLElement>Dice).style.height = `${(settings.line += settings.lineStep)}px`;
        (<HTMLElement>front).style.transform = `translateZ(${(settings.size +=
          settings.frontTranslateZStep)}px)`;
        (<HTMLElement>back).style.transform = `rotateY(180deg) translateZ(${(settings.size +=
          settings.sizeStep)}px)`;
        (<HTMLElement>left).style.transform = `rotateY(-90deg) translateZ(${(settings.size +=
          settings.sizeStep)}px)`;
        (<HTMLElement>right).style.transform = `rotateY(90deg) translateZ(${(settings.size +=
          settings.sizeStep)}px)`;
        (<HTMLElement>top).style.transform = `rotateX(90deg) translateZ(${(settings.size +=
          settings.sizeStep)}px)`;
        (<HTMLElement>bottom).style.transform = `rotateX(-90deg) translateZ(${(settings.size +=
          settings.sizeStep)}px)`;

        if (settings.x > settings.time1) setTimeout(spin, 10);
        if (settings.x < settings.time1) {
          window.cancelAnimationFrame(animateId);
          const winSiseOneDice = document.querySelector(`${diceParams.bottomId}`);
          setTimeout(() => {
            (<HTMLElement>winSiseOneDice).style.backgroundColor = "#15ca42";
            setTimeout(() => {
              (<HTMLElement>winSiseOneDice).style.backgroundColor = "rgb(8, 51, 19)";
            }, 70);
          }, 1000);
        }
      }, 10);
    }
    animate();
  }
}

export default DiceAnimator;