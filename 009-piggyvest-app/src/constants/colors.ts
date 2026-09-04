export const colors = {
  background: '#151419',
  backgroundElevated: '#1D1C22',
  card: '#1F1E25',

  textPrimary: '#FFFFFF',
  textSecondary: '#A6A5AD',
  textMuted: '#7C7B84',

  blue: '#1E3FE0',
  blueDark: '#152EB0',
  blueLight: '#3E6BFF',

  purple: '#7B2FF7',
  purpleLight: '#B98CFF',

  orange: '#FF7A1A',
  orangeLight: '#FFB020',

  pink: '#FF3D8F',
  pinkMuted: 'rgba(255, 61, 143, 0.12)',

  green: '#1FAA59',
  greenLight: '#33D375',

  red: '#E14C4C',

  gold: '#F5B942',

  teal: '#0F3D3E',
  tealBorder: '#2FB4C9',

  navyBorder: '#3348D6',
  navy: '#12173B',

  border: '#2B2A33',
  divider: '#28272E',

  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(0,0,0,0.4)',
} as const;

export type AppColors = typeof colors;
