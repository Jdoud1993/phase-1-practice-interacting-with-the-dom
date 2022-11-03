
// Start Counter Once DOM is Loaded
document.addEventListener(`DOMContentLoaded`, ()=> {
    let counter = document.getElementById(`counter`);
    let minusBtn = document.getElementById(`minus`);
    let plusBtn = document.getElementById(`plus`);
    let heartBtn = document.getElementById('heart')
    let pauseBtn = document.getElementById(`pause`)
    let commentForm = document.getElementById(`comment-form`)
    
    let intervalID;
    if (!intervalID) {
        intervalID = setInterval(handleTimer, 1000);
    }
   
    function handleTimer () {
        counter.innerText++
    }

    // Timer Manipulator Functions
    minusBtn.addEventListener(`click`, () =>{
        if (counter.innerText > 0) {
            counter.innerText--
        }
    })

    plusBtn.addEventListener(`click`, () => counter.innerText++)


    heartBtn.addEventListener(`click`, () => {
       let counterNum = counter.innerHTML
       let likes = document.querySelector(".likes")
       let arrLikes = [...likes.children]
       let elementLi = (arrLikes.find((item) => {if (item.id === counterNum)
        {return item.id}
        else {return null}
       })) 
       console.log (elementLi)
       if (elementLi) {
        let spanLi = document.getElementById(`s${counterNum}`)
        elementLi.innerHTML = `${counterNum} has been liked <span id=s${counterNum}>${++spanLi.innerText}</span> times`
       } else{
       let li = document.createElement("li")
       li.innerHTML = `${counterNum} has been liked <span id=s${counterNum}>1</span> time`
       li.id = counterNum
       likes.appendChild(li)
        }}
    )

    pauseBtn.addEventListener(`click`, () => {
        if (intervalID >= 1) {
            pauseBtn.innerText = `resume`
            clearInterval(intervalID)
            intervalID = null
            minusBtn.disabled = true
            plusBtn.disabled = true
            heartBtn.disabled = true

        } else {
            intervalID = setInterval(handleTimer, 1000)
            pauseBtn.innerText = `pause`
            minusBtn.disabled = false
            plusBtn.disabled = false
            heartBtn.disabled = false
        }
    })

    commentForm.addEventListener(`submit`, (e) => {
        e.preventDefault()
        let commentInput = document.getElementById(`comment-input`)
        let p = document.createElement(`p`)
        p.innerText = commentInput.value
        document.getElementById(`list`).appendChild(p)
    })

})




