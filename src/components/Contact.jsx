import React, { Component } from "react";
import { motion } from "framer-motion";
import Axios from "axios";
import "../css/Contact.css";

class ContactForm extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    subject: "",
    phone: null,
    company: "",
    message: "",
    sent: false,
    buttonText: "Send message",
    buttonDisabled: false,
  };

  resetForm = () => {
    this.setState({
      fname: " ",
      lname: " ",
      email: " ",
      subject: " ",
      phone: null,
      company: " ",
      message: " ",
      buttonText: "Message sent!",
      buttonDisabled: true,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({ buttonText: "Sending...", buttonDisabled: true });

    let formData = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      subject: this.state.subject,
      phone: this.state.phone,
      company: this.state.company,
      message: this.state.message,
    };

    Axios.post(
      "https://portfolio-contactform-api.herokuapp.com/api/v1",
      formData
    )
      .then((res) => {
        if (res.data.success) {
          this.setState({ sent: true, buttonDisabled: true });
        } else {
          this.setState({ buttonDisabled: false });
        }
      })
      .then(() => {
        this.resetForm();
      })
      .catch(() => {
        alert("There was a problem with sending your message.");
        Error("Message could not be sent!");
        this.setState({ buttonDisabled: false, buttonText: "Send message" });
      });
  };

  render() {
    return (
      <div id="contact">
        <div id="contact-container">
          <motion.h1
            className="section-title"
            initial={{ x: -100, opacity: -10 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Let's talk
          </motion.h1>
          <motion.h3
            id="contact-subtitle"
            initial={{ x: -100, opacity: -10 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Give me a call at +31 6 31694714 or use the contact form below.
          </motion.h3>
          <motion.div
            id="contact-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.form
              className="contact-form"
              initial={{ x: 50, opacity: -1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              onSubmit={this.formSubmit}
            >
              <div className="form-fields">
                <div className="field">
                  <label className="label contact">First name *</label>
                  <div className="control">
                    <input
                      id="fname-input"
                      className="input"
                      type="text"
                      name="fname"
                      onChange={(e) => this.setState({ fname: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label contact">Last name *</label>
                  <div className="control">
                    <input
                      id="lname-input"
                      className="input"
                      type="text"
                      name="lname"
                      onChange={(e) => this.setState({ lname: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label contact">E-mail *</label>
                  <div className="control">
                    <input
                      id="email-input"
                      className="input"
                      type="email"
                      name="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label contact">Subject *</label>
                  <div className="control">
                    <input
                      id="subject-input"
                      className="input"
                      name="subject"
                      onChange={(e) =>
                        this.setState({ subject: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label contact">Phone</label>
                  <div className="control">
                    <input
                      id="phone-input"
                      className="input"
                      type="number"
                      name="phone"
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label contact">Company</label>
                  <div className="control">
                    <input
                      id="company-input"
                      className="input"
                      type="text"
                      name="company"
                      onChange={(e) =>
                        this.setState({ company: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label contact">Message *</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    rows="8"
                    name="message"
                    onChange={(e) => this.setState({ message: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="control">
                <button
                  id="contact-submit"
                  className="button is-white"
                  type="submit"
                  name="submit"
                  disabled={this.state.buttonDisabled}
                >
                  {this.state.buttonText}
                </button>
              </div>
              <br />
              <p style={{ color: "rgb(15, 209, 135)" }} className="label contact">
                * required.
              </p>
            </motion.form>
          </motion.div>
        </div>
        <motion.div
          className="curved"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="1"
              d="M0,320L20,282.7C40,245,80,171,120,144C160,117,200,139,240,128C280,117,320,75,360,53.3C400,32,440,32,480,58.7C520,85,560,139,600,144C640,149,680,107,720,90.7C760,75,800,85,840,85.3C880,85,920,75,960,80C1000,85,1040,107,1080,96C1120,85,1160,43,1200,69.3C1240,96,1280,192,1320,202.7C1360,213,1400,139,1420,101.3L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>
    );
  }
}

export default ContactForm;
