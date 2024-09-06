"use client";
import Image from "next/image";
import style from "./HomeFour.module.scss";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useHomeFour } from "./useHomeFour";

const HomeFour = ({ data }) => {
  const { main, width } = useHomeFour({ style });

  return (
    <section
      className={`${style.section} d-flex align-items-center flex-column pb-5 pb-lg-4 pt-3 pt-lg-3`}
      ref={main}
    >

<div className={`position-absolute start-50 ${style.strip}`}></div>
      <div className={style.content_wrap}>
        <h3 className={`${style.title_sm} position-relative text-black`}>
          <div className={style.label}>Leads to</div>
          <span className={style.title_sm_one}> Growth</span>
          <span className={style.title_sm_two}> Thinking</span>
        </h3>
      </div>
    </section>
  );
};

export default HomeFour;
