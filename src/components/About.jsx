import React from "react";
import { motion } from "framer-motion";
import "../css/About.css";

function About() {
  return (
    <div id="about" className="section-container">
      <div id="about-container">
        <h1 className="section-title">About me</h1>
        <div id="about-section">
          <div id="about-me-intro">
            <p>
              I'm a starting{" "}
              <span className="highlight"> junior front-end web developer</span>{" "}
              from The Netherlands with a desire for designing and building
              user-friendly and responsive web applications and websites.
              <br /> In addition to programming as a hobby, I signed up for and
              finished an intensive 14 weeks full-stack developer bootcamp as a
              stepping stone to landing my first junior developer job. The
              bootcamp is organized by{" "}
              <span className="highlight">Code For All_The Netherlands</span>,
              the Dutch branch from the Portuguese organization{" "}
              <span className="highlight">Academia de Codigo</span>.
              <br />
              <br />
              While I've spend a lot of time learning{" "}
              <span className="highlight">full-stack development</span>, I've
              discovered that{" "}
              <span className="highlight">front-end web development</span>{" "}
              really is what I like and what I want to professionalize in,
              mainly because I like to work with what the user sees visually and
              design well thought-out user interfaces and experiences. That's
              not to say I don't like back-end programming. I think it's good to
              maintain knowledge and skills on that part to have as good of an
              understanding on both sides of development. That's why I also
              dedicate a smaller part of my learning time to{" "}
              <span className="highlight">Node.js</span> and the Node.js
              framework <span className="highlight">Express</span>, while also
              learning how to set up NoSQL databases with{" "}
              <span className="highlight">MongoDB</span>.
              <br />
              <br />
              I've well invested my time into learning{" "}
              <span className="highlight">JavaScript</span> and{" "}
              <span className="highlight">React</span>, and I'm still investing
              a lot into this because I believe you{" "}
              <span className="highlight">never stop learning</span> in this
              field.
              <br />I also love coming up with{" "}
              <span className="highlight">simple and beautiful designs</span>,
              and think{" "}
              <span className="highlight">
                user experience is equally important
              </span>
              . I enjoy sharing thoughts on those aspects.
              <br />
              <span className="highlight">
                I'm an eager learner and don't stop learning something until I
                master it.
              </span>
              <br />
              <br />
              At the moment,{" "}
              <span className="highlight">
                I'm available for any junior front-end web developer job
                opportunities
              </span>
              . Please don't hesitate to contact me about this or any other
              inquiries you might have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
