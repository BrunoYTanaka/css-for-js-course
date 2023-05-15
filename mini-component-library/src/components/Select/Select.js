import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectWrapper = styled.select`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  border: 0;
  appearance: none;

  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: ${COLORS.gray700};

  &:focus {
    border: 2px solid ${COLORS.primary};
    outline-color: currentColor;
    border-radius: 8px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </>
  );
};

export default Select;
