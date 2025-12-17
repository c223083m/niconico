class SimpleSlider {
  constructor(containerId, images) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Slider container with id "${containerId}" not found.`);
      return;
    }
    this.images = images;
    this.currentIndex = 0;
    
    this.render();
    this.attachEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="slideshow-container">
        <img id="slide-image" class="slide-image" src="${this.images[this.currentIndex]}" alt="Slide ${this.currentIndex + 1}">
        <button id="slide-prev" class="slide-button slide-prev">&lt;</button>
        <button id="slide-next" class="slide-button slide-next">&gt;</button>
        <div id="slide-counter" class="slide-counter">${this.currentIndex + 1} / ${this.images.length}</div>
      </div>
    `;
    this.updateImage();
  }
  
  attachEvents() {
    this.container.querySelector('#slide-prev').addEventListener('click', () => this.prev());
    this.container.querySelector('#slide-next').addEventListener('click', () => this.next());
  }

  updateImage() {
    const imgElement = this.container.querySelector('#slide-image');
    // フェード効果のために一旦透明にする
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
        imgElement.src = this.images[this.currentIndex];
        imgElement.alt = `Slide ${this.currentIndex + 1}`;
        imgElement.style.opacity = '1';
    }, 250); // CSSのtransition時間と合わせるか、少し短くする

    const counterElement = this.container.querySelector('#slide-counter');
    counterElement.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  }
}
