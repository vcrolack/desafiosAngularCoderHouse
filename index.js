console.clear();
var CalculadoraFiguras = /** @class */ (function () {
    function CalculadoraFiguras() {
    }
    CalculadoraFiguras.prototype.perimetroCuadrado = function (lado) {
        var perimetroCuadrado = lado * 4;
        return perimetroCuadrado;
    };
    CalculadoraFiguras.prototype.areaCuadrado = function (lado) {
        var areaCuadrado = Math.pow(lado, 2);
        return areaCuadrado;
    };
    CalculadoraFiguras.prototype.perimetroCirculo = function (radio) {
        var perimetroCirculo = 2 * Math.PI * radio;
        return perimetroCirculo;
    };
    CalculadoraFiguras.prototype.areaCirculo = function (radio) {
        var areaCirculo = Math.PI * Math.pow(radio, 2);
        return areaCirculo;
    };
    CalculadoraFiguras.prototype.perimetroTrianguloEquilatero = function (lado) {
        var perimetroTriangulo = lado * 3;
        return perimetroTriangulo;
    };
    CalculadoraFiguras.prototype.areaTrianguloEquilatero = function (base, altura) {
        var areaTriangulo = (base * altura) / 2;
        return areaTriangulo;
    };
    return CalculadoraFiguras;
}());
//Logica de la calculadora
var calculadora = new CalculadoraFiguras();
var dentroBucle = true;
var opcionUsuario;
process.stdout.write('CALCULADORA DE FIGURAS\n¿Qué deseas calcular?:\n-Cuadrado\n-Circulo\n-Triangulo\n-Salir\n');
process.stdout.write('Escribe el nombre de la opción (si te equivocas, vuelve a escribir): ');
process.stdin.on('data', function (dataOpcion) {
    opcionUsuario = dataOpcion.toString().trim();
    if (['cuadrado', 'circulo', 'triangulo', 'salir'].includes(opcionUsuario.toLowerCase())) {
        switch (opcionUsuario.toLowerCase()) {
            //calcular cuadrado
            case 'cuadrado':
                process.stdout.write('Ingresa un lado: ');
                process.stdin.on('data', function (dataCuadrado) {
                    var ladoUsuario = Number(dataCuadrado.toString().trim());
                    var PerimetroCuad = calculadora.perimetroCuadrado(ladoUsuario);
                    var AreaCuad = calculadora.areaCuadrado(ladoUsuario);
                    var cuadradoUsuario = {
                        lado: ladoUsuario,
                        perimetro: PerimetroCuad,
                        area: AreaCuad
                    };
                    console.log("\nHas ingresado un cuadrado con lado: ".concat(cuadradoUsuario.lado, " cm"));
                    console.log("\nTu cuadrado tiene un per\u00EDmetro de ".concat(cuadradoUsuario.perimetro, " cent\u00EDmetros y un \u00E1rea de ").concat(cuadradoUsuario.area, " cent\u00EDmetros cuadrados."));
                    process.exit();
                });
                break;
            //calcular circulo
            case 'circulo':
                process.stdout.write('Ingresa un radio: ');
                process.stdin.on('data', function (dataCirculo) {
                    var radioUsuario = Number(dataCirculo.toString().trim());
                    var perimetroCir = parseFloat(calculadora.perimetroCirculo(radioUsuario).toFixed(2));
                    var areaCir = parseFloat(calculadora.areaCirculo(radioUsuario).toFixed(2));
                    var circuloUsuario = {
                        radio: radioUsuario,
                        diametro: radioUsuario * 2,
                        perimetro: perimetroCir,
                        area: areaCir
                    };
                    console.log("Has ingresado un circulo con un radio de: ".concat(circuloUsuario.radio, " cm, lo cual se traduce a un diametro de ").concat(circuloUsuario.diametro, " cm"));
                    console.log("Tu c\u00EDrculo tiene un per\u00EDmetro de ".concat(circuloUsuario.perimetro, " cent\u00EDmetros y una \u00E1rea de ").concat(circuloUsuario.area, " cent\u00EDmetros cuadrados."));
                    process.exit();
                });
                break;
            //calcular triangulo
            case 'triangulo':
                process.stdout.write('Ingresa un lado: ');
                process.stdin.on('data', function (dataTriangulo) {
                    var lado = Number(dataTriangulo.toString());
                    var altura = parseFloat(Math.sqrt(Math.pow(lado, 2) - Math.pow((lado / 2), 2)).toFixed(2));
                    var perimetroTri = calculadora.perimetroTrianguloEquilatero(lado);
                    var areaTri = calculadora.areaTrianguloEquilatero(lado, altura);
                    var trianguloUsuario = {
                        lado: lado,
                        altura: altura,
                        perimetro: perimetroTri,
                        area: areaTri
                    };
                    console.log("Has ingresado un triangulo equilatero con lado ".concat(trianguloUsuario.lado, " cm y con una altura de ").concat(trianguloUsuario.altura, " cm"));
                    console.log("Tu tri\u00E1ngulo tiene un per\u00EDmetro de ".concat(trianguloUsuario.perimetro, " centr\u00EDmetros y una \u00E1rea de ").concat(trianguloUsuario.area, " cent\u00EDmetros cuadrados."));
                    process.exit();
                });
                break;
            //salir
            case 'salir':
                console.log('Gracias por escogernos!');
                process.exit();
        }
    }
});
