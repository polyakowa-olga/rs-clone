import { IMessage } from "../interfaces/interfaces";

class EventMessages {
  static chanceMessages: IMessage;
  static forceMajeureMessages: IMessage;

  chanceMessages() {
    const ArrayMesasges = [
      {
        text: "Bank pays you dividend of $50!  COLLECT $50.",
        sum: 50
      },
      {
        text:
          "You set aside time every week to hang out with your elderly neighbor – you’ve heard some amazing stories! COLLECT $100.",
        sum: 100
      },
      {
        text:
          "Meow! You knit cozy sweaters for the hairless cats at your local animal shelter. COLLECT $20.",
        sum: 20
      },
      {
        text:
          "Just when you think you can’t go another step, you finish that foot race – and raise money for your local hospital! ADVANCE TO GO. COLLECT $200.",
        sum: 200
      },
      {
        text:
          "You weed the community garden and discover a new bug! Name it something fun! THEN COLLECT $25.",
        sum: 25
      },
      {
        text:
          "You volunteer your art skills and paint a mural at the local school! COLLECT $50.",
        sum: 50
      },
      {
        text:
          "Your cousin forgot their wallet! You happily pay for dinner. PAY $50.",
        sum: 50
      },
      {
        text: "You organize a family reunion! COLLECT $200.",
        sum: 200
      },
      {
        text:
          "You spend the day playing games with kids at a local children’s hospital. COLLECT $100.",
        sum: 100
      },
      {
        text:
          "You organize a group to clean up your town’s footpaths. COLLECT $50.",
        sum: 50
      },
      {
        text:
          "You volunteered at a blood donation. There were free cookies! COLLECT $10.",
        sum: 10
      },
      {
        text:
          "You help your neighbor bring in her groceries. She makes you lunch to say thanks! COLLECT $20.",
        sum: 20
      },
      {
        text:
          "You help your neighbors clean up their Gardens after a big storm. COLLECT $200.",
        sum: 200
      },
      {
        text: "You organize a bake sale for your local school. COLLECT $25.",
        sum: 25
      },
      {
        text: "Your building loan matures. Collect $150",
        sum: 150
      },
      {
        text: "Bank error in your favor! Collect $75.",
        sum: 75
      },
      {
        text: "Income Tax refund - collect $20",
        sum: 20
      },
      {
        text: "You have won a prize in a beauty contest",
        sum: 10
      },
      {
        text: "You inherit $100",
        sum: 100
      },
      {
        text: "From sale of stock you get $50",
        sum: 50
      }
    ];
    const number =
      Math.floor(Math.random() * (ArrayMesasges.length + 1 - 0)) + 0;
    return ArrayMesasges[number];
  }

  forceMajeureMessages() {
    const ArrayMesasges = [
      {
        text: "Doctor’s fee. Pay $50",
        sum: 50
      },
      {
        text:
          "You go to the local school’s car wash fundraiser – but you forget to close your windows! PAY $100.",
        sum: 100
      },
      {
        text: "You didn’t shop local! PAY $50.",
        sum: 50
      },
      {
        text: "You help build a new school playground! PAY $100.",
        sum: 100
      },
      {
        text: "You donate your birthday money to a community center! PAY $50.",
        sum: 50
      },
      {
        text:
          "You buy a few bags of cookies from that school bake sale. Yum! PAY $50.",
        sum: 50
      },
      {
        text:
          "Your fuzzy friends at the animal shelter will be thankful for your donation. PAY $50.",
        sum: 50
      },
      {
        text: "Pay your insurance premium $50! PAY $50.",
        sum: 50
      },
      {
        text: "Parking fine $15",
        sum: 15
      },
      {
        text: "Speeding fine $15",
        sum: 15
      },
      {
        text: "Life Insurance Matures. Pay $100",
        sum: 100
      },
      {
        text: "Pay Hospital Fees of $100",
        sum: 100
      },
      {
        text: "Pay School Fees of $50",
        sum: 50
      },
      {
        text: "Consultancy Fee. Pay $25",
        sum: 25
      },
      {
        text: "You are assessed for street repairs. Pay $40",
        sum: 40
      }
    ];
    const number =
      Math.floor(Math.random() * (ArrayMesasges.length + 1 - 0)) + 0;
    return ArrayMesasges[number];
  }
}

export default EventMessages;
