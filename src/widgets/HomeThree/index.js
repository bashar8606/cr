"use client";
import Image from "next/image";
import style from "./HomeThree.module.scss";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useHomeThree } from "./useHomeThree";

const HomeThree = ({ data }) => {
  const { main, width } = useHomeThree({ style });

  return (
    <section
      className={`${style.section}  overflow-hidden d-flex align-items-center flex-column pb-5 pb-lg-4 pt-3 pt-lg-3`}
      ref={main}
    >
      <div className={`${style.line2}`}></div>
      <div className={style.content_wrap}>
        <h3 className={`${style.title_sm}  `}>
          <span className="d-inline-block position-relative">
            that will
            <span className={style.line}></span>
          </span>{" "}
          challenge you
        </h3>

        <h3 className={`${style.title_sec}  text-black`}>
          <span  className={`${style.word} d-block`}>To <span className={style.re}>re</span><span className={style.think}>think</span></span>
          <span className={`${style.word} d-block`}>Because</span>
        </h3>
        <h3 className={`text-black ${style.title_thir}`}>Assimilating</h3>
        <div className={`position-absolute start-50 ${style.strip}`}></div>
      </div>
    </section>
  );
};

export default HomeThree;
