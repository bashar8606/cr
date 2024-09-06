import React, { useState } from 'react';
import style from "./SpecCard.module.scss"
import Image from 'next/image';

export default function SpecCard({ theme, icon, title, bg }) {

    return (
        <div className={` ${style.card} position-relative ${theme}`} >
            <Image src={bg} fill className='object-fit-cover' />
            <div className={`${style.card_head} d-flex align-items-center mb-lg-3 mb-2`}>
                <div className={`rounded-circle ${style.icon} d-flex text-white justify-content-center align-items-center text-white h4`}>
                    <div className="ratio ratio-1x1">
                        <Image src={icon} fill className='object-fit-contain' />
                    </div>
                </div>
            </div>
            <div className={style.card_body}>
                <h3 className={`lh-1 ps-3  mb-0 text-white ${style.title} fw-500`}>{title}</h3>
            </div>
        </div>
    );
}