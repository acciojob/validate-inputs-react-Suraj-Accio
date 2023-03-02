import React, { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState({
    nameError: "",
    addressError: "",
    emailError: "",
    mobileError: ""
  });

  const validateForm = () => {
    let nameError = "";
    let addressError = "";
    let emailError = "";
    let mobileError = "";

    // Check for Name
    if (!name.match(/^[a-zA-Z]+$/)) {
      nameError = "Name should contain only letters";
    }

    // Check for Address
    if (address.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>]/)) {
      addressError = "Address should not contain special characters";
    }

    // Check for Email
    if (!email.includes("@") || !email.includes(".com")) {
      emailError = "Email should contain @ and .com";
    }

    // Check for Mobile
    if (mobile.length > 10) {
      mobileError = "Mobile number should not be more than 10 characters";
    }

    setError({
      nameError: nameError,
      addressError: addressError,
      emailError: emailError,
      mobileError: mobileError
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="errorMessage">{error.nameError}</div>
      </div>

      <div class="form">
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="errorMessage">{error.addressError}</div>
      </div>

      <div class="form">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="errorMessage">{error.emailError}</div>
      </div>

      <div class="form">
        <label>Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <div className="errorMessage">{error.mobileError}</div>
      </div>
      <input class="button" type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
