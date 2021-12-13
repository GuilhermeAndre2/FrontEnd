import React, {Component} from 'react';

class SlideStories extends Component {
    constructor(id) {
      this.slide = document.querySelector(`[data-slide="${id}"]`);
      this.active = 0;
      this.init();
    }
}
  
    activeSlide = (index) => {
      this.active = index;
      this.items.forEach((item) => item.classList.remove('active'));
      this.items[index].classList.add('active');
      this.thumbItems.forEach((item) => item.classList.remove('active'));
      this.thumbItems[index].classList.add('active');
      this.autoSlide();
    }
  
    prev = () =>  {
      if (this.active > 0) {
        this.activeSlide(this.active - 1);
      } else {
        this.activeSlide(this.items.length - 1);
      }
    }
  
    next = () => {
      if (this.active < this.items.length - 1) {
        this.activeSlide(this.active + 1);
      } else {
        this.activeSlide(0);
      }
    }
  
    addNavigation = () => {
      const nextBtn = this.slide.querySelector('.slide-next');
      const prevBtn = this.slide.querySelector('.slide-prev');
      nextBtn.addEventListener('click', this.next);
      prevBtn.addEventListener('click', this.prev);
    }
  
    addThumbItems = () => {
      this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
      this.thumbItems = Array.from(this.thumb.children);
    }
  
    autoSlide = () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.next, 5000);
    }
  
    init = () => {
      this.next = this.next.bind(this);
      this.prev = this.prev.bind(this);
      this.items = this.slide.querySelectorAll('.slide-items > *');
      this.thumb = this.slide.querySelector('.slide-thumb');
      this.addThumbItems();
      this.activeSlide(0);
      this.addNavigation();
    }

  render(){
    return(
        <div data-slide="slide" class="slide">
            <div class="slide-items">
                <img src="./img/Storie1.png" alt="Img 1">
                <img src="./img/Storie2.png" alt="Img 1">
                <img src="./img/Storie3.png" alt="Img 1">
                <img src="./img/Storie4.png" alt="Img 1">
                <img src="./img/Storie5.png" alt="Img 1">
                <img src="./img/Storie6.png" alt="Img 1">
            </div>
            <nav class="slide-nav">
            <div class="slide-thumb"></div>
            <button class="slide-prev">Anterior</button>
            <button class="slide-next">Próximo</button>
            </nav>
  </div>