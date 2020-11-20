const lista =  document.getElementById('lista')

// cuerpo
const viajes = document.getElementById('viajes')
const pasajes = document.getElementById('pasaje')
const hoteles = document.getElementById('hoteles')
const internacional = document.getElementById('internacional')
 
 function moestraPestana(e){
 	   e.preventDefault()

   viajes.style.display = 'none'
   pasajes.style.display = 'none'
   hoteles.style.display = 'none'
    internacional.style.display = 'none'
   // cobeseras en negro

   viajes.classList.remove('active')
   pasajes.classList.remove('active')
   hoteles.classList.remove('active')
   internacional.classList.remove('active')

   const link = event.target
   console.log(link)
   const cuerpoId = link.dataset.cuerpo
     console.log(cuerpoId)

  const cuerpo = document.querySelector(cuerpoId)
console.log(cuerpo)
cuerpo.style.display = "block"

const papa = link.parentNode
console.log(papa)
papa.classList.add('active')

 }
lista.addEventListener('click', moestraPestana)
