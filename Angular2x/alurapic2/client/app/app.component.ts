import { Component } from '@angular/core';//syntaxe do ES6, Transforma essa classe em component, procura dentro node_modules

@Component({//Decorator, simplesmente procura a tag <app></app> e insere o conteudo de templateUrl
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html'
})
//Explicação da anotação acima, javascript não existe ainda Decorator ou anotações, para isso precisamos usar uma liguagem que suporte isso.
//Quem precessa um decorator é um typeScript (ts) criada pela Microsoft, ela tem tudo oque o ES5 e ES6 tem, e coloca algumas coisas encima, e uma dessas coisas
//é o decorator, para isso que a extensao desse arquvio é .ts, para que seja possivel processar Anotações.
//So que, o navegador não entende arquivos .ts, para resolver isso, o typeScript que é uma linguagem, vem junto um compilador,
//que converte todo codigo escreito aqui para ES5, garantindo uma maior compatibilidade entre navegadores, então devemos 'codar' esse arquivo com o compilador em execução,
//que convertera o codigo daqui para outro arquivo .js, que por exemplo dessa classe são, app.component.js e js.map, não escrevemos diretamente em ES5 pois nosso codigo
//ficaria muito extenso, se verificarmos a conversão feita no arquivo .js, verificamos que o codigo é muito maior que este em liguagem ES6 com typeScript

//class pra saber angular, tenque saber ES6,
// Seguir convenção, nome da classe semelhante a nome do arquivo, app.component = AppComponent
export class AppComponent {}
