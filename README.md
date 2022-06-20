# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

Notas Importantes!

    Para utilizar módulos en otros módulos se les invoca mediante el nombre de su clase
    Para Utilizar el html de los componentes se le invoca mediante su 'selector' html

## Directivas

1. *ngIf
2. *ngIf else
3. *ngFor

## Decoradores

1. @NgModule
    - `declarations`: componentes que forman parte de este módulo
    - `export`: el component principal o los que serán usados en otros módulos
    - `imports`: servicios específicos a un modulo
      1. commonModule: Permite la funcionalidad del enlace entre de .ts en .html
      2. FormsModule: Para el uso de `ngSubmit` en formularios crea un preventDefault
    - `providers`: servicios que se usan en los components que son parte del módulo
    - `bootstrap`: componente principal que se ejecuta al iniciar la app

2. @Input
    - Para el paso de datos del Padre al Hijo

3. @OutPut
    - Para que el componente hijo envíe datos al padre

## Eventos - ()

1. (onclick) - evento de click

2. (ngSubmit) - necesitas el `FormModule` en imports de module, además un name en input

3. (input) - ingresa un nuevo valor al input html cuando su valor cambie en el `ts`
  
4. [(ngModel)] - two data biding, `[]` captura el valor del name y `()` emite el valor

## Propiedades dinámicas - []

- Se establecen mediante `[]` y la variable, obj o array va en `comillas dobles`

## Pipes

- transforma visualmente la información

1. `number` - modifica un número entero para darle coma decimal

## Comandos de Terminal

- `ng g c nameComponent`
- `ng g m nameModule`
