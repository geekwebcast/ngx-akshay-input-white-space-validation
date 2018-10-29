# NgxAkshayInputWhiteSpaceValidationApp


## Installation

To install this library, run:

```bash
$ npm install ngx-akshay-input-white-space-validation --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-akshay-input-white-space-validation
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxAkshayInputWhiteSpaceValidationModule } from 'ngx-akshay-input-white-space-validation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgxAkshayInputWhiteSpaceValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components in your Angular application:

```

<form #f="ngForm" novalidate>
  <input type="text" [(ngModel)]="firstName" #firstName="ngModel" whiteSpaceValidator name='firstName' required
    placeholder="First Name">
  <span class="error-block" *ngIf="(firstName.errors?.required ||firstName.errors?.whiteSpaceValidator?.valid) && firstName.touched">
    *First Name is required
  </span>
  <input type="text" [(ngModel)]="email" #email="ngModel" name="email" required placeholder="Enter your email ID" email>
  <p *ngIf="email.errors?.required && email.touched">
    *Please enter a valid email.
  </p>
  <p *ngIf="email.errors?.email && email.touched && !email.errors?.required">
    *Please enter a valid email.
  </p>
</form>

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Credits

![alt text](https://www.trickyfunctions.com/wp-content/uploads/2018/10/credits.png)


## License

MIT © [nandakumar-r](mailto:nandangalaxies@gmail.com)
