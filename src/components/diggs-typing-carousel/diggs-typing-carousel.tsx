import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'diggs-typing-carousel',
  styleUrl: 'diggs-typing-carousel.css'
})
export class DiggsTypingCarousel {

  @Prop() textList: string = '[ "hello.", "greetings!" ]'; 
  @Prop() waitSeed: number = 300;
  @State() textArray: Array<string> = [];
  @State() textToDisplay: string = '';
  isDeleting: boolean = false;
  textArrayIndex: number = 0;
  currentText: string = '';
  charIndex: number = 0;

  componentWillLoad() {

    if (this.textList) {
      this.textArray = JSON.parse(this.textList);
    }
      
    this.currentText = this.textArray[0];
  }

  componentDidLoad() {

    this.updateText();
  }

  updateText() {

    var wait = this.waitSeed - Math.random() * 100;

    if (this.isDeleting) {
      wait /= 2;
      this.charIndex--;
      if (this.charIndex < 0) {
        wait = 500;
        this.isDeleting = false;
        this.textArrayIndex = (this.textArrayIndex + 1 > this.textArray.length - 1)
          ? 0
          : this.textArrayIndex + 1;
        this.currentText = this.textArray[this.textArrayIndex];
      }
      else {
        this.textToDisplay = this.currentText.substring(0, this.charIndex);
      }
    }
    else {
      this.charIndex++;
      if (this.charIndex > this.currentText.length) {
        wait = 500;
        this.isDeleting = true;
        this.textToDisplay = this.currentText;
      }
      else {
        this.textToDisplay = this.currentText.substring(0, this.charIndex);
      }
    }

    setTimeout(() => {
      this.updateText();
    }, wait);
  }

  render() {
    return (
      <span> <span id='carousel'>{this.textToDisplay}</span></span>
    );
  }
}