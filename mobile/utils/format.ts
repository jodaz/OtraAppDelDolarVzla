/**
 * Formats a number to XXX,XXX.XX string
 */
export const formatNumber = (num: number | string | undefined): string => {
  if (num === undefined || num === '') return '';
  
  // If it's a string, try to parse it (handling both . and , as decimals if necessary)
  let val: number;
  if (typeof num === 'string') {
    // Replace comma with dot for standard parsing if needed
    const normalized = num.replace(',', '.');
    val = parseFloat(normalized);
  } else {
    val = num;
  }

  if (isNaN(val)) return '';

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
};

/**
 * Strips formatting (commas) from a string to get a clean numeric string for internal storage/processing
 */
export const cleanNumericString = (str: string): string => {
  return str.replace(/,/g, '');
};

/**
 * Formats an input string as the user types, maintaining cursor position logic
 * (Simple version for now: allows one dot and keeps numbers)
 */
export const formatInputDisplay = (text: string): string => {
  // Only allow numbers and one decimal point
  const cleaned = text.replace(/[^0-9.]/g, '');
  const parts = cleaned.split('.');
  
  if (parts.length > 2) {
    return parts[0] + '.' + parts.slice(1).join('');
  }
  
  return cleaned;
};
