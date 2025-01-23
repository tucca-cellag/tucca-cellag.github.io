// src/components/Banner/index.tsx

import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import Image from "next/image"; // Using Next.js Image component if applicable
// If not using Next.js, you can use a standard <img> tag or other image components.

interface BannerProps {
  logoSrc: string;
  altText: string;
  backgroundColor?: string;
  height?: number;
}

const Banner: React.FC<BannerProps> = ({
  logoSrc,
  altText,
  backgroundColor = "#f5f5f5",
  height = 150,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      data-aos="fade-down"
      sx={{
        width: "100%",
        backgroundColor: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height,
        padding: isMobile ? "1rem" : "2rem",
      }}
    >
      <img
        src={logoSrc}
        alt={altText}
        style={{
          maxHeight: "100%",
          width: "auto",
          maxWidth: isMobile ? "80%" : "60%",
        }}
      />
    </Box>
  );
};

export default Banner;
