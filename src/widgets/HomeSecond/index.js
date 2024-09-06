"use client";
import Image from "next/image";
import style from "./HomeSecond.module.scss";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useHomeSecond } from "./useHomeSecond";

const HomeSecond = ({ data }) => {
  const { main, width } = useHomeSecond({ style });

  return (
    <section
      className={`${style.section} d-flex align-items-center overflow-hidden flex-column pb-5 pb-lg-4 pt-3 pt-lg-3`}
      ref={main}
    >
      <div className={style.content_wrap}>
        <h3
          className={`${style.title_sm}  text-white`}
        >
          But rather <span className="d-inline-block position-relative">a mindset

            <span className={style.line}></span>
          </span>
        </h3>
      </div>
    </section>
  );
};

export default HomeSecond;
