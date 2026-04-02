// src/lib/validators.js — Plain JS validation helpers (no Zod dep required)

/**
 * Validates the contact form values.
 * @param {Record<string, string>} values
 * @returns {Record<string, string>} errors (empty = valid)
 */
export function validateContactForm(values) {
  const errors = {};

  if (!values.firstName?.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!values.email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message?.trim()) {
    errors.message = "Please tell us about your project.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}
