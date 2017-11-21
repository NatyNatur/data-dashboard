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
    var sprints1 = document.createElement('p');
    var sprints2 = document.createElement('p');
    var sprints3 = document.createElement('p');
    var sprints4 = document.createElement('p');
    var sprints5 = document.createElement('p');
    var sprints6 = document.createElement('p');
    var sprints7 = document.createElement('p');

    var photo = data.AQP['2016-2'].students[i].photo;
    var paragraphName = data.AQP['2016-2'].students[i].name;
    var sprintsData = data.AQP['2016-2'].students[i].sprints[0].score["tech"];
    var sprintsData1 = data.AQP['2016-2'].students[i].sprints[0].score["hse"];
    var sprintsData2= data.AQP['2016-2'].students[i].sprints[1].score["tech"];
    var sprintsData3 = data.AQP['2016-2'].students[i].sprints[1].score["hse"];
    var sprintsData4 = data.AQP['2016-2'].students[i].sprints[2].score["tech"];
    var sprintsData5 = data.AQP['2016-2'].students[i].sprints[2].score["hse"];
    var sprintsData6 = data.AQP['2016-2'].students[i].sprints[3].score["tech"];
    var sprintsData7 = data.AQP['2016-2'].students[i].sprints[3].score["hse"];

    image.setAttribute("src", photo);
    //paragraph.appendChild(paragraphName);
    paragraph.textContent = paragraphName;
    paragraph.setAttribute('id', 'nameLab');
    sprints.textContent = "Sprint 1 Tech Score: "+sprintsData;
    sprints1.textContent = "Sprint 1 HSE Score: "+sprintsData1;
    sprints2.textContent = "Sprint 2 Tech Score: "+sprintsData2;
    sprints3.textContent = "Sprint 2 HSE Score: "+sprintsData3;
    sprints4.textContent = "Sprint 3 Tech Score: "+sprintsData4;
    sprints5.textContent = "Sprint 3 HSE Score: "+sprintsData5;
    sprints6.textContent = "Sprint 4 Tech Score: "+sprintsData6;
    sprints7.textContent = "Sprint 4 HSE Score: "+sprintsData7;
    sprints.setAttribute('id', 'sprintLab')
    sprints1.setAttribute('id', 'sprintLab')
    sprints2.setAttribute('id', 'sprintLab')
    sprints3.setAttribute('id', 'sprintLab')
    sprints4.setAttribute('id', 'sprintLab')
    sprints5.setAttribute('id', 'sprintLab')
    sprints6.setAttribute('id', 'sprintLab')
    sprints7.setAttribute('id', 'sprintLab')
    girl.appendChild(image);
    girl.appendChild(paragraph);
    girl.appendChild(sprints);
    girl.appendChild(sprints1);
    girl.appendChild(sprints2);
    girl.appendChild(sprints3);
    girl.appendChild(sprints4);
    girl.appendChild(sprints5);
    girl.appendChild(sprints6);
    girl.appendChild(sprints7);
    cont.appendChild(girl);

}


