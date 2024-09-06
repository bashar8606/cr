import React, { useState } from 'react';
import style from "./CourseCard.module.scss"
import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import EnquireForm from '../EnquireForm';

export default function CourseCard({ theme, img, title, content }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={` ${style.card} h-100 ${theme} overflow-hidden`}>
                <div className={style.card_body}>
                    <div className={style.img}>
                    <div className="ratio ratio-1x1  mb-3">
                        <Image src={img} priority={true} fill className="object-fit-contain" sizes='50vw' quality={90} alt={`app screen splash`} />
                    </div>
                    </div>
                    <h3 className={`lh-md  mb-2 ${style.title} fw-500 mb-3`}>{title}</h3>
                    <p className="mb-3 title-md lh-2 fw-300 opacity-75">{content}</p>
                    <button className='btn btn-link px-0 rounded-pill text-decoration-none' onClick={handleShow} >Learn More</button>
                </div>
                
            </div>
            <Modal centered show={show} size="xl" className="bg-transparent border-0 " onHide={handleClose}>
                <Modal.Header closeButton className="border-bottom-0">
                </Modal.Header>
                <Modal.Body >
                    <EnquireForm />
                </Modal.Body>
            </Modal>
        </>
    );
}