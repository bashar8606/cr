import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeFive = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const track = self.selector(`.${style.track}`);
      const strip = self.selector(`.${style.strip}`);
      const word = self.selector(`.${style.word}`);
      const btn = self.selector(`.${style.btn}`);

      gsap.set(word, { autoAlpha: 0});
      gsap.set(btn, { yPercent: 100, autoAlpha: 0 });

      let tl1 = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          scrub: 0.5,
          pin: true,
          // start:"top 40%"
        },
      });

      tl1.to(
        track,
        { xPercent: -60, ease: Expo.easeOut, duration: 3 },
        "<"
      );
      tl1.to(
        word,
        { autoAlpha: 1,stagger:1,ease: "steps(1)", duration: 2 }
      );
      tl1.to(
        strip,
        { yPercent: -100, ease: Expo.easeOut, duration: 6 },
        "<.9"
      );
      tl1.to(
        btn,
        { yPercent: 0,autoAlpha: 1, ease: Expo.easeOut, duration: 2 }
      );
     

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
