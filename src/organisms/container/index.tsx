import React, {ReactNode} from "react";
import Header from "../../atoms/Header";
import {HeaderButtons} from "../../models";

interface Props {
    children: ReactNode;
    buttonList: HeaderButtons[];
}

const Container = ({children, buttonList}: Props) => {
    return (
      <div>
          <Header buttonList={buttonList}/>
          <div>{children}</div>
      </div>
    );
};

export default Container;
