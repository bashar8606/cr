import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeThree = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const title_sm = self.selector(`.${style.title_sm}`);
      const title_sec = self.selector(`.${style.title_sec}`);
      const title_span = self.selector(`.${style.title_sec} .${style.word}`);
      const line = self.selector(`.${style.line}`);
      const re = self.selector(`.${style.re}`);
      const think = self.selector(`.${style.think}`);
      const title_thir = self.selector(`.${style.title_thir}`);
      const strip = self.selector(`.${style.strip}`);
      const line2 = self.selector(`.${style.line2}`);


      gsap.set(title_thir, { autoAlpha: 0, yPercent: 100 });
      gsap.set(title_span, { autoAlpha: 0, yPercent: 100 });
      gsap.set(line, { scaleX: 0 });
      gsap.set(re, { clipPath: `inset(0% 100% 0% 0%)` });
      gsap.set(think, { x: width>=992?-70:-35 });
      gsap.set(strip, { height: "1px", scaleX: 0 });


      gsap.set(line2, { clipPath: `inset(0% 0% 0% 50%)` })

      let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, start:"top 80%", end: "top top",} })
      tl.to(line2, {clipPath: `inset(0% 0% 0% 0.8%)`,  duration: 1.5},"<")

      let tl1 = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          scrub: 0.5,
          end: "300%",
          pin: true,
        },
      });

      tl1.to(
        line,
        { scaleX: 1, ease: Expo.easeOut, transformOrigin: "left", duration: 6 },
        "<"
      );
      tl1.to(
        main.current,
        { backgroundColor: "#fff", ease: Expo.easeOut,  duration: 6 },
        "<"
      );
      tl1.to(
        title_sm,
        {
          yPercent: -150,
          scale: 0.95,
          autoAlpha: 0,
          ease: Expo.easeOut,
          duration: 3,
        },"<.1");
      tl1.to(
        title_span[0],
        { yPercent: 0, autoAlpha: 1, ease: Expo.easeOut, duration: 3 },
        "<"
      );
      tl1.to(line2,
        { autoAlpha: 0, ease: Expo.easeOut, duration: 0.1 },
        "<"
      );
      tl1.to(re, {
        clipPath: `inset(0% 0% 0% 0%)`,
        ease: Expo.easeOut,
        duration: 3,
      });
      tl1.to(think, { x: 0, ease: Expo.easeOut, duration: 3 }, "<");
      tl1.to(title_span[0], {
        yPercent: -150,
        autoAlpha: 0,
        ease: Expo.easeOut,
        duration: 3,
      });

      tl1.to(
        title_span[1],
        { yPercent: -100, autoAlpha: 1, ease: Expo.easeOut, duration: 3 },
        "<"
      );
      tl1.to(title_sec, {
        yPercent: -100,
        scale: 0.6,
        autoAlpha: 1,
        ease: Expo.easeOut,
        duration: 3,
      });
      tl1.to(
        title_thir,
        { yPercent: 0, autoAlpha: 1, ease: Expo.easeOut, duration: 3 },
        "<"
      );
      tl1.to(strip, { scaleX: 1, ease: Expo.easeOut, duration: 3 }, "<.8");
      tl1.to(strip, { height: "50vh", ease: Expo.easeOut, duration: 3 });

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {},

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
        all: function () {},
      });
    }, main);

    return () => {
      ctx.revert();
    };
  }, [style, width]);

  return {
    main,
    width,
  };
};
