import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  @ViewChild('secondSection', {static: true}) secondSection: ElementRef<HTMLDivElement>;
  @ViewChild('menu', {static: true}) menu: ElementRef<HTMLDivElement>;
  @ViewChild('menuSecond', {static: true}) menuSecond: ElementRef<HTMLDivElement>;
  @ViewChild('imageFirst', {static: true}) imageFirst: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', {static: true}) imageSecond: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.initialAnimation();
    this.initialScrollAnimation();
  }


  initialScrollAnimation(): void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '110% center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.3,
      height: 250,
    });

    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        scrub: true,
        start: '80% center'
      },
      duration: 1.1,
      scale: 1.2,
      height: 300
    })

    gsap.to(document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center'
      },
      color: '#fff',
      duration: 1.5
    })

    gsap.to(document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: document.querySelector('.paragraph'),
        scrub: true,
        start: '150% center'
      },
      color: '#fff',
      duration: 1.5
    })
    gsap.to(document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: document.querySelector('.btn'),
        scrub: true,
        start: '150% center'
      },
      color: '#fff',
      duration: 1.5
    })
    gsap.from(document.querySelector('#buy'), {
      scrollTrigger: {
        trigger: document.querySelector('#buy'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center'
      },
      y: 40,
      opacity: 0,
      duration: 1.5
    })

    gsap.from(document.querySelector('#about'), {
      scrollTrigger: {
        trigger: document.querySelector('#about'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center'
      },
      y: 40,
      opacity: 0,
      duration: 1.5
    })

    gsap.from(document.querySelector('.box'), {
      scrollTrigger: {
        trigger: document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center'
      },
      width: 0,
      opacity: 0,
      duration: 1.5
    })

    gsap.from(document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: document.querySelector('.info-1__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom'
      },
      height: 0,
      scale: 1.3,
      opacity: 0,
      duration: 1.5
    })

    gsap.from(document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom'
      },
      opacity: 0,
      duration: 1.5
    })

    gsap.from(document.querySelector('.info-1__visual .heading-3'), {
      scrollTrigger: {
        trigger: document.querySelector('.info-1__visual .heading-3'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom'
      },
      opacity: 0,
      y:40,
      duration: 1.5
    })
    gsap.from(document.querySelector('.info-1__visual .btn--learn'), {
      scrollTrigger: {
        trigger: document.querySelector('.info-1__visual .btn--learn'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom'
      },
      opacity: 0,
      y:40,
      duration: 1.5
    })
  }

  initialAnimation(): void {
    gsap.from(this.menu.nativeElement.childNodes, {duration: 0.5, opacity: 0, y: -20, delay: 0.5, stagger: 0.2});
    gsap.from(this.menuSecond.nativeElement.childNodes, {duration: 0.5, opacity: 0, y: -20, delay: 0.8, stagger: 0.2});
    gsap.from(this.imageFirst.nativeElement, {duration: 0.7, opacity: 0, y: -30, delay: 0.5});
    gsap.from(this.imageSecond.nativeElement, {duration: 0.7, opacity: 0, y: -30, delay: 0.6});
    gsap.from(document.querySelector('.heading-1'), {duration: 0.7, opacity: 0, y: -30, delay: 0.6});
    gsap.from(document.querySelector('.paragraph'), {duration: 0.7, opacity: 0, y: -30, delay: 0.7});
    gsap.from(document.querySelector('.btn'), {duration: 0.7, opacity: 0, y: -30, delay: 0.8});
  }

}
