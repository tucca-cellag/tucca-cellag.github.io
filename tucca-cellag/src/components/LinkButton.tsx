// src/components/LinkButton.tsx

import React from "react";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import PropTypes from "prop-types";

const LinkButton = ({ url, text }) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="contained"
      size="large"
      endIcon={<LinkIcon />}
      onClick={handleClick}
      sx={{ margin: 1 }}
      aria-label={text}
    >
      {text}
    </Button>
  );
};

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkButton;
