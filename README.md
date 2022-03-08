# desafiosAngularCoderHouse
Este primer desafío para el curso de Angular en Coderhouse, consiste en la creación de una calculadora para áreas y perímetros de figuras geométricas.

Está construido con Typescript y se utilizará la dependencia de @types/node para recibir los datos que desee ingresar el usuario.

## Inicializando
Manual de creación del entorno de ejecución del desafío. 
### Pre requisitos
1. Clonar repositorio de git
  ```git clone https://github.com/vcrolack/desafiosAngularCoderHouse.git```
2. Instalar Typescript
Si lo quieres instalar solamente en tu proyecto:
  ```npm install typescript```
Si lo deseas instalar globalmente:
  ```npm install -g typescript```
3. Instalar @types/node
  ```npm i -save-dev @types/node```
### Ejecución
  Si deseas compilarlo nuevamente desde el archivo index.ts
  ```npx tsc index.ts```
  Ejecutar el resultado de la compilación (El resultado sería un archivo JavaScript nombrado index.js)
  ```node index.js```
### Uso
La ejecución del index.js iniciaría la captura de datos que ingrese el usuario mediante teclado para que el software realice los cálculos de áreas y perímetros que el usuario desee. Por lo que en la misma consola se le mostraría las instrucciones de qué pasos debe realizar.