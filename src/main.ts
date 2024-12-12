import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';
import { ShortUrlsComponent } from './app/short-urls/short-urls.component';
import { UrlInfoComponent } from './app/url-info/url-info.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: '', component: LoginComponent }, // Страница входа
        { path: 'urls', component: ShortUrlsComponent }, // Таблица URL
        { path: 'urls/:id', component: UrlInfoComponent }, // Информация о короткой ссылке
      ],
      withComponentInputBinding()
    ),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
