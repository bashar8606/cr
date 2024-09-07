import Link from "next/link";
import style from "./Footer.module.scss";
import { LuShare2 } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className={`${style.footer} bg-white`}>
      <div className={style.footer_credit}>
        <div className="container">
          <div className="row ff-secondary  align-items-center">
            <div className="col-auto">
              <button className={`${style.btn2} bg-transparent border-0 `}>
                <RiArrowDownSLine />
              </button>
            </div>
            <div className="col">
              <p className="mb-0 text-center fw-600 text-black opacity-50">
                2024 © Creo Global. All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <button className={`${style.btn} bg-transparent border-0 `}>
                <LuShare2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
