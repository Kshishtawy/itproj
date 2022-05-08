gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () { // scroll to the top with every refresh
    window.scrollTo(0, 0);
}


document.getElementById("coolBtn").addEventListener('click', gsapanim);

function gsapanim(){
gsap.to(".s3hide", {y: -100, opacity: 0, duration: 2});
gsap.to(".s3hide", {"--hidez": "-1", duration: 0.1});
gsap.to(".s3Shade", {stagger: 0.2, opacity: 1, duration: 1});

}

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.from(".introLogo", {y: 200, opacity: 0, duration: 2 });

tl.to(".introLogo", {y: -100, scale: 0.5, opacity: 0, duration: 1 });

tl.from(".slider", {y: "100%", duration: 2}, "-=1"); 

tl.to(".introAnim", {y: "-100%", duration: 2}, "-=1.5")

tl.from(".elonPic", {x: -100, opacity: 0, duration: 2}, "-=2");

tl.from(".s1stag", {x: 100, opacity: 0, stagger: 0.5, duration: 2}, "-=2");

tl.from(".icostag", {x: -100, opacity: 0, stagger: 0.5, duration: 1}, "-=2");

gsap.to(".scrollDown", {y: 1, repeat: -1, ease: "elastic", duration: 2, yoyo: true}); // s1 ends here

gsap.from(".s2Textbg", {scrollTrigger: { trigger: ".s2Textbg", start: "top center"}, "--left": "80%", opacity: 0 ,duration: 2, ease: "power1.Out"});

gsap.to(".s2Textbg", {scrollTrigger: { trigger: ".s2Textbg", start: "top 20%"}, "--skew": "20deg", duration: 3, ease: "power3.inOut"});

gsap.from(".s2Stag", {scrollTrigger: { trigger: ".s2Stag", start: "top 60%"}, stagger: 0.4, y: 100, opacity: 0, duration: 1}); //s2 ends here

gsap.from(".s3hide", {scrollTrigger: { trigger: ".s3hide", start: "top 40%"}, y: 100, opacity: 0, duration: 1});

gsap.from(".leftimg", {scrollTrigger: { trigger: ".leftimg", start: "top center"}, x: -100 , opacity: 0, duration: 2, ease: "power2.Out"});

gsap.from(".rightimg", {scrollTrigger: { trigger: ".rightimg", start: "top center"}, x: 100 , opacity: 0, duration: 2, ease: "power2.Out"}); //s3 ends here

gsap.to(".s4TextCont", {scrollTrigger: { trigger: ".s4TextCont", start: "top 60%"}, "--s4Expand": "150vw", duration: 3, ease: "power3.inOut"});

gsap.from(".s4TextCont", {scrollTrigger: { trigger: ".s4TextCont", start: "top center"}, opacity:0, duration: 2, ease: "power3.inOut"});

gsap.from(".s4Text", {scrollTrigger: { trigger: ".s4Text", start: "center center"}, y: 100 , opacity: 0, duration: 2, ease: "power2.Out"}); //s4 ends here

gsap.from(".s5stag", {scrollTrigger: { trigger: ".s5stag", start: "top center"}, y: 50, stagger: 0.5 , opacity: 0, duration: 2, ease: "power2.Out"});


