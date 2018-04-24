export default function sanitizeEmail(email) {
  // Change '1' to something else and see if the new string shows up when typing in the text input
  return email + '1';
}
