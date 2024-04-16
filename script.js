
const tl1 = gsap.timeline({paused:true});
// const tl2 = gsap.timeline({paused:true});
// tl1.to(".hero",{
//   xPercent:-50,
//   scrollTrigger:{
//     scrub:2,
//     trigger:".hero",
//     scroller:"body",
//     //pin:".page1",
//     markers:true,
//     start:"10% top",
//     end:"100% 45%",
    
//   }
// })
gsap.set(".hero", {
  xPercent:-50,
  
})


tl1.to(".hero",{
  xPercent:0,
  duration:1.75,
  ease: "power2.out",
})
tl1.to("body",{
  background: "rgb(26,81,46)",
  background: "linear-gradient(0deg, rgba(26,81,46,1) 0%, rgba(99,169,31,1) 52%, rgba(122,152,94,1) 87%)",
  duration:1.75,
},"-=1.75")

// tl2.to(".hero",{
//   xPercent:-50,
//   duration:1.75,
//   ease: "power2.out",
// })



const leftButton = document.querySelector(".leftArrow")
const rightButton = document.querySelector(".rightArrow")

leftButton.addEventListener("click", ()=>{
  tl1.play();
  document.querySelector("header").classList.add("white")
  Array.from(document.querySelectorAll(".sticks")).forEach((stick)=>{
    stick.style.backgroundColor = "white"
    console.log("hi")
  })
})

rightButton.addEventListener("click", ()=>{
  console.log("hoo")
  tl1.reverse();
  
  document.querySelector("header").classList.remove("white")
  Array.from(document.querySelectorAll(".sticks")).forEach((stick)=>{
    stick.style.backgroundColor = "black"
    console.log("hi")
  })
})

gsap.to(".rock1",{
  yPercent:100,
  xPercent:-35,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    scrub:1,
    start:"5% top",
    end:"bottom -35% "
    // markers:true
  }
})
gsap.to(".bush1",{
  yPercent:100,
  xPercent:35,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    scrub:1,
    start:"5% top",
    end:"bottom -10% "
    // markers:true
  }
})
gsap.to(".bush2",{
  yPercent:100,
  xPercent:-35,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    scrub:1,
    start:"5% top",
    end:"bottom -15% "
    // markers:true
  }
})
gsap.to(".rock2",{
  yPercent:100,
  xPercent:35,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    scrub:1,
    start:"5% top",
    // markers:true,
    end:"bottom -35% "
  }
})
gsap.to(".cycle1,.cycle2",{
  yPercent:-100,
  scale:0.3,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    scrub:1,
    start:"5% top",
    // markers:true,
    end:"bottom -100% "
  }
})
gsap.to(".heading,.ride",{
  yPercent:-100,
  scale:0.3,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    scrub:1,
    start:"5% top",
    // markers:true,
    end:"bottom -110% "
  }
})

gsap.from(".page3Head1",{
  y:280,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    // markers:true,
    scrub:1,
    start:"45% top",
    // end:"80%"
  }
})
gsap.from(".racer",{
  y:-100,
  opacity:0,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    // markers:true,
    scrub:1,
    start:"45% top",
    // end:"80%"
  }
})




