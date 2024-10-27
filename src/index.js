module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    const numbers = [
      'zero', 'one', 'two', 'three', 'four', 
      'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 
      'fourteen', 'fifteen', 'sixteen', 'seventeen', 
      'eighteen', 'nineteen'
    ];
  
    const tens = [
      '', '', 'twenty', 'thirty', 'forty', 
      'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    
    let result = '';
  
    // Handle hundreds
    if (hundreds > 0) {
      result += numbers[hundreds] + ' hundred';
    }
  
    
    if (remainder > 0) {
      if (result) result += ' '; 
      if (remainder < 20) {
        result += numbers[remainder];
      } else {
        const tensPlace = Math.floor(remainder / 10);
        const unitsPlace = remainder % 10;
        result += tens[tensPlace];
        if (unitsPlace > 0) {
          result += ' ' + numbers[unitsPlace];
        }
      }
    }
  
    return result.trim(); 
}
