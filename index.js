//Logica de la calculadora
var dentroBucle = true;
while (dentroBucle) {
    var opcionUsuario = parseInt(prompt('CALCULADORA DE FIGURAS\n¿Qué deseas calcular?:\n1. Cuadrado\n2. Circulo\n3. Triangulo\n0. Salir'));
    switch (opcionUsuario) {
        //calcular cuadrado
        case 1:
            var ladoUsuario = parseInt(prompt('Ingrese el lado del cuadrado: '));
            var PerimetroCuad = perimetroCuadrado(ladoUsuario);
            var AreaCuad = areaCuadrado(ladoUsuario);
            var cuadradoUsuario = {
                lado: ladoUsuario,
                perimetro: PerimetroCuad,
                area: AreaCuad
            };
            alert("Has ingresado un cuadrado con lado: ".concat(cuadradoUsuario.lado, " cm"));
            alert("Tu cuadrado tiene un per\u00EDmetro de ".concat(cuadradoUsuario.perimetro, " cent\u00EDmetros y un \u00E1rea de ").concat(cuadradoUsuario.area, " cent\u00EDmetros cuadrados."));
            break;
        case 2:
            var radioUsuario = parseInt(prompt('Ingrese el radio del círculo: '));
            var perimetroCir = parseFloat(perimetroCirculo(radioUsuario).toFixed(2));
            var areaCir = parseFloat(areaCirculo(radioUsuario).toFixed(2));
            var circuloUsuario = {
                radio: radioUsuario,
                diametro: radioUsuario * 2,
                perimetro: perimetroCir,
                area: areaCir
            };
            alert("Has ingresado un circulo con un radio de: ".concat(circuloUsuario.radio, " cm, lo cual se traduce a un diametro de ").concat(circuloUsuario.diametro, " cm"));
            alert("Tu c\u00EDrculo tiene un per\u00EDmetro de ".concat(circuloUsuario.perimetro, " cent\u00EDmetros y una \u00E1rea de ").concat(circuloUsuario.area, " cent\u00EDmetros cuadrados."));
            break;
        case 3:
            var lado1Usuario = parseInt(prompt('Ingrese lado 1 del triángulo: '));
            var lado2Usuario = parseInt(prompt('Ingrese lado 2 del tríangulo: '));
            var base = parseInt(prompt('Ingrese base del tríangulo: '));
            var altura = parseInt(prompt('Ingrese altura del tríangulo:'));
            var perimetroTri = perimetroTriangulo(lado1Usuario, lado2Usuario, base);
            var areaTri = areaTriangulo(base, altura);
            var trianguloUsuario = {
                lado1: lado1Usuario,
                lado2: lado2Usuario,
                base: base,
                altura: altura,
                perimetro: perimetroTri,
                area: areaTri
            };
            alert("Has ingresado un triangulo con lados ".concat(trianguloUsuario.lado1, " y ").concat(trianguloUsuario.lado2, " cm, con una base de ").concat(trianguloUsuario.base, " cm y con una altura de ").concat(trianguloUsuario.altura, " cm"));
            alert("Tu tri\u00E1ngulo tiene un per\u00EDmetro de ".concat(trianguloUsuario.perimetro, " centr\u00EDmetros y una \u00E1rea de ").concat(trianguloUsuario.area, " cent\u00EDmetros cuadrados."));
            break;
        case 0:
            alert('Gracias por escogernos!');
            dentroBucle = false;
            break;
        default:
            alert('Ingresa una opción válida, por favor.');
            break;
    }
}
//Funciones de la calculadora de figuras
function perimetroCuadrado(lado) {
    var perimetroCuadrado = lado * 4;
    return perimetroCuadrado;
}
function areaCuadrado(lado) {
    var areaCuadrado = Math.pow(lado, 2);
    return areaCuadrado;
}
function perimetroCirculo(radio) {
    var perimetroCirculo = 2 * Math.PI * radio;
    return perimetroCirculo;
}
function areaCirculo(radio) {
    var areaCirculo = Math.PI * Math.pow(radio, 2);
    return areaCirculo;
}
function perimetroTriangulo(lado1, lado2, base) {
    var perimetroTriangulo = lado1 + lado2 + base;
    return perimetroTriangulo;
}
function areaTriangulo(base, altura) {
    var areaTriangulo = (base * altura) / 2;
    return areaTriangulo;
}
