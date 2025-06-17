const body = document.querySelector('body')
const todo = document.getElementById('centro');
const todo2 = document.getElementById('centroR');
const flecha = document.getElementById('flecha');
const flecha2 = document.getElementById('flecha2');
const resultados = document.createElement('div');
resultados.setAttribute('id','resultadosT');
const result = () =>
{
	let score=0;
	if(document.getElementById('correcta1').checked)
		{	score++;
		}
	if(document.getElementById('correcta2').checked)
		{	score++;
		}
	if(document.getElementById('correcta3').checked)
		{	score++;
		}
	if(document.getElementById('correcta4').checked)
		{	score++;
		}
	if(document.getElementById('correcta5').checked)
		{	score++;
		}
	if(document.getElementById('correcta6').checked)
		{	score++;
		}
        todo.remove();
		flecha2.remove();
		flecha.setAttribute('href','trivia-index.html');
       if ( +score == 0) {
		resultados.innerText = `${+score}/6 Mediocre 💀`;
        body.appendChild(resultados);
	   }
       if ( +score == 1) {
		resultados.innerText = `${+score}/6 decepcionante 💩`;
        body.appendChild(resultados);
	   }
       if ( +score == 2) {
		resultados.innerText = `${+score}/6 Qué malo 🤷‍♂️`;
        body.appendChild(resultados);
	   }
       if ( +score == 3) {
		resultados.innerText = `${+score}/6 Meh 😑`;
        body.appendChild(resultados);
	   }
       if ( +score == 4) {
 		resultados.innerText = `${+score}/6 Bueno 😁`;
        body.appendChild(resultados);
	   }
       if ( +score == 5) {
 		resultados.innerText = `${+score}/6 La rompiste 🤯`;
        body.appendChild(resultados);
	   }
       if ( +score == 6) {
 		resultados.innerText = `${+score}/6 Perfecto 🎩`;
        body.appendChild(resultados);
	   }


};


