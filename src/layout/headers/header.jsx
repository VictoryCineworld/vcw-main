import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from '@assets/img/logo/logo.png'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Menus from "./menus";
import OffCanvasMain from "@components/common/off-canvas";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = ({HeaderWrapperClass}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // Sticky Menu Area start
	useEffect(() => {
		window.addEventListener('scroll', sticky);
		return () => {
		   window.removeEventListener('scroll', sticky);
		};
	 });
  
	 const sticky = (e) => {
		const header = document.querySelector('.header-main');
		const scrollTop = window.scrollY;
		scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
	 };
	 // Sticky Menu Area End
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    const router = useRouter();

    const handleClick = () => {
      // Navigate to the desired page (e.g., /new-page)
      router.push('/contact');
    };
    return (
        <>
       <header id="header-sticky" className={HeaderWrapperClass ? 
         `fm-header-area header-border transparent-header header-main ${HeaderWrapperClass}`:
          'fm-header-area header-border transparent-header header-main'}>
      <div className="container">
         <div className="row align-items-center justify-content-lg-between">
            <div className="header-wrapper">
               <div className="fm-header-logo-wrapper">
                  <Link href="/" className="fm-header-logo">
                     <Image  style={{width:'100px', height:'auto' , marginLeft:'30px'}} src={Logo} alt="img not found"/>
                  </Link>
                  <span className="separator d-none d-xl-block"></span>
                  <button className="fm-header-bar-1" onClick={() => setIsOffCanvasOpen(true)}>
                     <span className="fm-header-bar-line fm-header-bar-line-1"></span>
                     <span className="fm-header-bar-line fm-header-bar-line-2"></span>
                     <span className="fm-header-bar-line fm-header-bar-line-3"></span>
                  </button>
               </div>
               <div className="header-menu-spc d-none d-xl-block">
                  <div className="fm-header-nav">
                     <nav className="mean-nav" id="mobile-menu ">
                        <Menus/>
                     </nav>
                  </div>
               </div>
               <div>
      {/* Enquire Now Button */}
      <div className="fm-header-right d-none d-xl-block">
        <button
        onClick={handleClick}
          className="fill-btn"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Enquire Now
          <span>
            <i className="fa-regular fa-arrow-right"></i>
          </span>
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
         </div>
      </div>
   </header>
    {/* full canvas area start */}
    <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
        </>
    );
};

export default Header;
