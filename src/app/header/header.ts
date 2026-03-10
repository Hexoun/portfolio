import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  words: string[] = [
    "Étudiant en 2ème année",
    "Développeur web",
    "Passionné de programmation"
  ];

  displayedText = '';
  wordIndex = 0;
  charIndex = 0;
  typing = true;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const currentWord = this.words[this.wordIndex];

    if (this.typing) {
      this.displayedText = currentWord.substring(0, this.charIndex++);
      if (this.charIndex > currentWord.length) {
        this.typing = false;
        setTimeout(() => this.typeEffect(), 1500);
        return;
      }
    } else {
      this.displayedText = currentWord.substring(0, this.charIndex--);
      if (this.charIndex === 0) {
        this.typing = true;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }

    setTimeout(() => this.typeEffect(), this.typing ? 100 : 50);
  }
}