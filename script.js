let display=document.getElementById('container')
let button=document.getElementById('btn')


button.addEventListener('click',()=>{
    countdown()
})

function countdown (){
setTimeout(()=>{
    display.innerHTML='<h1>10</h1>'
    setTimeout(()=>{
        display.innerHTML='<h1>9</h1>'
        setTimeout(()=>{
            display.innerHTML='<h1>8</h1>'
            setTimeout(()=>{
                display.innerHTML='<h1>7</h1>'
                 setTimeout(()=>{
                    display.innerHTML='<h1>6</h1>'
                       setTimeout(()=>{
                        display.innerHTML='<h1>5</h1>'
                            setTimeout(()=>{
                                display.innerHTML='<h1>4</h1>'
                                 setTimeout(()=>{
                                    display.innerHTML='<h1>3</h1>'
                                     setTimeout(()=>{
                                        display.innerHTML='<h1>2</h1>'
                                          setTimeout(()=>{
                                            display.innerHTML='<h1>1</h1>'
                                              setTimeout(()=>{
                                                display.innerHTML='<h1>0</h1>'
                                                    setTimeout(()=>{
                                                        
                                                         display.innerHTML='<h1 id=header> Happy Independance Day </h1>'
                                                        
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)              
                            },1000)                      
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
}