// type , timestamp , defaultPrevented , 
// target , toElement , SourceElement , current Target 
// ClientX , clientY , ScreenX , ScreenY 
// altKey , cntrlKey , ShiftKey , KeyCode , 





// document.getElementById('cow').onclick = function(){
//     alert('Cow Clicked')
// }




// document.getElementById('images').addEventListener('click' , function(e){
//     console.log("Clicked Inside the Ul");
    
// }, false)

// document.getElementById('cow').addEventListener('click' , function(e){
//     console.log("Clicked On Cow");
//     e.stopPropagation()
// }, false)


// document.getElementById('google').addEventListener('click' , function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('clicked on Google');
// }, false)



document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName)
    if (e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeit = e.target.parentNode
        removeit.remove()
    }



    // let removeit = e.target.parentNode
    // removeit.remove()
    // removeit.parentNode.removechild(removeit)
})

