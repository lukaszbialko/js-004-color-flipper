const redBtn = document.querySelector('.btn1')
const blueBtn = document.querySelector('.btn2')
const square = document.querySelector('.color')
const restoreColor = document.querySelector('.remove-color')

const redColor = () => {
	square.style.backgroundColor = 'red'
	if ((square.style.contains = 'red')) {
		redBtn.style.color = 'tomato'
		blueBtn.style.color = '#fff'
	}
}

const blueColor = () => {
	square.style.backgroundColor = 'blue'
	if ((square.style.contains = 'blue')) {
		blueBtn.style.color = 'royalblue'
		redBtn.style.color = '#fff'
	}
}

const deleteColor = () => {
	square.style.backgroundColor = 'orange'
	if ((square.style.contains = 'blue' || 'red')) {
		blueBtn.style.color = '#fff'
		redBtn.style.color = '#fff'
	}
}

redBtn.addEventListener('click', redColor)
blueBtn.addEventListener('click', blueColor)
restoreColor.addEventListener('click', deleteColor)