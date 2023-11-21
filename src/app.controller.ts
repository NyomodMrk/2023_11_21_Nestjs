import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(
    @Query('email') email: string,
    @Query('jelszo') jelszo: string,
    @Query('jelszo2') jelszo2: string,
  ): object {
    let pattern = /[a-zA-Z1-9]/;
    let emailpattern = /[a-z@.]/;
    const errors: any = {}; 
    if (email === '' ) {
      errors.email = 'Az email mezőt is töltsd ki!';
    }
    if ((new RegExp(emailpattern)).test(email))
    {
      errors.email = "Nem megfelelő az email formátum!";
    }
    if (jelszo === '') {
      errors.jelszo = 'A jelszó mezőt is töltsd ki!';
    }
    if((new RegExp(pattern)).test(jelszo)) {
      errors.jelszo = 'Nem tartalmaz kis és nagybetűt vagy számokat a jelszó.'
    }
    if (jelszo2 === '') {
      errors.jelszo2 = 'Ismételd meg a jelszavad!'; 
    }
    if (jelszo !== jelszo2) {
      errors.jelszo2 = 'Nem egyeznek a jelszavak!';
    }
    return { email, jelszo, jelszo2, errors, };
  }
}
