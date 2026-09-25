document.getElementById('ano').textContent = new Date().getFullYear();

function abrirGaleria(src, legenda){
  document.getElementById('galeriaLightboxImg').src = src;
  document.getElementById('galeriaLightboxImg').alt = legenda;
  document.getElementById('galeriaLightboxLegenda').textContent = legenda;
  document.getElementById('galeriaLightbox').classList.add('aberto');
}

function fecharGaleria(){
  document.getElementById('galeriaLightbox').classList.remove('aberto');
}

document.querySelectorAll('.galeria-item').forEach(function(item){
  item.addEventListener('click', function(){
    abrirGaleria(item.dataset.img, item.dataset.legenda);
  });
});

document.getElementById('galeriaLightbox').addEventListener('click', function(e){
  if(e.target.id === 'galeriaLightbox' || e.target.classList.contains('galeria-fechar')){
    fecharGaleria();
  }
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    fecharGaleria();
  }
});
