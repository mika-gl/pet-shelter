
//nombres de los perros en botones
var span_perro = document.querySelectorAll('.post_content span');
span_perro.forEach((e) => e.innerHTML = e.closest('.post_info').firstElementChild.firstElementChild.innerHTML);

//event listener para que desaparezca boton
document.querySelector('#button_donate').addEventListener('click',function f() {
	this.remove();

	this.removeEventListener('click',f);
	});
//Sumar pets a perros con los botones
document.querySelectorAll('.post_content button').forEach((e) => { e.addEventListener('click',function g() {
	var valor_actual = this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerHTML; //valor actual de contador

	this.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerHTML = (valor_actual-1)+2; //convierte el valor en int al restarle, y luego sumo 2 para que el neto sea +1
		});
	});


//activar alerta cada vez que se seleccione valor en selector
document.querySelector('#select_pet').addEventListener('change', function h(a) {
	let texto = this.options[this.selectedIndex].text; //correccion para typeo
	if (this.selectedIndex==0) { alert('You are looking for: '+texto); }
	else { alert('You are looking for a: '+texto); }
	});

