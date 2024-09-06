import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeBanner = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const title = self.selector(`.${style.title} span`)
      const title_sm = self.selector(`.${style.title_sm}`)
      const letter = self.selector(`.${style.letter}`)
      const letter_line = self.selector(`.${style.letter_line}`)
      const logo_wrap = self.selector(`.${style.logo_wrap}`)
      const line = self.selector(`.${style.line}`)
     
      // gsap.set(title_sm, { autoAlpha: 0, yPercent: 100 })
      gsap.set(line, { scaleX: 0 })

      
      
      
      gsap.set(logo_wrap, { scale: 1.5 })
      gsap.set(letter_line, { scale: 0.8, filter: `blur(5px)`, autoAlpha: 0,  transformOrigin:"left left" })
      gsap.set([title, title_sm], { autoAlpha: 0, yPercent: 100 })
      gsap.set(letter[0], { x: -160, filter: `blur(5px)`, autoAlpha: 0, scale: 1 })
      gsap.set(letter[1], { x: -80, filter: `blur(5px)`, autoAlpha: 0, scale:1})
      gsap.set(letter[2], { x: 80, filter: `blur(5px)`, autoAlpha: 0, scale: 1})
      gsap.set(letter[3], { x: 160, filter: `blur(5px)`, autoAlpha: 0, scale:1})




      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(letter, { x: 0, autoRound: false,stagger: 0.05, filter: `blur(0px)`, autoAlpha: 1, ease: Expo.easeOut, duration: 2, scale:1 }, 0)
      tl.to(logo_wrap, { scale: 1, ease: Expo.easeOut, duration: 2}, "<")
      tl.to(letter_line, { scale: 1, autoAlpha:1, filter: `blur(0px)`, ease: Expo.easeOut, duration: 1},"<.9")
      tl.to(main.current, { backgroundColor:"#000", ease: Expo.easeOut, duration: 1},"<.1")
      tl.to([letter, letter_line], { fill:"#fff", ease: Expo.easeOut, duration: 1},"<")
      tl.addLabel("anim", "<")
        .play(0);


        let tl1 = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, end: "100%", pin: true } })

        tl1.to(logo_wrap, { yPercent: -100,autoAlpha: 0, ease: Expo.easeOut, filter: `blur(5px)`,duration: 0.5},"<")
        tl1.to(title, { yPercent: 0,autoAlpha: 1,stagger: .05, ease: Expo.easeOut, duration: 1},"<")
        tl1.to(title, { yPercent: -100,autoAlpha: 0,stagger: .02,  ease: Expo.easeOut, duration: 0.5})
        tl1.to(title_sm, { yPercent: 0,autoAlpha: 1, ease: Expo.easeOut, duration: 1.5},"<")




        
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {

        },

        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
        },

        // small
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
        },

        // all 
        "all": function () {

        }
      });

    }, main);

    return () => {
      ctx.revert();
    };
  }, [style, width]);

  return {
    main,
    width
  };
};
