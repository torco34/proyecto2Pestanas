const lista =  document.getElementById('lista');


// cuerpo
const viajes = document.getElementById('viaje')
const pasajes = document.getElementById('pasaje')
const hoteles = document.getElementById('hoteles')
const internacional = document.getElementById('internacional')
//cuerpo de la paguina

const cuerpo_viajes = document.getElementById('cuerpo_viajes')
const cuerpo_pasajes = document.getElementById('cuerpo_pasajes')
const cuerpo_hoteles = document.getElementById('cuerpo_hoteles')
const cuerpo_internacional = document.getElementById('cuerpo_internacional')
 
 function moestraPestana(e){
 	   e.preventDefault()

  cuerpo_viajes.style.display = 'none'
  cuerpo_pasajes.style.display = 'none'
   cuerpo_hoteles.style.display = 'none'
cuerpo_internacional.style.display = 'none'
   // cobeseras en negro

   viajes.classList.remove('active')
   pasajes.classList.remove('active')
   hoteles.classList.remove('active')
   internacional.classList.remove('active')

   const link = event.target
   console.log(link)
      link.hash
console.log(link.hash)
   const cuerpoId = link.dataset.cuerpo


const cuerpo = document.querySelector(cuerpoId)



console.log(cuerpo)

cuerpo.style.display = "block"
  



const papa = link.parentNode
console.log(papa)
papa.classList.add('active')

 }
function refrecar(e){
e.preventDefault()
const link = event.target
  link.hash
console.log(  link.hash)
}
lista.addEventListener('click', moestraPestana)
lista.addEventListener('click',  refrecar)
