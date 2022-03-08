console.clear();
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

interface TrianguloEquilateroInterface {
  lado: number,
  altura: number,
  perimetro?: number,
  area?: number,
}

class CalculadoraFiguras {
  constructor () {}

  perimetroCuadrado(lado: number): number {
    let perimetroCuadrado: number = lado * 4;
    return perimetroCuadrado;
  }

  areaCuadrado (lado: number): number {
    let areaCuadrado: number = Math.pow(lado, 2);
    return areaCuadrado;
  }
  
  perimetroCirculo (radio: number): number {
    let perimetroCirculo: number = 2 * Math.PI * radio;
    return perimetroCirculo;
  }
  
  areaCirculo (radio: number): number {
    let areaCirculo: number = Math.PI * Math.pow(radio, 2);
    return areaCirculo;
  }
  
  perimetroTrianguloEquilatero (lado: number): number {
    let perimetroTriangulo: number = lado * 3;
    return perimetroTriangulo;
  }
  
  areaTrianguloEquilatero (base: number, altura: number): number {
    let areaTriangulo: number = (base * altura) / 2;
    return areaTriangulo;
  }
}

//Logica de la calculadora
const calculadora = new CalculadoraFiguras();
let dentroBucle: boolean = true;
var opcionUsuario: string;

process.stdout.write('CALCULADORA DE FIGURAS\n¿Qué deseas calcular?:\n-Cuadrado\n-Circulo\n-Triangulo\n-Salir\n');
process.stdout.write('Escribe el nombre de la opción (si te equivocas, vuelve a escribir): ');
process.stdin.on('data', function (dataOpcion) {
  opcionUsuario = dataOpcion.toString().trim();

  if (['cuadrado','circulo','triangulo','salir'].includes(opcionUsuario.toLowerCase())) {

    switch (opcionUsuario.toLowerCase()) {
      //calcular cuadrado
      case 'cuadrado':
        process.stdout.write('Ingresa un lado: ');
        process.stdin.on('data', function (dataCuadrado) {
          var ladoUsuario: number = Number(dataCuadrado.toString().trim());
          
    
          let PerimetroCuad: number = calculadora.perimetroCuadrado(ladoUsuario);
          let AreaCuad: number = calculadora.areaCuadrado(ladoUsuario);
    
          let cuadradoUsuario: CuadradoInterface = {
            lado: ladoUsuario,
            perimetro: PerimetroCuad,
            area: AreaCuad,
          };
    
          console.log(`\nHas ingresado un cuadrado con lado: ${cuadradoUsuario.lado} cm` );
          console.log(`\nTu cuadrado tiene un perímetro de ${cuadradoUsuario.perimetro} centímetros y un área de ${cuadradoUsuario.area} centímetros cuadrados.`);
    
          process.exit();
        });
        break;
      //calcular circulo
      case 'circulo':
        process.stdout.write('Ingresa un radio: ');
        process.stdin.on('data', function (dataCirculo) {
          var radioUsuario: number = Number(dataCirculo.toString().trim());
      
          let perimetroCir: number = parseFloat(calculadora.perimetroCirculo(radioUsuario).toFixed(2));
          let areaCir: number = parseFloat(calculadora.areaCirculo(radioUsuario).toFixed(2));
      
          let circuloUsuario: CirculoInterface = {
            radio: radioUsuario,
            diametro: radioUsuario * 2,
            perimetro: perimetroCir,
            area: areaCir
          };
      
          console.log(`Has ingresado un circulo con un radio de: ${circuloUsuario.radio} cm, lo cual se traduce a un diametro de ${circuloUsuario.diametro} cm`);
          console.log(`Tu círculo tiene un perímetro de ${circuloUsuario.perimetro} centímetros y una área de ${circuloUsuario.area} centímetros cuadrados.`);
          process.exit();
        });
        break;
      //calcular triangulo
      case 'triangulo':
        process.stdout.write('Ingresa un lado: ');
        process.stdin.on('data', function (dataTriangulo) {

          var lado: number= Number(dataTriangulo.toString());
          var altura: number = parseFloat(Math.sqrt(Math.pow(lado, 2) - Math.pow((lado / 2), 2)).toFixed(2));

          let perimetroTri: number = calculadora.perimetroTrianguloEquilatero(lado);
          let areaTri: number = calculadora.areaTrianguloEquilatero(lado, altura);


          let trianguloUsuario: TrianguloEquilateroInterface = {
            lado: lado,
            altura: altura,
            perimetro: perimetroTri,
            area: areaTri,
          };

          console.log(`Has ingresado un triangulo equilatero con lado ${trianguloUsuario.lado} cm y con una altura de ${trianguloUsuario.altura} cm`);
          console.log(`Tu triángulo tiene un perímetro de ${trianguloUsuario.perimetro} centrímetros y una área de ${trianguloUsuario.area} centímetros cuadrados.`)

          process.exit();
        })

        break;
      //salir
      case 'salir':
        console.log('Gracias por escogernos!');
        process.exit();
      } 
    }
});