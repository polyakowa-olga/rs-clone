import Element from '.././templates/element';
import { PageIds } from '../app';

enum PageNames {
    StartPage = 'Start Page',
    GamePage = 'Game Page',
    WinnersPage = 'Winners Page',
}

const Buttons = [
    {
        id: PageIds.StartPage,
        content: PageNames.StartPage,
    },
    {
        id: PageIds.GamePage,
        content: PageNames.GamePage,
    },
    {
        id: PageIds.WinnersPage,
        content: PageNames.WinnersPage,
    },
];

class Header extends Element {
    constructor(tag: string, classes: string[]) {
        super(tag, classes);
    }

    createPageButtons() {
        const pageButtonsBox = document.createElement('div');
        pageButtonsBox.classList.add('page-button-box');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.content;
            buttonHTML.classList.add('button', `#${button.id}-button`);
            pageButtonsBox.append(buttonHTML);
        });
        return pageButtonsBox;
    }

    returnHTML() {
        this.container.append(this.createPageButtons());
        return this.container;
    }
}

export default Header;
