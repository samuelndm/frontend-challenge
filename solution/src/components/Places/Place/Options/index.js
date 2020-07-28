import React from "react";
import { Container, Option } from "./styled";

import Delete from "./Delete";
import Update from "./Update";

const Options = ({ place }) => {
  return (
    <Container>
      <Option style={{ borderBottomLeftRadius: "inherit" }}>
        <Update slug={place.slug} />
      </Option>
      <Option
        style={{
          borderLeft: "1px solid #212121",
          borderBottomRightRadius: "inherit",
        }}
      >
        <Delete id={place.id} />
      </Option>
    </Container>
  );
};

export default Options;
