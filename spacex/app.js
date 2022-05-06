const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.from(".introLogo", {y: 200, opacity: 0, duration: 2 });

tl.to(".introLogo", {y: -100, opacity: 0, duration: 1 });

tl.from(".slider", {y: "100%", duration: 2}, "-=1"); 

tl.to(".introAnim", {y: "-100%", duration: 2}, "-=1.5")

tl.from(".text1", {x: -100, opacity: 0, duration: 2}, "-=2");

tl.from(".elonPic", {x: 100, opacity: 0, duration: 2}, "-=2");

tl.from(".s1", {y: -100, opacity: 0, duration: 2}, "-=2");

tl.from(".spacexLogo", {y: -100, opacity: 0, duration: 2}, "-=3");
