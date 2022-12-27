import { Module } from '@nestjs/common';
import { I18nModule } from 'nestjs-i18n';
import { AcceptLanguageResolver } from 'nestjs-i18n/dist/resolvers/accept-language.resolver';
import { QueryResolver } from 'nestjs-i18n/dist/resolvers/query.resolver';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true
      },
      resolvers: [
        {
          use: QueryResolver,
          options: ['lang']
        },
        AcceptLanguageResolver
      ],
      typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
