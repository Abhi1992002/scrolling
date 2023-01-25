let path = document.querySelector("path");
// svg ka path le liya
let pathLength = path.getTotalLength();
// it helps us to get actual length of my svg and help to set stroke length 

path.style.strokeDasharray = pathLength + ' ' + pathLength ; 
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll" , ()=>{
    // to tell how much % down is it?
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


            var drawLength = pathLength * scrollPercentage;


            path.style.strokeDashoffset = pathLength - drawLength;

            const target = document.querySelectorAll(".scroll")

            target.forEach( (elem) => {
                let pos = window.scrollY * elem.dataset.rate
                    if (elem.dataset.direction === 'vertical') {
                      return (elem.style.transform = `translateY(${pos}px)`)
                    }
                })
})

