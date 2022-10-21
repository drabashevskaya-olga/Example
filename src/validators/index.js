const regex = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

const specials = "!@#$%^&*()_+{}|:\"<>?[]\\;',./`~";
const space = " ";

export const is_empty = (email, password, name) => {
  // check if  one  of  the fields is empty
  if (isEmpty(email) || isEmpty(password) || isEmpty(name)) {
    return "Please fill in the fields to continue";
  }

  return false; // means the email IS valid
};

export const is_invalid_email = (email) => {
  // check if is a valid email using regex
  if (!regex.email.test(email)) {
    return "Please enter a valid email address";
  }

  return false; // means the email IS valid
};

export const is_invalid_password = (password, specify = {}) => {
  specify.min = specify.min ?? 6; // default minimum length is 8
  specify.max = specify.max ?? 20; // default maximum length is 20
  specify.capitals = specify.capitals ?? 0;
  specify.numbers = specify.numbers ?? 0;
  specify.specials = specify.specials ?? 0;

  // check if password is bettwen specify.min & specify.max
  if (!isBetween(specify.min, len(password), specify.max)) {
    return `Your password must be at least 6 characters long`;
  }

  return false; // means the password IS valid
};

export const is_invalid_name = (name, specify = {}) => {
  specify.min = specify.min ?? 5; // default minimum length is 2
  specify.max = specify.max ?? 20; // default maximum length is 20

  // check if name is bettwen specify.min to specify.max
  if (!isBetween(specify.min, len(name), specify.max)) {
    return `Name must be between ${specify.min} to ${specify.max} characters long`;
  }

  // check if name is two or more words
  if (!name.includes(space)) {
    return "Please enter your full name";
  }

  return false; // means the name IS valid
};

export const is_invalid_card_number = (card_number) => {
  // check if card number is empty
  if (isEmpty(card_number)) {
    return "Card number is required";
  }

  // check if card number is between 13 to 16 digits
  if (!isBetween(9, len(card_number), 19)) {
    return "Card number is invalid";
  }
  return false; // means the card number IS valid
};

export const is_invalid_cvc = (cvc) => {
  // check if cvc is empty
  if (isEmpty(cvc)) {
    return "CVC is required";
  }

  // check if cvc is between 3 to 4 digits
  if (!isBetween(3, len(cvc), 4)) {
    return "CVC is invalid";
  }
  return false; // means the cvc IS valid
};

export const is_invalid_expiry = (expiry) => {
  // check if expiry is empty
  if (isEmpty(expiry)) {
    return "Expiry is required";
  }

  if (len(expiry) !== 7) {
    return "Expiry is invalid";
  }

  if (!expiry.includes("/")) {
    return "Expiry is invalid";
  }

  const [month, year] = expiry.split("/");
  if (!Number(month) || !Number(year)) {
    return "Expiry is invalid";
  }

  if (month < 1 || month > 12) {
    return "Expiry is invalid";
  }

  const crrYear = new Date().getFullYear();
  if (year < crrYear || year > crrYear + 6) {
    return "Expiry is invalid";
  }

  return false; // means the expiry IS valid
};

export const isEmpty = (val) => !len(val);
export const len = (val) => (!val ? 0 : val.length);
export const isBetween = (min, num, max) => min <= num && num <= max;

export const generate_errors = (...errors) =>
  errors.filter((err) => (err ? err : null));
