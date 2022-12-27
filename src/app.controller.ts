import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';
import { AppService } from './app.service';
import { I18nTranslations } from './generated/i18n.generated';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18nService: I18nService<I18nTranslations>
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.i18nService.t('main.HELLO', { lang: 'hi' });
  }
}
