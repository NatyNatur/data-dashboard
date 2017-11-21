/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/* Eventos */
var barsMenu = document.getElementById('bars-out');
var menu = document.getElementById('barsmenu');
var barsMenuOut = document.getElementById('bars-in');
/* evento para que aparezca menú de usuario*/
barsMenu.addEventListener('click', function(){
	menu.style.display = 'block';
});
/* evento para que desaparezca menú de usuario*/
barsMenuOut.addEventListener('click', function(){
	menu.style.display = 'none';
});

var select = document.getElementById('selection');
var headquartersLab = document.getElementById('headquarters');
var selectIn = document.getElementById('selection-in')
/* evento para que aparezca menú de sedes*/
select.addEventListener('click', function(){
	headquarters.style.display = 'block';
});

/* evento para que desaparezca menú de sedes*/
selectIn.addEventListener('click', function(){
	headquarters.style.display = 'none';
});

