import React, { useState } from "react";

const ReferalForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    friendName: "",
    friendEmail: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.yourName = formData.yourName ? "" : "This field is required.";
    tempErrors.yourEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.yourEmail)
      ? ""
      : "Email is not valid.";
    tempErrors.friendName = formData.friendName
      ? ""
      : "This field is required.";
    tempErrors.friendEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.friendEmail
    )
      ? ""
      : "Email is not valid.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log(formData);
  //     // Process form data
  //   }
  // };

  // backend

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/referral", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Referral submitted successfully!", data);
          handleClose();
        } else {
          console.error("Error:", data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              required
            />
            {errors.yourName && (
              <p className="text-red-500 text-sm">{errors.yourName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
              name="yourEmail"
              type="email"
              value={formData.yourEmail}
              onChange={handleChange}
              required
            />
            {errors.yourEmail && (
              <p className="text-red-500 text-sm">{errors.yourEmail}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
              name="friendName"
              value={formData.friendName}
              onChange={handleChange}
              required
            />
            {errors.friendName && (
              <p className="text-red-500 text-sm">{errors.friendName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
              name="friendEmail"
              type="email"
              value={formData.friendEmail}
              onChange={handleChange}
              required
            />
            {errors.friendEmail && (
              <p className="text-red-500 text-sm">{errors.friendEmail}</p>
            )}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferalForm;
