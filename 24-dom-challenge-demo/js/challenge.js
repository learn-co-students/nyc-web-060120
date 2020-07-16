document.addEventListener('DOMContentLoaded',()=>{
    const timer = document.getElementById('counter')
    let paused = false

    let timerInterval = setInterval(()=>{
                            timer.innerText = parseInt(timer.innerText, 10) + 1
                        },1000 )

    document.addEventListener('click',(event)=>{
 
        if(event.target.id==='minus'){
            timer.innerText = parseInt(timer.innerText, 10) - 1
        } else if(event.target.id==='plus'){
            timer.innerText = parseInt(timer.innerText, 10) + 1
        } else if (event.target.id==='pause'){
            const pausedButton = document.getElementById('pause')

            if (!paused){
                clearInterval(timerInterval)
                const buttons = document.querySelectorAll('button')
                buttons.forEach(button=>{
                    if(button.id !== 'pause'){
                        button.disabled = true
                    }
                })

                paused = true
                pausedButton.innerText = 'resume'

            } else if (paused){

                timerInterval = setInterval(()=>{
                    timer.innerText = parseInt(timer.innerText, 10) + 1
                },1000 )
                
                const buttons = document.querySelectorAll('button')
                buttons.forEach(button=>{
                    if(button.id !== 'pause'){
                        button.disabled = false
                    }
                })

                paused = false
                pausedButton.innerText = 'pause'
            }
        } else if (event.target.id==='heart'){
            const likesList = document.querySelector('.likes')

            const currentNumber = document.getElementById(`${timer.innerText}`)

            //if the number hasn't been liked yet
            if(currentNumber === null){
                //create an li with the correct info

                const like = document.createElement('li')
                like.id = timer.innerText
                like.innerHTML = `this ${timer.innerText} was liked <span>1</span> times`

                //append that li to the likesList

                likesList.appendChild(like)
            } else {
                //if the number has already been liked
                currentNumber.children[0].innerText = parseInt(currentNumber.children[0].innerText) + 1
            }


        }
    })

    document.addEventListener('submit',(event)=>{
        event.preventDefault()
        
        const commentList = document.getElementById('list')

        const comment = document.createElement('div')
        comment.innerText = event.target[0].value

        commentList.append(comment)

        console.log(event.target[0].value)


    })


})