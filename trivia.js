const body = document.querySelector('body')
const todo = document.getElementById('centro');
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
        todo.remove();
        resultados.innerText = `Tu puntaje es de: ${+score}`;
        body.appendChild(resultados);
        
    
        
//    alert("Bien hecho! Completaste el quiz y tu puntuacion fue de: "+score);
  
  

};


