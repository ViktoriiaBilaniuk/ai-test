import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { AiAgentApiService } from './core/services/api/ai-agent-api.service';
import { finalize, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  question = '';

  isLoading = false;
  answer?: string = '';
  error?: string;

  constructor(private aiAgentApiService: AiAgentApiService) {}

  onSubmitClick() {
    if (!this.question) {
      return;
    }
    this.isLoading = true;
    this.error = undefined;
    this.answer = undefined;
    this.aiAgentApiService
      .getAiAgentResult({ question: this.question })
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false)),
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.answer = res.answer;
        },
        error: (err) => {
          console.log(err);
          this.error =
            err?.error?.error ||
            err?.error ||
            err?.message ||
            'Something went wrong';
        },
      });
  }
}
