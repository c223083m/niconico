class SimpleSlider {
  constructor(containerId, items, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Slider container with id "${containerId}" not found.`);
      return;
    }
    // items is now expected to be an array of objects: { src: string, link: string, title?: string }
    // Backwards compatibility check: if items are strings, convert to objects
    this.items = items.map(item => 
      typeof item === 'string' ? { src: item, link: '#', title: '' } : item
    );
    this.currentIndex = 0;
    this.onSlideChange = options.onSlideChange || null; // コールバック関数
    
    this.render();
    this.attachEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="slideshow-container">
        <a id="slide-link" href="${this.items[this.currentIndex].link}">
            <div id="slide-title" class="slide-title"></div>
            <img id="slide-image" class="slide-image" src="${this.items[this.currentIndex].src}" alt="Slide ${this.currentIndex + 1}">
        </a>
        <button id="slide-prev" class="slide-button slide-prev">&lt;</button>
        <button id="slide-next" class="slide-button slide-next">&gt;</button>
        <div id="slide-counter" class="slide-counter">${this.currentIndex + 1} / ${this.items.length}</div>
      </div>
    `;
    this.updateImage(false); // 初回は通知しない設定も可能だが、統一のため通知してもよい。ここでは通知しない。
  }
  
  attachEvents() {
    this.container.querySelector('#slide-prev').addEventListener('click', () => this.prev());
    this.container.querySelector('#slide-next').addEventListener('click', () => this.next());
  }

  updateImage(notify = true) {
    const imgElement = this.container.querySelector('#slide-image');
    const linkElement = this.container.querySelector('#slide-link');
    const titleElement = this.container.querySelector('#slide-title');
    
    // フェード効果のために一旦透明にする
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
        const item = this.items[this.currentIndex];
        imgElement.src = item.src;
        imgElement.alt = `Slide ${this.currentIndex + 1}`;
        linkElement.href = item.link;
        
        if (item.title) {
            titleElement.textContent = item.title;
            titleElement.style.display = 'block';
        } else {
            titleElement.style.display = 'none';
        }

        imgElement.style.opacity = '1';
        
        // スライド切り替え通知
        if (notify && this.onSlideChange) {
            this.onSlideChange(this.currentIndex, item);
        }

    }, 250); // CSSのtransition時間と合わせるか、少し短くする

    const counterElement = this.container.querySelector('#slide-counter');
    counterElement.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateImage();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateImage();
  }
}
