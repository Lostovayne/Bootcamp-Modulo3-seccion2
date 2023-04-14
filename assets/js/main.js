//selectores
const containerRows = document.querySelector('.containerRows')
const datosUsuario = document.querySelector('.datosUsuario')
const NotaNecesaria = document.querySelector('.NotaNecesaria')

//inicializando variables
let nombre
let carrera
let ramo1
let ramo2
let ramo3
let PIncompleto
let contador = 0

// Se ejecuta toda la logica despues de cargado el html
window.addEventListener('DOMContentLoaded', () => {
	// Se agrega las condicional if para comprobar el valor de la edad del usuaio!

	let edad = Number(prompt('Ingresa tu edad, esta es requerida para poder ingresar este sitio'))
	if (edad >= 18) {
		alert('Bienvenido al sitio estudiantil!')
	} else {
		let datosCorrectos = confirm(
			'No cumples con la edad requerida para este sitio!, Pulsa Cancelar si ingresaste incorrectamente tu edad'
		)
		if (!datosCorrectos) {
			location.reload()
		}
	}

	//Comprueba los datos del usuario y agrega los datos de forma correspondiente, nombre, carrera y ramo ,llamando a la funcion para agregar las notas
	if (edad >= 18) {
		nombre = prompt('Ingresa tu nombre y apellidos!')
		carrera = prompt('Ingresa el nombre de tu carrera')
		ramo1 = prompt('Ingresa el nombre de tu ramo 1')
		RecibirDatos(ramo1)
		ramo2 = prompt('Ingresa el nombre de tu ramo 2')
		RecibirDatos(ramo2)
		ramo3 = prompt('Ingresa el nombre de tu ramo 3')
		RecibirDatos(ramo3)
		DatosPersonas(nombre, carrera)
	}
})

//Funcion para recibir los datos y generar una especie de bucle solcitando las notas y agregandolas correctamente mas la  logica de validacion!
function RecibirDatos(NombreRamo) {
	let not1 = ' '
	let not2 = ' '
	let not3 = ' '
	contador++

	not1 = parseInt(prompt(`Ingresa la nota 1 del ramo [${NombreRamo}]`))
	//El valor debe ser un numero y no un texto
	if (isNaN(not1) || not1 === '') {
		alert('El valor introducido no es un numero o se encuentra vacio, agrega un numero correctamente!!')
		not1 = parseInt(prompt(`Ingresa la nota 1 del ramo [${NombreRamo}]`))
	}

	// No puede agregar notas mayores a 7 por lo menos en Chile no existem
	if (not1 > 7) {
		alert('No existe una nota mayor a 7 en el sistema de evaluacion nacional!')
		not1 = parseInt(prompt(`Ingresa la nota 1 del ramo [${NombreRamo}]`))
	}

	//Manejo de la nota 2 comprobando que sea un numero antes de agregarla
	not2 = parseInt(prompt(`Ingresa la nota 2 del ramo [${NombreRamo}]`))
	if (isNaN(not2) || not2 === '') {
		alert('El valor introducido no es un numero, o se encuentra vacio, agrega un numero correctamente!!')
		not2 = parseInt(prompt(`Ingresa la nota 2 del ramo [${NombreRamo}]`))
	}

	if (not2 > 7) {
		alert('No existe una nota mayor a 7 en el sistema de evaluacion nacional!')
		not2 = parseInt(prompt(`Ingresa la nota 2 del ramo [${NombreRamo}]`))
	}

	//Manejo de los datos nota 3
	if (contador <= 2) {
		not3 = parseInt(prompt(`Ingresa la nota 3 del ramo [${NombreRamo}]`))
		if (isNaN(not3) || not3 === '') {
			alert(
				'El valor introducido no es un numero, o se encuentra vacio, agrega un numero correctamente!!'
			)
			not3 = parseInt(prompt(`Ingresa la nota 3 del ramo [${NombreRamo}]`))
		}

		if (not3 > 7) {
			alert('No existe una nota mayor a 7 en el sistema de evaluacion nacional!')
			not3 = parseInt(prompt(`Ingresa la nota 3 del ramo [${NombreRamo}]`))
		}
	} else {
		not3 = '-'
	}

	CrearHtml(NombreRamo, not1, not2, not3)
}

// Crea el Html necesario para mostrar los datos del usuario de manera dinamica!
function DatosPersonas(nombre, carrera) {
	datosUsuario.innerHTML = `	
	<p>Nombre: ${nombre}</p>
	<p>Carrera: ${carrera}</p>
	`
}

// Crea el html correspondiente para el row mostrando las notas
function CrearHtml(ramo, Pnota1, Pnota2, Pnota3) {
	let promedio = ((Pnota1 + Pnota2 + Pnota3) / 3).toFixed(1)
	if (isNaN(promedio)) {
		PIncompleto = Pnota1 + Pnota2
		promedio = '-'
		CalcularNotaFaltante(ramo, PIncompleto)
	}

	const tr = document.createElement('tr')
	tr.innerHTML = `	
		<th scope="row">${ramo}</th>
		<td>${Pnota1}</td>
		<td>${Pnota2}</td>
		<td>${Pnota3}</td>
		<td>${promedio}</td>
	`
	containerRows.appendChild(tr)
}

// Calcula la nota faltante para aprobar
function CalcularNotaFaltante(ramo, Pincompleto) {
	let resultado = 4 * 3 - Pincompleto
	if (resultado <= 0) {
		resultado = 1
	}

	NotaNecesaria.innerHTML = `Necesitas conseguir un : ${resultado} Para aprobar el ramo de  ${ramo} `
}
