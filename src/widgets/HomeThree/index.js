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
            {data?.titlesthird[0]?.title}
            <span className={style.line}></span>
          </span>{" "}
          {data?.titlesthird[1]?.title}
        </h3>

        <h3 className={`${style.title_sec}  text-black`}>
          <span  className={`${style.word} d-block`}>{data?.word2[0]?.title} <span className={style.re}>{data?.word2[1]?.title}</span><span className={style.think}>{data?.word2[2]?.title}</span></span>
          <span className={`${style.word} d-block`}>{data?.word3[0]?.title}</span>
        </h3>
        <h3 className={`text-black ${style.title_thir}`}>{data?.word3[1]?.title}</h3>
        <div className={`position-absolute start-50 ${style.strip}`}></div>
      </div>
    </section>
  );
};

export default HomeThree;
 