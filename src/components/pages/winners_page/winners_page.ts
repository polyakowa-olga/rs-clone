import Page from '../../templates/page';

class WinnersPage extends Page {
    constructor(id: string) {
        super(id);
    }
    createGamePage() {
        const message = document.createElement('div');
        message.textContent = 'winners page';
        message.classList.add('message');
        return message;
    }
    returnHTML() {
        const page = this.createGamePage();
        this.container.append(page);
        return this.container;
    }
}

export default WinnersPage;
