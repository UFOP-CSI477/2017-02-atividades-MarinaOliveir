
/* 
    Created on : 21/12/2017, 20:37:51
    Author     : Marina
*/
var img;
var btn;

function selecionaImagem(f) {
    if (img) {
        img.classList.remove("clicada");
    }
    img = f;

    img.classList.add("clicada");

    if (img && btn) {
	    if (img.id === 'imgCirculo' && btn.id === 'circulo') {	   
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    } else if (img.id === 'imgQuadrado' && btn.id === 'quadrado') {	      
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    } else if (img.id === 'imgRetangulo' && btn.id === 'retangulo') {	     
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    } else if (img.id === 'imgTriangulo' && btn.id === 'triangulo') {
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    }
    }
}

function selecionaBtn(f) {
    if (btn) {
        btn.classList.remove("clicada");
    }

    btn = f;

    btn.classList.add("clicada");

    if (img && btn) {
            
	    if (img.id === 'imgCirculo' && btn.id === 'circulo') {
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    } else if (img.id === 'imgQua' && btn.id === 'quadrado') {
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    } else if (img.id === 'imgRetangulo' && btn.id === 'retangulo') {
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    } else if (img.id === 'imgTriangulo' && btn.id === 'triangulo') {
		img.classList.remove("clicada");
		btn.classList.remove("clicada");
    		img.classList.add("par");
    		btn.classList.add("par");
	    }
    }
}