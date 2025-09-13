/**Fonts */
// Dayong: added Playfair Display and Abril Fatface
export const fonts = {
  OTR: "'OTR', sans-serif",
  WorkSans: "'Work Sans', sans-serif",
  Playfair: "'Playfair Display', serif", 
  Abril: "'Abril Fatface', serif",
}

/**Colors */
export const colors = {
  primary: '#212121',
  secondary: '#dddddd',
  projectTag: '#7A97DD',
  success: '#5bf698',
  error: '#f84141',
  name: '#b7891cff',
}

/**Font Size */
export const fontSize = {
  xxs: '.6em',
  xs: '.8em',
  s: '.9em',
  md: '1em',
  lg: '1.25em',
  xl: '1.5em',
  xxl: '2em',
  xxxl: '2.5em',
}

export const bigLetters = {
  xxxs: '2.5em',
  xxs: '3em',
  xs: '4em',
  s: '5em',
  md: '6em',
  lg: '7em',
  xl: '8em',
  xxl: '9em',
  xxxl: '10em',
}

//Device size
export const deviceSize = {
  phone: '576px',
  tablet: '768px',
  desktop: '992px',
  ldesktop: '1200px',
  lgdesktop: '1400px',
}

export const mediaSize = {
  under: `(max-width: 400px)`,
  phone: `(max-width: ${deviceSize.phone})`,
  table: `(max-width: ${deviceSize.tablet})`,
  desktop: `(max-width: ${deviceSize.desktop})`,
  ldesktop: `(max-width: ${deviceSize.ldesktop})`,
  lgdesktop: `(max-width: ${deviceSize.lgdesktop})`,
}
