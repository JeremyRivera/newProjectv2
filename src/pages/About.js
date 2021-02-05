import React from "react";
import { ListGroup } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";
import "../components/WidthLimit.scss";

const About = () => {
  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
        <Image
          className="rounded-circle mb-4 "
          alt="profileImage"
          width="200"
          height="auto"
          src={`${process.env.PUBLIC_URL}/profile_image.jpeg`}
        />
        <h4 className="text-white mb-5 max-button">
          <strong>About Me...</strong>
        </h4>
        <h5 className="text-white mb-5 max-button ">
          I am a resilient hardworker/problem solver, Who does not like to give
          up when presented with a challenge! Working for a small startup called
          Electus media as a front-end Developer! My Hobbies include watching
          anything "Tech" related , learing more about code , building Gunpla ,
          going to the best foodie spots with my fiance, and working out!
        </h5>
        <Button
          variant="outline-light"
          href={`${process.env.PUBLIC_URL}resume2020.pdf`}
          size="lg"
          download
        >
          My Resume
        </Button>
      </div>
    </ListGroup>
  );
};

export default About;
