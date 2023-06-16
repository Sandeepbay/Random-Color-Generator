const btn = document.querySelector('#button')
const h2 =document.querySelector('h2')
btn.addEventListener('click',function(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor
    h2.innerText = newColor
})