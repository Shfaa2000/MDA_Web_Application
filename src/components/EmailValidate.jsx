import React from 'react'

function EmailValidate({ email, setEmail, error, setError }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // check the value of email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("please enter valid email");
    } else {
      setError("");
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={handleChange}
        required
      />
      {error && <p className='ml-6 md:ml-20' style={{ color: "red", fontSize: "14px", marginRight: "290px", width: "200px"}}>{error}</p>}
    </>
  );
}

export default EmailValidate