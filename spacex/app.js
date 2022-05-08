gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () { // scroll to the top with every refresh
    window.scrollTo(0, 0);
  }

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.from(".introLogo", {y: 200, opacity: 0, duration: 2 });

tl.to(".introLogo", {y: -100, scale: 0.5, opacity: 0, duration: 1 });

tl.from(".slider", {y: "100%", duration: 2}, "-=1"); 

tl.to(".introAnim", {y: "-100%", duration: 2}, "-=1.5")

tl.from(".text1", {x: -100, opacity: 0, duration: 2}, "-=2");

tl.from(".elonPic", {x: 100, opacity: 0, duration: 2}, "-=2");

tl.from(".s1", {y: -100, opacity: 0, duration: 2}, "-=2");

tl.from(".spacexLogo", {y: -100, opacity: 0, duration: 2}, "-=3");

tl.from(".icostag", {x: -100, opacity: 0, stagger: 0.5, duration: 1}, "-=2");

gsap.to(".scrollDown", {y: "1vh", repeat: -1, ease: "elastic", duration: 2, yoyo: true}); // section 1 ends here

gsap.from(".s2", {scrollTrigger: { trigger: ".s2", start: "top 90%"}, y: 100, opacity: 0, duration: 1}); //scroll trigger starts here

gsap.from(".s2Stag", {scrollTrigger: { trigger: ".s2Stag", start: "top 60%"}, stagger: 0.4, y: 100, opacity: 0, duration: 1}); // the awesome stagger animation

gsap.from(".failvid", {scrollTrigger: { trigger: ".failvid", start: "top 90%"}, y: 100, opacity: 0, duration: 1}); // section 3 starts here

gsap.from(".falconCont", {scrollTrigger: { trigger: ".falconCont", start: "top center"}, x: 100, opacity: 0, duration: 1});

gsap.from(".faconTextCont", {scrollTrigger: { trigger: ".faconTextCont", start: "top center"}, x: -100, opacity: 0, duration: 1});

gsap.from(".s4", {scrollTrigger: { trigger: ".s4", start: "top 90%"}, x: -100, opacity: 0, duration: 5});

gsap.from(".s4Stag", {scrollTrigger: { trigger: ".s4", start: "top 30%"}, y: 100, stagger: 0.4, opacity: 0, duration: 1});

