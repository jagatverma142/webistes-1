import { Component, ChangeDetectionStrategy, signal, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      quote: 'Jagat Education provided the exact guidance I needed. The mock tests were instrumental in my success. Highly recommended!',
      name: 'Anjali Verma',
      role: 'GATE Topper, AIR 12',
      imageUrl: 'https://picsum.photos/100/100?random=4'
    },
    {
      quote: 'The faculty is incredibly knowledgeable and supportive. Their mentorship made all the difference in my preparation journey.',
      name: 'Ravi Kumar',
      role: 'Successful Aspirant',
      imageUrl: 'https://picsum.photos/100/100?random=5'
    },
    {
      quote: 'Comprehensive study material and regular doubt-clearing sessions helped me build a strong foundation. Thank you, Jagat Education!',
      name: 'Sunita Sharma',
      role: 'GATE Qualified',
      imageUrl: 'https://picsum.photos/100/100?random=6'
    }
  ]);
  
  scrollContainer = viewChild<ElementRef<HTMLElement>>('scrollContainer');
  
  constructor() {
    afterNextRender(() => {
        setInterval(() => this.scrollNext(), 5000);
    });
  }

  scrollNext() {
    const container = this.scrollContainer()?.nativeElement;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      // Reset to start if at the end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  }

  scrollPrev() {
    const container = this.scrollContainer()?.nativeElement;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
}