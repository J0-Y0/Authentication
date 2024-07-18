import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const StyledLink = ({ children, ...other }) => {
  const NewLink = styled(Link)`
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;
  return <NewLink {...other}> {children}</NewLink>;
};

export default StyledLink;
