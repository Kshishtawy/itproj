const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.from(".stag1", {y: 100, stagger: 0.5, opacity: 0, duration: 4})

tl.to(".intro", {y: -200, opacity: 0, duration: 2, delay: 1 })

tl.to(".intro", {y: -1000, duration: 0.1})