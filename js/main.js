// JavaScript Document
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (e) => {
	e.target.style.animation = 'none';
});

overlay.addEventListener('touchstart', (e) => {
	e.target.style.animation = 'none'; 
});