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



/*Datos Arequipa */

var cont = document.getElementById('dashboard');
var girl = document.getElementById('girlAqp');
for (var i=0; i<data.AQP['2016-2'].students.length; i++) {
	var image = document.createElement('img');
	image.setAttribute('id','imgLab');
	var paragraph = document.createElement('p');
	var sprints = document.createElement('p');

	var photo = data.AQP['2016-2'].students[i].photo;
	var paragraphName = data.AQP['2016-2'].students[i].name;
	var sprintsData = data.AQP['2016-2'].students[i].sprints.number;

	image.setAttribute("src", photo);
	//paragraph.appendChild(paragraphName);
	paragraph.textContent = paragraphName;
	paragraph.setAttribute('id', 'nameLab');
	sprints.textContent = sprintsData;
	sprints.setAttribute('id', 'sprintLab')
	girl.appendChild(image);
	girl.appendChild(paragraph);
	girl.appendChild(sprints);
	cont.appendChild(girl);
}; 

