import { Component, ChangeDetectionStrategy, signal, inject, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

@Component({
  selector: 'app-ask-ai',
  templateUrl: './ask-ai.component.html',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AskAiComponent {
  geminiService = inject(GeminiService);
  messages = signal<Message[]>([
    { sender: 'ai', text: "Hello! I'm Jagat AI. How can I help you with your Agri GATE preparation today?" }
  ]);
  promptControl = new FormControl('', Validators.required);
  chatContainer = viewChild<ElementRef<HTMLElement>>('chatContainer');

  constructor() {
    afterNextRender(() => {
        this.scrollToBottom();
    });
  }

  async sendMessage() {
    if (this.promptControl.invalid) {
      return;
    }
    const userMessage = this.promptControl.value!;
    this.messages.update(m => [...m, { sender: 'user', text: userMessage }]);
    this.promptControl.reset();
    this.scrollToBottom();

    const aiResponse = await this.geminiService.generateText(userMessage);
    this.messages.update(m => [...m, { sender: 'ai', text: aiResponse }]);
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
       const container = this.chatContainer()?.nativeElement;
       if(container) {
          container.scrollTop = container.scrollHeight;
       }
    } catch (err) {
      console.error(err);
    }
  }
}