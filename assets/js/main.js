//selectores

const containerRows = document.querySelector('.containerRows')
const datosUsuario = document.querySelector('.datosUsuario')

//inicializando variables
let nombre
let carrera
let ramo1
let ramo2
let ramo3
// Notas del usuario
let nota1 = ''
let nota2 = ''
let nota3 = ''
let nota4 = ''
let nota5 = ''
let nota6 = ''
let nota7 = ''
let nota8 = ''
let nota9 = ''

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
	}

	//Se manejará la logica aqui una vez recibidos los datos desde el usuario , creandose la tabla en el html <Main></Main>
	DatosPersonas(nombre, carrera)
	CrearHtml(ramo1, nota1, nota2, nota3)
	CrearHtml(ramo2, nota4, nota5, nota6)
	CrearHtml(ramo3, nota7, nota8, nota9)
})

//Funcion pára recibir los datos y generar una especie de bucle solcitando las notas y agregandolas correctamente!

function RecibirDatos(NombreRamo) {
	let not1 = prompt(`Ingresa la nota 1 del ramo [${NombreRamo}]`)
	//El valor debe ser un numero y no un texto
	if (isNaN(not1)) {
		alert('El valor introducido no es un numero , ingresa un numero correctamente!!')
		not1 = prompt(`Ingresa la nota 1 del ramo [${NombreRamo}]`)
	}

	// No puede agregar notas mayores a 7 por lo menos en Chile no existem
	if (Number(not1) > 7) {
		alert('No existe una nota mayor a 7 en el sistema de evaluacion nacional!')
		not1 = prompt(`Ingresa la nota 1 del ramo [${NombreRamo}]`)
	}
	// ----------------------------------------------

	//Manejo de la nota 2 comprobando que sea un numero antes de agregarla
	let not2 = prompt(`Ingresa la nota 2 del ramo [${NombreRamo}]`)
	if (isNaN(not2)) {
		alert('El valor introducido no es un numero , ingresa un numero correctamente!!')
		not2 = prompt(`Ingresa la nota 2 del ramo [${NombreRamo}]`)
	}

	if (Number(not2) > 7) {
		alert('No existe una nota mayor a 7 en el sistema de evaluacion nacional!')
		not2 = prompt(`Ingresa la nota 2 del ramo [${NombreRamo}]`)
	}
	// ----------------------------------------------

	//Manejo de los datos nota 3
	let not3 = prompt(`Ingresa la nota 3 del ramo [${NombreRamo}]`)
	if (isNaN(not3)) {
		alert('El valor introducido no es un numero , ingresa un numero correctamente!!')
		not3 = prompt(`Ingresa la nota 3 del ramo [${NombreRamo}]`)
	}

	if (Number(not3) > 7) {
		alert('No existe una nota mayor a 7 en el sistema de evaluacion nacional!')
		not3 = prompt(`Ingresa la nota 3 del ramo [${NombreRamo}]`)
	}

	//Comprueba que notas estan vacias para asignarle las notas correspondientes!
	if (nota1 === '') {
		nota1 = parseInt(not1)
		nota2 = parseInt(not2)
		nota3 = parseInt(not3)
		alert(` Las notas fueron agregadas correctamente al ramo [${NombreRamo}]`)
		return
	}

	if (nota4 === '') {
		nota4 = parseInt(not1)
		nota5 = parseInt(not2)
		nota6 = parseInt(not3)
		alert(` Las notas fueron agregadas correctamente al ramo [${NombreRamo}]`)
		return
	}

	if (nota7 === '') {
		nota7 = parseInt(not1)
		nota8 = parseInt(not2)
		nota9 = '-'
		alert(` Las notas fueron agregadas correctamente al ramo [${NombreRamo}]`)
		return
	}
}

// Crea el Html necesario paramostrar los datos del usuario de manera dinamica!

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
		promedio = '-'
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

// FUNCIONES CALCULO DE NOTAS
