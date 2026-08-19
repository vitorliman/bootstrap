const temaBtn=document.getElementById("temaBtn");
if(temaBtn){
const raiz=document.documentElement;
const salvo=localStorage.getItem("tema");
if(salvo) raiz.setAttribute("data-bs-theme",salvo);
function atualizarTema(){
const atual=raiz.getAttribute("data-bs-theme");
const novo=atual==="dark"?"light":"dark";
raiz.setAttribute("data-bs-theme",novo);
localStorage.setItem("tema",novo);
temaBtn.textContent=novo==="dark"?"☀️":"🌙";
}
temaBtn.textContent=raiz.getAttribute("data-bs-theme")==="dark"?"☀️":"🌙";
temaBtn.addEventListener("click",atualizarTema);
}