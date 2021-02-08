import React from "react";

const Failure = ({ error }: { error: Error }) => (
  <div className="failure">Error: {error.message}</div>
);

export default Failure;
