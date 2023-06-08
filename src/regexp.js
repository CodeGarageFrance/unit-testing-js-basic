// Function to check if a string contains only alphanumeric characters
function isAlphanumeric(input) {
    return /^[a-zA-Z0-9]+$/.test(input);
}
  
  // Function to validate an email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
// Function to extract all URLs from a text
function extractURLs(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex) || [];
}
  
module.exports = {
    isAlphanumeric,
    validateEmail,
    extractURLs
};