const buttomMenu = document.querySelector('img.menu')
const divicons = document.querySelector('.icons')
const logout = document.querySelector('.log-out')
const sidebar = document.getElementById('sidebar')

buttomMenu.onclick = function() {
  sidebar.classList.add('close')
  divicons.classList.add('display')
  logout.classList.add('none')
}

document.addEventListener('keydown', function(event){
  console.log(event)
  const isEscKey = event.key === 'Escape'
  if(isEscKey) {
    sidebar.classList.add('close')
    divicons.classList.add('display')
    logout.classList.add('none')
  }
})

 function ClickOpens() {
  sidebar.classList.remove('close')
    divicons.classList.remove('display')
    logout.classList.remove('none')
}