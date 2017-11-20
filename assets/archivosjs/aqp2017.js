	var titulo = document.getElementById('tituloAqp');
	var h1 = document.createElement("h1");
	h1.innerHTML = 'Alumnas Arequipa 2017-1';
	titulo.appendChild(h1);

	var girl = document.getElementById('girlAqp');
	for (var i=0; i<data.AQP['2017-1'].students.length; i++) {

		var image = document.createElement('img');
		var paragraph = document.createElement('p');
		var sprints = document.createElement('p');

		var photo = data.AQP['2017-1'].students[i].photo;
		var paragraphName = data.AQP['2017-1'].students[i].name;
		var sprintsData = data.AQP['2017-1'].students[i].sprints.number;

		image.setAttribute("src", photo);
		//paragraph.appendChild(paragraphName);
		paragraph.textContent = paragraphName;
		sprints.textContent = sprintsData;
		girl.appendChild(image);
		girl.appendChild(paragraph);
		girl.appendChild(sprints);


} 