/**
 * Return the initials in 2 letters from a full name.
 *
 * @param name
 */

export const getInitials = (name) => {
  if (!name) {
    return ""
  }
  const fullInitials = name
    .split(" ")
    .map(([firstLetter]) => firstLetter.toUpperCase())
    .join("")

  const [firstInitial, , lastInitial] = fullInitials
  return fullInitials.length > 2 ? firstInitial + lastInitial : fullInitials
}

/**
 * Return the random color based on string.
 * 
 * Read more about this function: https://gist.github.com/0x263b/2bdd90886c2036a1ad5bcf06d6e6fb37
 * @param str
 */

export const generateRandomColor = (str) =>  {
	let colors = ["#e51c23", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#5677fc", "#03a9f4", "#00bcd4", "#009688", "#259b24", "#8bc34a", "#afb42b", "#ff9800", "#ff5722", "#795548", "#607d8b"]
  let hash = 0;
  
	if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    hash = ((hash % colors.length) + colors.length) % colors.length;
    return colors[hash];
}


/**
 * Return the contrast color based on given color.
 * 
 * Read more about this function: https://gomakethings.com/dynamically-changing-the-text-color-based-on-background-color-contrast-with-vanilla-js/
 * @param hexcolor
 */

export const getContrast = (hexcolor) => {
	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	let r = parseInt(hexcolor.substr(0,2),16);
	let g = parseInt(hexcolor.substr(2,2),16);
	let b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};