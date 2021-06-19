//JavaScript Document
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', (e) => {
	e.currentTarget.style.animation = "content-up 1s ease forwards";
	setTimeout(()=>location.href = 'portfolio.html',1000);
});