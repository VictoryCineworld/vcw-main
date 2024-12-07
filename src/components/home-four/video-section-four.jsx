import React from 'react';
import Icon from '@assets/img/new-icon/reel.png'
import videoImgBg from '@assets/img/bg/video/img-1.png'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import { useState } from 'react';

const VideoSectionFour = () => {
   const [isOpen, setIsOpen] = useState(false)
   const openVideoModal = (id) => setIsOpen(!isOpen)

   return (
      <>
         <div className="video-area-3 bg-common-black fix pos-rel wow fadeInUp" data-wow-delay="0.3s">
            <div className="fm-video-bg" style={{ backgroundImage: `url(${videoImgBg.src})` }}></div>
            <div className="fm-video-btn-wrapper">
               <div className="fm-video-thumb">
                  <Image src={Icon} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
               </div>
               <button className="popup-video video-btn-2 " onClick={() => { openVideoModal() }}><i
                  className="icon-size fas fa-play"></i></button>
            </div>
         </div>
         <ModalVideo channel='youtube' isOpen={isOpen} videoId="zAGVQLHvwOY" onClose={() => setIsOpen(false)} />
      </>
   );
};

export default VideoSectionFour;