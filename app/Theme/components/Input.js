const Input = {
    variants: {
        outline: ({ colorScheme }) => ({
            addon: {
                fontSize: 'xs',
                bg: `${colorScheme}.50`,
                color: `${colorScheme}.500`,
                borderColor: `${colorScheme}.25`

            },
            field: {
                borderColor: `${colorScheme}.25`,
                bg: 'white',
                fontSize: "sm",
                borderWidth: '1px',
                _hover: {
                    borderColor: `${colorScheme}.500`,
                    boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`
                },
                _focus: {
                    borderColor: `${colorScheme}.500`,
                    boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`
                },
                _active: {
                    borderColor: `${colorScheme}.500`,
                    boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`
                }
            }
        })
    },
    defaultProps: {
        colorScheme: 'blue',
        variant: "outline"
    }
}

export default Input


