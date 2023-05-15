import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border-bottom": `1px solid ${COLORS.black}`,
  },
  large: {
    "--border-bottom": `2px solid ${COLORS.black}`,
  },
};

const ICON_SIZES = {
  small: 10,
  large: 16,
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <IconInputWrapper style={styles} width={width}>
      <Icon id={icon} size={ICON_SIZES[size]}/>
      <Input type="text" placeholder={placeholder} />
    </IconInputWrapper>
  );
};

const IconInputWrapper = styled.div`
  position: relative;
  display: inline;
  width: ${({ width }) => `${width}px`};
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--border-bottom);
`;

export default IconInput;
