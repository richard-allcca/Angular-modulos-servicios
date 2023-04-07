# Bases de Angular

Theme  - Night Wolf dark blue No Italics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Como ver los componentes en local

    De inicio se muestra el componete de Viewport.
    Para utilizar los componentes usa las siguientes rutas:
    /contador
    /dbz
    /gifs
    /heroes

## Proyectos

- Aplicación de contador basico.
- Aplicación de DBZ, pseudo crud con listado de personajes.
- Aplicación de Gif, busqueda de gifs mediante peticiones http.
  - Bootstrap
- Aplicación de listado simple de heroes, practica de manejo de directivas.

## Directivas

1. *ngIf
2. *ngIf else
3. *ngFor

## Decoradores

1. @Input()
    - Para el paso de datos del Padre al Hijo
    - Se debe enlazar la prop de padre mediante el html
    - El `hijo.ts` recibe la prop con @Input()

          @Input nameProp: tipoData = valor;
          <app-component-hijo [namePropHijo]="namePropPadre">

2. @OutPut()
    - Componente hijo envíe datos al padre
    - Se crea un evento con este decorador en el hijo
    - el tipo del evento es el tipo de dato que se envía
    - el padre recibe el evento en el html
    - En el Ts del padre lo recibe como un `Evento`
    - `Importante` usar el `$event` como parámetro
  
          @Output onNameEvent: EventEmitter<tipoDatoEnviado> = new EventEmitter();
          (onNameEvent)="nameEventPadre($event)"

3. @viewChild() - example in component busqueda gifs
    - @ViewChild('nameRef') nameAsignateForUse: ElementRef
    - Lee contenido del un input
    - El value se encuentra en `nativeElement.value`
    - @viewchild puede hacer referencia al elemento por la etiqueta, la clase, o el #ref con la referencia que especifiques

## Módulos

1. @NgModule
    - `declarations`: componentes que forman parte de este módulo
    - `export`: el component principal o los que serán usados en otros módulos
    - `imports`: servicios específicos a un modulo
      1. commonModule: Permite la funcionalidad del enlace entre de .ts en .html
      2. FormsModule: Para el uso de `ngSubmit` en formularios crea un preventDefault
    - `providers`: servicios que se usan en los components que son parte del módulo
    - `bootstrap`: componente principal que se ejecuta al iniciar la app

## Servicios

1. @Injectable()
    - Convierte una clase en servicio no necesita argumentos
    - Especificarlo en el `Provider` del Módulo principal
    - Inyectarlo en el `Constructor` del Componente donde lo necesites
    - `Nota` para romper el paso de tipos por referencia usa `Spread Operator`
    - `Importante` las propiedades del servicio deben ser `Privadas`

## Eventos - ()

1. `(onclick)` - evento de click

2. `(ngSubmit)` - necesitas el `FormModule` en imports de module, además un name en input

3. `(input)` - ONE WAY DATA BINDING envia valor del input al `ts`
  
4. `[(ngModel)]` - TWO WAY DATA BINDING, `[]` captura el valor y `()` emite el valor

5. `[ngClass]`.
  5.1 string: se agregan las clases CSS enumeradas en la cadena (delimitadas por espacios).
  5.2 Array: se agregan las clases CSS declaradas como elementos Array.
  5.3 Objeto: las claves son clases de CSS que se agregan cuando la expresión dada en el valor se evalúa como un valor verdadero; de lo contrario, se elimina

## Peticiones HTTP - @angular/common/http

- HttpClientModule, se provee en el appModule
- HttpClient, en el servicio donde se hace la petición
- HttpParams, es parte de @angular/common/http, usa un set("") por cada param

## Propiedades dinámicas - []

- Se establecen con `[]`, su valor o data en `comillas dobles`

## Pipes [List](https://angular.io/api?type=pipe)

     ° AsyncPipe
     ° CurrencyPipe
     ° DatePipe
     ° DecimalPipe
     ° I18nPluralPipe
     ° I18nSelectPipe
     ° JsonPipe
     ° KeyValuePipe
     ° LowerCasePipe
     ° PercentPipe
     ° SlicePipe
     ° TitleCasePipe
     ° UpperCasePipe

<!-- FIXME  -->
## Debounce

1. Necesitas el `OnInit` en el component ts.

2. Crea un evento emisor con `@input()`.

3. Crea un `Subject`.

4. Usa un (input) en el input del formulario para ejecutar un evento `presionarTecla`
  
5. use el evento `presionarTecla` para enviar el valor del input al `ngOninit`
  
6. Crea un `pipe` antes de `subscribe` para el tiempo que debe esperara antes de emitir el siguiente valor
  
7. Usa dentro del `pipe` el `debounceTime(300)` de `rxjs`

8. En `subscribe` emite el valor con `this.debounce.emit(valor)`

9. Recibe el evento en el html del Padre con `(onDebounce)='eventePadre'`

        @input() onDebounce: EventEmitter<tipoDatoEmitido> = new EventEmitter();
        debounce: Subject<string> = new Subject();
        ngOnInit():void{
          this.debounce.subscribe(valor=>{
            
          })
        }
        teclaPresionada(){
          this.debounce.next(this.termino)
        }

## Comandos de Terminal

- `ng g c nameComponent`
- `ng g m nameModule`
