import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>('es');
  private dict = signal<Record<string, string>>({});

  constructor(private http: HttpClient) {}

  async init(): Promise<void> {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    const browser = navigator.language?.startsWith('en') ? 'en' : 'es';
    await this.setLang(saved ?? browser);
  }

  async setLang(lang: Lang): Promise<void> {
    const dict = await firstValueFrom(this.http.get<Record<string, string>>(`assets/i18n/${lang}.json`));
    this.dict.set(dict);
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  toggle(): void {
    this.setLang(this.lang() === 'es' ? 'en' : 'es');
  }

  t(key: string): string {
    return this.dict()[key] ?? key;
  }
}
