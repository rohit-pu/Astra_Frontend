import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="min-h-screen flex flex-col" style="background-color: var(--background-color);">
      <!-- Top navigation bar -->
      <header
        class="flex items-center justify-between px-8 py-4 border-b"
        style="background-color: var(--section-bg); border-color: var(--secondary-color);"
      >
        <div class="flex items-center gap-3">
          <span class="font-bold text-lg" style="color: var(--text-color);">
            Astra Portal
          </span>
          <span
            *ngIf="user"
            class="text-xs uppercase tracking-wider px-2 py-0.5 rounded font-semibold text-white"
            style="background-color: var(--primary-color);"
          >
            {{ user.role }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <span *ngIf="user" class="text-sm text-gray-600">
            {{ user.email }}
          </span>
          <p-button
            label="Sign Out"
            icon="pi pi-sign-out"
            [outlined]="true"
            severity="secondary"
            size="small"
            (onClick)="signOut()"
          ></p-button>
        </div>
      </header>

      <!-- Blank placeholder body for interns -->
      <main class="flex-1 flex flex-col items-center justify-center p-8">
        <div
          class="w-full max-w-2xl p-8 rounded-lg shadow-sm text-center"
          style="background-color: var(--section-bg); border: 1px solid var(--secondary-color);"
        >
          <div class="mb-4">
            <i class="pi pi-check-circle text-4xl" style="color: var(--primary-color);"></i>
          </div>
          <h2 class="text-2xl font-bold mb-2" style="color: var(--text-color);">
            Astra Dashboard
          </h2>
          <p class="text-gray-600 text-sm mb-6">
            Authenticated successfully via Google OAuth.
          </p>
          <div
            class="p-4 rounded text-left text-xs text-gray-700 bg-gray-50 border border-gray-200"
          >
            <p class="font-semibold mb-1">Developer Notice for Interns:</p>
            <p>
              This dashboard is a blank placeholder. You can now build out feature modules inside
              <code>src/app/features/</code>.
            </p>
          </div>
        </div>
      </main>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getMe().subscribe({
      next: (userData) => {
        this.user = userData;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  signOut(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
}

