/* eslint-disable prettier/prettier */

abstract class Page {
    protected container: HTMLElement;

    constructor(id: string) {
        this.container = document.createElement('main') as HTMLElement;
        this.container.classList.add('main');
        this.container.id = id;
    }

    returnHTML() {
        return this.container;
    }
}

export default Page;
