import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeSecond = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const title_sm = self.selector(`.${style.title_sm}`);
      const line = self.selector(`.${style.line}`);
      const line2 = self.selector(`.${style.line2}`);
      const line3 = self.selector(`.${style.line3}`);

      gsap.set(line2, { scaleY: 0 });
      // gsap.set(title_sm, { autoAlpha: 0, yPercent: 100 })
      gsap.set(line, { scaleX: 0 });
      gsap.set(line3, { clipPath: `inset(0% 0% 0% 100%)` });

      let tl = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          scrub: 0.5,
          start: "top 80%",
          end: "top top",
        },
      });
      tl.to(
        line2,
        { scaleY: 1, transformOrigin: "top top", duration: 1.5 },
        "<"
      );

      let tl1 = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          scrub: 0.5,
          end: "100%",
          pin: true,
        },
      });
      tl1.to(
        line,
        {
          scaleX: 1,
          ease: Expo.easeOut,
          transformOrigin: "left",
          duration: 1.5,
        },
        "<"
      );

      tl1.to(line3, { clipPath: `inset(0% 0% 0% 50%)`, duration: 3 });
      // let tl3 = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, start:" top bottom", markers: true} })

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
