import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container">
      <form action="" className="contact-form__form">
        <div className="contact-form__top">
          <div>
            <label htmlFor="">Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
