"use client";
import style from "./HomeFive.module.scss";
import { useHomeFive } from "./useHomeFive";
import { GiHamburgerMenu } from "react-icons/gi";
const HomeFive = ({ data }) => {
  const { main, width } = useHomeFive({ style });

  return (
    <section
      className={`${style.section}  overflow-hidden d-flex align-items-center flex-column pb-5 pb-lg-4 pt-3 pt-lg-3`}
      ref={main}
    >
      <div className={`position-absolute start-50 ${style.strip}`}></div>
      <div className={style.content_wrap}>
        <h3
          className={`${style.title_sm} bg-white py-4 position-relative text-black`}
        >
          <div className={`${style.track}`}>
            {" "}
            Growth requires Rethinking{" "}
            <span className={`d-inline-block ${style.word}`}>
              requires CREO
            </span>
          </div>
        </h3>

        <button className={`${style.btn} fw-700 h4 border-0 bg-transparent`}>Explore

      <span className="ms-2"><GiHamburgerMenu /></span>
        
        </button>
      </div>
    </section>
  );
};

export default HomeFive;
