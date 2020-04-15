function myFunction() {
    const mensaje = "Pute el que lo ha leido";
    secondFunction(mensaje);
}

function secondFunction(parametro) {
    alert(parametro);
}

function funcionSimple(primerNumero, segundoNumero) {
    const resultado = primerNumero + segundoNumero;
    alert(resultado);
}

function funDam() {
    alert("WIN");
}

function nuevaVentana() {
    var myWindow = window.open("", "", "width=500, height=500");
    myWindow.document.write("<p>Pablo comadreja</p>");
    myWindow.blur();
}

function condicional(parametroNumerico) {
    /*
        > mayor
        < menor
        >= mayor o igual
        <= menor o igual
        !== distinto
        === igual

        && and
        || or
    */
    console.log("El parámetro ingresado es: " + parametroNumerico);
    if (parametroNumerico >= 25) {
        // Condición verdadera
        console.log("El parámetro es mayor o igual a 25")
    } else {
        // Condición es falsa (opcional)
        console.log("El parámetro no es mayor o igual a 25")
    }

    if (parametroNumerico === 50) {
        // Condición verdadera
        console.log("El parámetro es igual a 50")
    } else {
        // Condición es falsa (opcional)
        console.log("El parámetro no es igual a 50")
    }

    if (parametroNumerico > 25 && parametroNumerico < 45) {
        console.log("El parámetro no es mayor a 25 y menor a 45");
    }

    if (parametroNumerico > 25 || parametroNumerico < 5) {
        console.log("El parámetro es mayor a 25 o es menor a 5");
    }

    if ((parametroNumerico > 25 || parametroNumerico > 25) && parametroNumerico < 100) {
        console.log("El parámetro es mayor a 25 o es menor a 5 y es menor a 100");
    }
}

function iteracionFor(parametro) {
    console.log("El parámetro ingresado es: " + parametro);
    for (let contador = 0; contador <= parametro; contador = contador + 1) {
        console.log(contador);
    }
}

function iteracionWhile(parametro) {
    console.log("El parámetro ingresado es: " + parametro);
    let contador = 0;
    while (contador <= parametro) {
        console.log(contador);
        contador = contador + 1;
    }
}