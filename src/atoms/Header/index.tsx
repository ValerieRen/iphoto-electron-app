import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { HeaderButtons } from "../../models";

interface Props {
  buttonList: HeaderButtons[];
}

const Header = ({ buttonList }: Props) => {
  return (
    <ButtonGroup
      size="small"
      color="primary"
      aria-label="outlined primary button group"
    >
      {buttonList.map((button, index) => (
        <Button key={index} onClick={button.onClick}>
          {button.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Header;
