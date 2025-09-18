const darkBtn = document.getElementById('darkBtn')
const lightBtn = document.getElementById('lightBtn')
const htmlRef = document.querySelector('html')
console.log(htmlRef.classList)
console.log(darkBtn)
console.log(lightBtn)
darkBtn.addEventListener('click',()=>{
    
    htmlRef.classList.add('dark')
    console.log('dark button clicked')
    toggleBtn.value = 'light'
    //alert('dark mode enabled')
})
lightBtn.addEventListener('click',()=>{
    htmlRef.classList.remove('dark')
    toggleBtn.value = 'dark'
    //htmlRef.classList.add('light')
    console.log('light button clicked')
    //alert('light mode enabled')
})

const toggleBtn  = document.getElementById('toggleBtn')
toggleBtn.addEventListener('click',(e)=>{
    if(e.target.value === 'dark'){
        htmlRef.classList.add('dark')
        e.target.value = 'light'
    } else{
        htmlRef.classList.remove('dark')
        e.target.value = 'dark'
    }
})