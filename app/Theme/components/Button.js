const Button = {
  baseStyle: {
    fontWeight: "400",
  },
  sizes: {
    xs: {
      h: 7,
      px: 3
    },
    sm: {
      h: 8,
      pt: "0.1rem",
      fontSize: '0.8rem',
    },
    md: {
      fontSize: 'sm'
    }
  },
  variants: {
    inverse: ({ colorScheme }) => ({
      bg: `${colorScheme}.100`,
      color: `${colorScheme}.500`,
      _hover: { bg: `${colorScheme}.200` },
      _focus: { bg: `${colorScheme}.200` },
      _active: { bg: `${colorScheme}.200` }
    }),
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.400`,
      color: 'white',
      _hover: { bg: `${colorScheme}.300` },
      _focus: { bg: `${colorScheme}.300` },
      _active: { bg: `${colorScheme}.300` }
    }),
    outline: ({ colorScheme }) => ({
      fontWeight: "400",
      color: `${colorScheme}.500`,
      _hover: { bg: `${colorScheme}.50` },
      _active: { bg: `${colorScheme}.50` },
      _focus: { bg: `${colorScheme}.50` }
    }),
    brand: ({ }) => ({
      color: 'blue.400',
      fontWeight: '600',
      letterSpacing: 0.5,
      fontSize: 'xs',
      borderRadius: 'lg',
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'uppercase',
      backgroundColor: '#35d0b8',
      backgroundImage: 'linear-gradient(114deg, #35d0b8, #0dc1ee)',
      _hover: {
        backgroundImage: 'linear-gradient(20deg, #0dc1ee, #35d0b8)'
      },
      _focus: {
        backgroundImage: 'linear-gradient(20deg, #0dc1ee, #35d0b8)'
      },
      _active: {
        backgroundImage: 'linear-gradient(20deg, #0dc1ee, #35d0b8)'
      }
    })
  },
  defaultProps: {
    colorScheme: 'gray'
  }
}

export default Button;