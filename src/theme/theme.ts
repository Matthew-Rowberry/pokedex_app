const theme = {
    borderRadius: '10px;'
};

export const dark = {
    ...theme,
    colors: {
        background: {
            primary: '#1e1a24',
            secondary: '#7e3de0',
            tertiary: '#601cc7'
        },
        foreground: {
            onBackground: '#FFF',
            onSurface: '#222'
        },
        icon: '#FFF',
        borderColor: '#601cc7'
    },
};

export const light = {
    ...theme,
    colors: {
        background: {
            primary: '#FFF',
            secondary: '#7e3de0',
            tertiary: '#601cc7'
        },
        foreground: {
            onBackground: '#000',
            onSurface: '#222'
        },
        icon: '#000',
        borderColor: '#601cc7'
    },
};