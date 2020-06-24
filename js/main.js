var logoEase = Power3.easeInOut

function sequence1(){
   var tl = new TimelineMax()
   tl.to("#fill-path", 1, {drawSVG: "0% 100%", opacity: 1, ease: logoEase})
   .to("#main-logo", .7, {x: 0, ease: logoEase}, "-=0")

   TweenMax.delayedCall(1, sequence2)
}

function sequence2(){
   var tl = new TimelineMax()
   tl.to("#logo-group", .7, {x: 0, opacity: 1, ease: logoEase}, "sync")
   .to("#logo-copy-gradient-fill", .7, {x: -300, opacity: 1, ease: logoEase}, "sync")
   .to("#logo-copy-color", .5, {opacity: 1}, "sync")

   TweenMax.delayedCall(1.5, exit)
}

function exit(){
   TweenMax.set("#logo-copy-gradient-fill", {rotation: 180, x: 400})
   var tl = new TimelineMax()
   tl.to("#fill-path", 1, { drawSVG: "100% 100%", opacity: 0, ease: logoEase }, "sync")
   .to("#logo-copy-gradient-fill", .7, {x: 0, ease: logoEase}, "sync")
   .to("#main-logo", 1, { ease: logoEase }, "sync+=.5")
   .to("#logo-copy-color", .5, { opacity: 0, onComplete: clearProps}, "-=.7")
}

function clearProps(){
   TweenMax.set("#logo-copy-gradient-fill, #fill-path, #main-logo, #logo-copy-color, #logo, #logo-group", {clearProps: "transform", onComplete: init})
}

function init(){
   TweenMax.set("#logo", {xPercent: -50, yPercent: -50})
   TweenMax.set("#logo-group", {x: -100, opacity: 0, transformOrigin: "center center"})
   TweenMax.set("#logo-copy-gradient-fill", { x: 80, transformOrigin: "center center" })
   TweenMax.set("#logo-copy-color", {opacity: 0})
   TweenMax.set("#fill-path", {drawSVG: "0% 0%", opacity: 0})
   TweenMax.set("#main-logo", {x: 130, onComplete: sequence1})
}

init()