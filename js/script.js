const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

function enviarEmail() {
	var userEmail = document.getElementById('userEmail').value;
	var mailtoLink = 'mailto:cleovleal@gmail.com?subject=Assunto do E-mail&body=Corpo do E-mail:%0D%0A%0D%0A';

	// Adiciona o endereço de e-mail fornecido pelo usuário ao link do e-mail
	mailtoLink += encodeURIComponent(userEmail);

	// Abre o cliente de e-mail do usuário com o link do e-mail
	window.location.href = mailtoLink;
}

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

