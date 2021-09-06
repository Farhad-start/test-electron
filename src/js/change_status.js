import { domReady } from './utilities';

export default class ChangeStatus {
  static init() {
    (new ChangeStatus()).init()
  }

  async init() {
    await domReady();

    this.storage = window.localStorage;

    this.el = document.querySelector('#change-status');
    this.link = this.el.querySelector('a');
    this.container = this.el.querySelector('.custom-dropdown');
    this.inputStatus = this.container.querySelector('#input-status');
    this.saveBtn = this.container.querySelector('#save-btn');

    this.displayStatus();

    this.link.addEventListener('click', (e) => {
      e.stopPropagation();
      this.container.classList.add("custom-dropdown-visible");
    });

    this.saveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.updateStatus();
    });

    this.inputStatus.addEventListener('keypress', (e) => {
      const key = e.keyCode || e.which;

      if (key == 13) {
        e.preventDefault();
        this.updateStatus();
      }
    });

    this.container.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
      this.container.classList.remove("custom-dropdown-visible");
    });
  }

  displayStatus() {
    this.link.text = this.storage.getItem('status') || 'изменить статус'
  }

  updateStatus() {
    this.storage.setItem('status', this.inputStatus.value);
    this.displayStatus();
    this.container.classList.remove("custom-dropdown-visible");
  }
}
