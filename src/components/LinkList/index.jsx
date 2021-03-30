import React from 'react';
import { ListGroup, Image } from "react-bootstrap";
import LinkButton from "../LinkButton/index";

const LinkList = () => {
    const Links = [
        "https://github.com/JeremyRivera",
        "https://www.instagram.com/itsjeremyrivera/",
        "https://www.linkedin.com/in/jeremyrivera23/",
        "https://www.youtube.com/channel/UCYmnpGdgAyJl93BvjZixmHQ"
    ];
    return (
        <ListGroup>
            <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center" >
                <Image className="rounded-circle mb-4 " alt="profileImage" width="200" height="auto" src={`${process.env.PUBLIC_URL}/profile_image.jpeg`} />
                <h5 className="mb-4 text-white">@itsjeremyrivera</h5>
                {Links.map((link) => (
                    <LinkButton key={link} link={link} />
                ))}
            </div>
        </ListGroup>
    );
};

export default LinkList;