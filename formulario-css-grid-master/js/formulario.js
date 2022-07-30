//Con esto accedemos al formulario en html, la etiqueta form con el id "formulario"
const formulario = document.getElementById('formulario');
//con esto accedemos a todos los imputs de nuestro formulario
//querySelectorAll--obtenemos un arreglo de con todos los inputs
//#=id---querySelectorAll('#deDondeLosObtenemos todosLosInputsDentroDelFormulario')
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false, 
	nombre: false, 
	password: false, 
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	//obtengo el "name" del campodel formulario e.target.name
	//y entro a un caso dependiendo del campo 
	switch(e.target.name){
		case 'usuario':
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;

		case 'nombre':
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case 'password':
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;

		case 'password2':
			validarPassword2();
		break;

		case 'correo':
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case 'telefono':
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

//tenemos que indicarle la expresion, el input (nombreCampo), campo (el grupo div al que pertenece)
const validarCampo = (expresion, input, campo) =>{
	//devuelve true si se cumple la expresion regular
	if(expresion.test(input.value)){
		//aquí quitamos los rojito si es que ya fue corregido
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		//pone un color verde indicando que el campo es valido
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		//agregamos la clase con el icono de validacion verde, check
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		//accedo al id "grupo__usuario" del grupo del div, accedo al icono i, accedemos a sus clases y quitamos la de no valido
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		//el objeto campos guarda si esta validado o no el campo indicado en la posicion
		//la posicion en javascript puede contener el nombre de la variable o un indice,
		//en este caso el nombre de la variable
		campos[campo] = true;
	}else{
		//accedemos al div con el id "grupo__usuario", que contiene el label y el input
		//despues accedemos a la clase CSS que marca el campo con rojo si es incorrecto	
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () =>{
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	}else{
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}

}

//la funcion de tipo flecha se va a ejecutar por cada input que tengamos
inputs.forEach((input)=>{
	//Por cada input que encuentre, quiero agregarle un evento
	//keyup es que detecta cuando una tecla presionada Y LUEGO LEVANTADA
	//en el segundo parametro agrego una funcion para validar, la puedo crear ahí mismo o fuera y llamarla
	input.addEventListener('keyup', validarFormulario);
	//blur detecta cuando de un clic afuera del campo y el segundo parametro llama la funcion para validar
	input.addEventListener('blur', validarFormulario);

});

//accedemos al fomrulario, colocamos un evento al tipo "submit" que es el botón,
//utilizamos el objeto de evento
formulario.addEventListener('submit', (e)=>{
	//Si si voy a enviar datos, la siguiente línea no la pongo, solo es para no hacer nada
	e.preventDefault();
	
	const terminos = document.getElementById('terminos');
	
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
		//en caso de que vaya a guardar informacion, aquí es donde ya se envia validada, por mientras solo se reinician los campos
		formulario.reset();

		//activando mensaje de envio hecho correctamente
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		
		setTimeout(()=>{
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		//quitamos los iconos de correcto de cada uno de los campos
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
			icono.classList.remove('formulario__grupo-correcto');
		})
	}else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}

});