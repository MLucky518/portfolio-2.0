import React, { useState } from "react";

function EmailForm() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return <div></div>;
}

export default EmailForm;
