//Logica de la calculadora
let dentroBucle: boolean = true;
while (dentroBucle) {
  let opcionUsuario: number = parseInt(prompt('CALCULADORA DE FIGURAS\n¿Qué deseas calcular?:\n1. Cuadrado\n2. Circulo\n3. Triangulo\n0. Salir'));

  switch (opcionUsuario) {
    //calcular cuadrado
    case 1:
      let ladoUsuario: number = parseInt(prompt('Ingrese el lado del cuadrado: '));
      let PerimetroCuad: number = perimetroCuadrado(ladoUsuario);
      let AreaCuad: number = areaCuadrado(ladoUsuario);

      let cuadradoUsuario: CuadradoInterface = {
        lado: ladoUsuario,
        perimetro: PerimetroCuad,
        area: AreaCuad,
      };

      alert(`Has ingresado un cuadrado con lado: ${cuadradoUsuario.lado} cm` );
      alert(`Tu cuadrado tiene un perímetro de ${cuadradoUsuario.perimetro} centímetros y un área de ${cuadradoUsuario.area} centímetros cuadrados.`);
      break;
    //calcular circulo
    case 2:
      let radioUsuario: number = parseInt(prompt('Ingrese el radio del círculo: '));
      let perimetroCir: number = parseFloat(perimetroCirculo(radioUsuario).toFixed(2));
      let areaCir: number = parseFloat(areaCirculo(radioUsuario).toFixed(2));

      let circuloUsuario: CirculoInterface = {
        radio: radioUsuario,
        diametro: radioUsuario * 2,
        perimetro: perimetroCir,
        area: areaCir
      };

      alert(`Has ingresado un circulo con un radio de: ${circuloUsuario.radio} cm, lo cual se traduce a un diametro de ${circuloUsuario.diametro} cm`)
      alert(`Tu círculo tiene un perímetro de ${circuloUsuario.perimetro} centímetros y una área de ${circuloUsuario.area} centímetros cuadrados.`);
      break;
    //calcular triangulo
    case 3:
      let lado1Usuario: number = parseInt(prompt('Ingrese lado 1 del triángulo: '));
      let lado2Usuario: number = parseInt(prompt('Ingrese lado 2 del tríangulo: '));
      let base: number = parseInt(prompt('Ingrese base del tríangulo: '));
      let altura: number = parseInt(prompt('Ingrese altura del tríangulo:'));
      let perimetroTri: number = perimetroTriangulo(lado1Usuario, lado2Usuario, base);
      let areaTri: number = areaTriangulo(base, altura);

      let trianguloUsuario: TrianguloInterface = {
        lado1: lado1Usuario,
        lado2: lado2Usuario,
        base: base,
        altura: altura,
        perimetro: perimetroTri,
        area: areaTri,
      };

      alert(`Has ingresado un triangulo con lados ${trianguloUsuario.lado1} y ${trianguloUsuario.lado2} cm, con una base de ${trianguloUsuario.base} cm y con una altura de ${trianguloUsuario.altura} cm`);
      alert(`Tu triángulo tiene un perímetro de ${trianguloUsuario.perimetro} centrímetros y una área de ${trianguloUsuario.area} centímetros cuadrados.`)
      break;
    //salir
    case 0:
      alert('Gracias por escogernos!');
      dentroBucle = false;
      break;
    //opcion ingresada no coincide
    default:
      alert('Ingresa una opción válida, por favor.');
      break;
  }
}

//Funciones de la calculadora de figuras
function perimetroCuadrado(lado: number): number {
  let perimetroCuadrado: number = lado * 4;
  return perimetroCuadrado;
}

function areaCuadrado (lado: number): number {
  let areaCuadrado: number = Math.pow(lado, 2);
  return areaCuadrado;
}

function perimetroCirculo (radio: number): number {
  let perimetroCirculo: number = 2 * Math.PI * radio;
  return perimetroCirculo;
}

function areaCirculo (radio: number): number {
  let areaCirculo: number = Math.PI * Math.pow(radio, 2);
  return areaCirculo;
}

function perimetroTriangulo (lado1: number, lado2: number, base: number): number {
  let perimetroTriangulo: number = lado1 + lado2 + base;
  return perimetroTriangulo;
}

function areaTriangulo (base: number, altura: number): number {
  let areaTriangulo: number = (base * altura) / 2;
  return areaTriangulo;
}

//Interfaces de las figuras
interface CuadradoInterface {
  lado: number;
  perimetro?: number;
  area?: number;
}

interface CirculoInterface {
  radio: number,
  diametro: number,
  perimetro?: number,
  area?: number,
}

interface TrianguloInterface {
  lado1: number,
  lado2: number,
  base: number,
  altura: number,
  perimetro?: number,
  area?: number,
}