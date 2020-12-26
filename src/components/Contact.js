import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="content-wrapper contact-content">
        <div className="contact__info--left">
          <p className="contact__info__text">
            I am interested in working with any company that thinks my skill
            will be helpful for them. If you are looking for someone like me,
          </p>
          <a
            href="mailto:imtiazhossain373@gmail.com"
            className="contact__info__contact-button button-primary"
          >
            Contact Me
          </a>
        </div>
        <div className="contact__info--right">
          <ul className="contact__info__social-list">
            <li>
              <span className="contact__info__social-name">Email</span>
              <p className="contact__info__social-details">
                imtiazhossain373@gmail.com
              </p>
            </li>
            <li>
              <span className="contact__info__social-name">Skype</span>
              <p className="contact__info__social-details">===</p>
            </li>
            <li>
              <span className="contact__info__social-name">Facebook</span>
              <p className="contact__info__social-details">
                @imtiaz.hossain.3745
              </p>
            </li>
            <li>
              <span className="contact__info__social-name">Address</span>
              <p className="contact__info__social-details">
                31 DT Road, Kadamtali, Chattogram.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;