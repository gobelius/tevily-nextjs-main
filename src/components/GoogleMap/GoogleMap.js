import React from "react";

const GoogleMap = () => {
  return (
    <section className='contact-page-google-map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.7797750535337!2d18.429963415782137!3d43.86039304702532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c98f95c5d5e7%3A0x9a441cbb8ba872d0!2sAdventure%20in%20Bosnia%20%7C%20Tour%20Agency%20%7C%20Tours%20and%20Excursions!5e0!3m2!1sen!2sba!4v1679750193384!5m2!1sen!2sba'
        className='contact-page-google-map__one'
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
