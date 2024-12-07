import React from 'react';

const ContactMap = () => {
    return (
        <div className="fm-contact-map-area section-spacing-bottom">
        <div className="container">
           <div className="row justify-content-center">
              <div className="col-xl-10">
                 <div className="fm-contact-map-wrapper bdFadeBottom">
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6616.482908207142!2d-118.46628650363883!3d33.98633133878809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1685943435445!5m2!1sen!2sbd"></iframe>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
};

export default ContactMap;