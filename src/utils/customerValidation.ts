// Customer name input restriction - only letters and spaces
export const handleCustomerNameRestriction = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', ' '];
  
  // Allow letters (a-z, A-Z) and control keys
  if (!/[a-zA-Z]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};

// Phone number input restriction - only digits
export const handlePhoneRestriction = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
  
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};

// Validate customer name on paste
export const handleCustomerNamePaste = (e: React.ClipboardEvent<HTMLInputElement>, setValue: (value: string) => void) => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData('text');
  // Remove non-alphabetic characters except spaces and limit to 10 characters
  const sanitized = pastedText.replace(/[^a-zA-Z\s]/g, '').substring(0, 10);
  setValue(sanitized);
};

// Validate phone number on paste
export const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>, setValue: (value: string) => void) => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData('text');
  // Remove non-numeric characters and limit to 10 digits
  const sanitized = pastedText.replace(/[^0-9]/g, '').substring(0, 10);
  setValue(sanitized);
};