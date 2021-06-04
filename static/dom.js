const var_1 = document.querySelector('#button1')
const var_2 = document.querySelector('.box')
const varImg = document.querySelector('#img')



function tampil_box(event) {

	console.log(event)
	const text_1 = document.createElement('img')
	text_1.src = varImg.value

	var_2.appendChild(text_1)
}

var_1.addEventListener('click', tampil_box)