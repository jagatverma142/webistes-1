import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
  submitted = signal(false);

  constructor(private fb: FormBuilder) {}

  sendMessage() {
    if (this.contactForm.valid) {
      console.log('Sending message:', this.contactForm.value);
      this.submitted.set(true);
      this.contactForm.reset();
      setTimeout(() => this.submitted.set(false), 5000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}