import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import youtubeIcon from "@iconify/icons-simple-icons/youtube";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import "./scss.module.scss";

const LinkButton = (props) => {
    const [icon, setIcon] = useState("");
    useEffect(() => {
        if (props.link.includes("youtube")) {
            setIcon(<Icon icon={youtubeIcon} />)
        } else if (props.link.includes("linkedin")) {
            setIcon(<Icon icon={linkedinIcon} />)
        } else if (props.link.includes("instagram")) {
            setIcon(<Icon icon={instagramIcon} />)
        } else if (props.link.includes("github")) {
            setIcon(<Icon icon={githubIcon} />);
        }
    }, [props])
    return (
        <Button className="mb-3 max-button" variant="outline-light" href={props.link} size="lg" block >
            {icon}
        </Button>
    );
};

export default LinkButton;