const Menu = {
  baseStyle: ({ colorScheme }) => ({
    list: {
      py: "0",
      px: "3",
      maxHeight: '17rem',
      overflowX: 'scroll',
      borderColor: 'gray.100'
    },
    item: {
      fontSize: "sm",
      color: 'gray.800',
      borderRadius: 'md',
      _hover: { bg: `${colorScheme}.400`, color: `white` },
      _active: { bg: `${colorScheme}.400`, color: `white` },
      _focus: { bg: `${colorScheme}.400`, color: `white` },
      _first: { mt: "3" },
      _last: { mb: "3" }
    },
    groupTitle: {
      _first: { mt: "3" },
      mx: "3",
      color: `${colorScheme}.500`
    }
  }),
  defaultProps: {
    colorScheme: "blue",
  }
}

export default Menu