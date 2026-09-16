import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as emailjs from '@emailjs/browser';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FadeInUpDirective } from '../../directives/fade-in-up.directive';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslatePipe,
    FadeInUpDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly sending = signal(false);
  readonly status = signal<'sent' | 'error' | null>(null);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid || this.sending()) return;

    this.sending.set(true);
    this.status.set(null);

    emailjs
      .send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        this.form.value,
        environment.emailjs.publicKey,
      )
      .then(() => {
        this.status.set('sent');
        this.form.reset();
      })
      .catch(() => this.status.set('error'))
      .finally(() => this.sending.set(false));
  }
}
