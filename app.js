const tl = gsap.timeline({defaults: {durarion: 0.75, ease: "power2.out"}})
//ease: "power2.out" -> dá fluídez aos movimentos

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.6)", duration: 1.5})  //muda a escala de 0 pra 1
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<50%') //muda a opacidade de 0 pra 1 do biscoito e da esquerda(-50 (fora do quadrado)) para a posição original(0), como a linha vem depois do texto, a mudança ocorre dps
tl.fromTo('.text', {x:30, opacity: 0}, {x:0, opacity: 1}, '<') // esse menor('<') no final pede que está linha de ação seja executada ao mesmo tempo q a anterior
// acima acontece uma corrente de ações, uma após a outra

//gsap.fromTo('.text', {opacity: 0, y: 20}, {opacity:1, y: 0, duration:1})
//gsap.to('.text', {y: 100, opacity: 0, duration: 1})
//mas isso é se eu quiser que o texto VÁ para algum lugar
// se eu quiser q ele volte então será usando o 'gsap.fromTo()'


//cookie jump                       //yoyo é o efeito
tl.fromTo('.cookie', {y:0, rotation: '0deg'}, {y:-20, rotation: '-10deg', yoyo: true, repeat: -1}) //3 dá 3 pulos e para -1 faz com q seja pra sempre
tl.fromTo('#crumbs', {y:0}, {y:-10, rotation: '-10deg', yoyo: true, repeat: -1}, '<')



// faz com q a janela suma ao clique
const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'})
})