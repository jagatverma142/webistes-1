import { Injectable, signal } from '@angular/core';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private ai: GoogleGenAI;
  loading = signal(false);

  constructor() {
    // IMPORTANT: In a real application, the API key should be handled securely
    // and not hardcoded. It's placed here for demonstration purposes only.
    // The `process.env.API_KEY` is a placeholder that will be managed by the
    // execution environment.
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('API_KEY environment variable not set.');
      throw new Error('API_KEY environment variable not set.');
    }
    this.ai = new GoogleGenAI({ apiKey });
  }

  async generateText(prompt: string): Promise<string> {
    this.loading.set(true);
    try {
      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are a helpful and friendly academic advisor for Jagat Education, an institute specializing in the Agri GATE exam. Your role is to answer student questions clearly and concisely. Keep your answers focused on agricultural studies and GATE preparation.',
        }
      });
      return response.text;
    } catch (error) {
      console.error('Error generating text:', error);
      return 'An error occurred while processing your request. Please try again later.';
    } finally {
      this.loading.set(false);
    }
  }
}