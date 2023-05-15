/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={100}
      aria-valuemin={0}
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <ProgressWrapper>
        <Progress
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        />
        <VisuallyHidden>{value}</VisuallyHidden>
      </ProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const ProgressWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Progress = styled.div`
  width: var(--width);
  height: 8px;
  background ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
