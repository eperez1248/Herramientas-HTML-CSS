document.getElementsByClassName('btn-reservar')[0].addEventListener("click",validarFormulario);
function validarFormulario (){
	let hora = document.getElementById("hora").value;
	let horas = parseInt(hora.split(":")[0]);
	if ((horas >= 13) && (horas <= 16)) {
		alert ("Se confirma su reserva para comer");
	} else if ((horas >= 20) && (horas <= 23)) {
		alert ("Se confirma su reserva para cenar");
	} else {
		alert ("Su reserva está fuera del horario de comidas o cenas");
	}

}