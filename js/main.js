//JavaScript Document
const overlay = document.getElementById('overlay');
const button = document.querySelector('.button');

overlay.addEventListener('click', (e) => {
	e.currentTarget.style.animation = "content-up 2s ease forwards";
	setTimeout(()=>location.href = 'portfolio.html',1900)
});

overlay.addEventListener('touchstart', (e) => {
	e.currentTarget.style.animation = "content-up 2s ease forwards";
});