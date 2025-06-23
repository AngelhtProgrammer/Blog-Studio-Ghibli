# Blog Studio Ghibli.

This is a blog focused on Studio Ghibli that contains brief information about it, and contains a small trivia quiz that can be answered with the information found on the blog.
<div align="center">
<img src="imagenes/CP blog.png" width="800">
</div>
<div align="center">
<img src="imagenes/CP trivia.png" width="800">
</div>

## Trivia quiz.

To do the trivia go to the bottom of the blog where you will find a button with the word “TRIVIA” on it and click on it.
There are six questions and at the end depending on the result you will get a different message on the screen.

***

<div align="center">
<img src="imagenes/CP boton.png" width="800">
</div>

## Files

- `index.html`: The main HTML file containing the structure of the blog.

- `index.css`: The CSS file containing the style of the blog (index.html).

- `trivia-index.html`: The html file containing the trivia structure.

- `triviaR.css`: The CSS file containing the trivia styling (trivia-index.html).

- `trivia.js`: The JavaScript file containing the application logic, including functions to add up the points and depending on the score paint a different message.

## Sum of points.

Here's how the trivia points add up.

```python
let score=0;
	if(document.getElementById('correcta1').checked)
		{	score++;
		}
```

