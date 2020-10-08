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
    isSending: false,
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
      isSending: false,
      buttonText: "Message sent!",
      buttonDisabled: true,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSending: true, buttonDisabled: true });

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
          this.setState({
            sent: true,
            buttonDisabled: true,
            buttonText: "Message sent!",
          });
        } else {
          this.setState({ buttonDisabled: false });
        }
      })
      .then(() => {
        this.resetForm();
      })
      .catch((error) => {
        console.log(Error(error));
        this.setState({ buttonDisabled: false, buttonText: "Try again" });
      });
  };

  render() {
    return (
      <div id="contact">
        <div id="contact-container">
          <h1 className="section-title">Let's talk</h1>
          <h3 id="contact-subtitle">
            Give me a call at +31 6 31694714 or use the contact form below.
          </h3>
          <div id="contact-section">
            <form className="contact-form" onSubmit={this.formSubmit}>
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
                  className={
                    this.state.isSending
                      ? "button is-white is-outlined is-inverted is-loading"
                      : "button is-black is-outlined is-inverted"
                  }
                  type="submit"
                  name="submit"
                  disabled={this.state.buttonDisabled}
                >
                  {this.state.buttonText}
                </button>
              </div>
              <br />
              <p
                style={{ color: "rgb(15, 209, 135)" }}
                className="label contact"
              >
                * required.
              </p>
            </form>
          </div>
        </div>
        <div className="curved">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgb(18, 20, 22)"
              fillOpacity="1"
              d="M0,96L48,133.3C96,171,192,245,288,261.3C384,277,480,235,576,208C672,181,768,171,864,170.7C960,171,1056,181,1152,154.7C1248,128,1344,64,1392,32L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default ContactForm;
