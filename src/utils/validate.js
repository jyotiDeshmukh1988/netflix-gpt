export const checkValidData = (email, password, fullname) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  const isFullNameValid = /^[A-Za-z ]+$/.test(fullname);
  if (email === "" || password === "" || fullname === "") {
    return "All fields are mandatory";
  }
  if (!isEmailValid) return "Email ID is invalid";
  if (!isPasswordValid) return "Password is invalid";
  if (!isFullNameValid) return "Name is invalid";
  return null;
};
