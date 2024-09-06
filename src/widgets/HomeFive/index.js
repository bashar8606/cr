"use client";
import style from "./HomeFive.module.scss";
import { useHomeFive } from "./useHomeFive";

const HomeFive = ({ data }) => {
  const { main, width } = useHomeFive({ style });

  return (
    <section
      className={`${style.section} d-flex align-items-center flex-column pb-5 pb-lg-4 pt-3 pt-lg-3`}
      ref={main}
    >
      <div className={`position-absolute start-50 ${style.strip}`}></div>
      <div className={style.content_wrap}>
        <h3 className={`${style.title_sm} bg-white py-4 position-relative text-black`}>
         <div className={`${style.track}`}> Growth requires Rethinking requires CREO</div>
        </h3>
      </div>
    </section>
  );
};

export default HomeFive;
