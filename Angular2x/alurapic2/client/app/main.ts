import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//Usado para carregar o primeiro modulo da aplicação
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);//Usa platform para botar AppModule do arquivo app.module.ts
