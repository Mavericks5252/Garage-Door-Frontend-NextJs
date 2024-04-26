'use client'

import { extendTheme, } from '@chakra-ui/react'
import { Inter, } from 'next/font/google'

const interFont = Inter({ subsets: ['latin'] })

export const theme = extendTheme({
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
        '3xl': '120em',
        '4xl': '160em'
    },
    fonts: {
        body: interFont.style.fontFamily,
        heading: interFont.style.fontFamily,
    },
    semanticTokens: {
        colors: {
            brand: {
                blue: {
                    _light: '#0D449B',
                    _dark: '#072555'
                },
                bg: {
                    _light: 'linear-gradient(90deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%)',
                    _dark: 'linear-gradient(195deg, rgba(2, 0, 36, 1) 0%, rgba(4, 3, 21, 1) 27%, rgba(0, 212, 255, 1) 100%)'
                },
                backgroundHpage: {
                    _light: 'white',
                    _dark: '#121212'
                },
                navText: {
                    _light: '#17262A',
                    _dark: 'rgba(255, 255, 255, 0.87)'
                },
                navHhover: {
                    _light: 'gray.50',
                    _dark: 'rgba(30, 30, 30, 0.87)'
                },
                navButton: {
                    primary: {
                        _light: 'gray.100',
                        _dark: 'rgba(255, 255, 255, 0.16)'
                    },
                    hover: {
                        _light: 'gray.200',
                        _dark: 'rgba(255, 255, 255, 0.08)'
                    },
                    active: {
                        _light: 'rgba(0, 0, 0, 0.38)',
                        _dark: 'rgba(255, 255, 255, 0.3)'
                    }
                },
                modal: {
                    button: {
                        primary: {
                            _light: 'gray.100',
                            _dark: 'rgba(255, 255, 255, 0.16)'
                        },
                        hover: {
                            _light: 'gray.200',
                            _dark: 'rgba(255, 255, 255, 0.08)'
                        },
                        active: {
                            _light: 'rgba(0, 0, 0, 0.38)',
                            _dark: 'rgba(255, 255, 255, 0.3)'
                        }
                    },
                    background: {
                        _light: '#FFFFFF',
                        _dark: 'rgba(255, 255, 255, 0.12)'
                    }
                },
                fluid: {
                    bg: {
                        _light: '#FFFFFF',
                        _dark: 'rgba(0, 0, 0, 0.6)'
                    }
                },
                calendar: {
                    bg: {
                        _light: '#FFFFFF',
                        _dark: 'rgba(42, 42, 42,1)'
                    },
                    grid: {
                        active: {
                            _light: 'gray.200',
                            _dark: 'rgba(81,81,81,0.8)'
                        },
                        inactive: {
                            _light: 'gray.100',
                            _dark: 'rgba(81,81,81,0.5)'
                        },
                        selected: {
                            _light: 'black',
                            _dark: 'rgba(81,81,81,1)'
                        }
                    },
                    text: {
                        _light: 'gray.700',
                        _dark: 'rgba(255,255,255, 0.87)'
                    },
                    componentbg: {
                        _light: 'white',
                        _dark: 'rgba(18,18,18, 0.2)'
                    },
                    unavaliableStripe: {
                        _light: 'linear(to-tr, #FF0000 calc(50% - 3px), #aaa, #FF0000 calc(50% + 3px))',
                        _dark: 'linear(to-tr, #FF0000 calc(50% - 3px), #aaa, #FF0000 calc(50% + 3px))'
                    }
                },
                table: { stripe: 'rgba(18,18,18, 0.2)' },
                nav: {
                    mediumHover: {
                        _light: 'gray.200',
                        _dark: 'rgba(255, 255, 255, 0.67)'
                    }
                },
                datefield: {
                    _light: 'gray.700',
                    _dark: 'white'
                },
                paleBlue: {
                    _light: '#f4f7f6',
                    _dark: '#0b0809'
                },
                lightBlue: {
                    _light: '#1467EB',
                    _dark: '#093375'
                },
                darkblue: {
                    _light: '#0D449B',
                    _dark: '#06214d'
                },
                red: {
                    _light: 'red.500',
                    _dark: 'red.500'
                },
                stripe: {
                    _light: 'linear(to-tr, #FF0000 calc(50% - 3px), #aaa, #FF0000 calc(50% + 3px))',
                    _dark: 'linear(to-tr, #FF0000 calc(50% - 3px), #aaa, #FF0000 calc(50% + 3px))'
                },
                'blue.200': '#1467eb',
                'blue.300': '#0d449b',
                'blue.400': '#0c3e8c',

                paleGreen: '#7ace58',
                green: '#41BA11',

                paleYellow: '#f5f385',
                yellow: '#efeb35',

                red1: '#ef3b35',

                orange: {
                    _light: '#ef7b35',
                    _dark: '#86390a'
                },
                'orange.300': {
                    _light: '#ef7b35',
                    _dark: '#86390a'
                },
                'orange.400': '#cd6a2e',
                'orange.500': '#d77730',

                dashboardTan: '#F7EFDB',
                tan: '#F7EFDB',
                darkTan: '#F5ECD3',

                gray: '#4c4c4c',
                lightgray: '#6c6c6c'
            }
        }
    },
    components: {
        Button: {
            baseStyle: {
                bg: 'brand.navButton.primary',
                fontWeight: 400,
                _hover: {
                    bg: 'brand.navButton.hover',
                    shadow: 'sm'
                },
                _active: { bg: 'brand.navButton.active' }
            },
            sizes: {
                lg: { fontSize: 'md' },
                md: {
                    fontSize: 'sm',
                    px: 6,
                },
                sm: { fontSize: 'sm' }
            },
            variants: {
                accent: {
                    bg: 'brand.orange.300',
                    color: 'white',
                    _hover: { bg: 'brand.orange.400' },
                    _active: { bg: 'brand.orange.500' }
                },
                accentOutline: {
                    bg: 'white',
                    border: 'solid 1px',
                    borderColor: 'brand.orange.300',
                    color: 'brand.orange.300',
                    _hover: {
                        bg: 'brand.orange.400',
                        borderColor: 'brand.orange.400',
                        color: 'white'
                    },
                    _active: {
                        bg: 'brand.orange.500',
                        borderColor: 'brand.orange.500',
                        color: 'white'
                    }
                },
                modal: {
                    bg: 'brand.modal.button.primary',

                    _hover: { bg: 'brand.modal.button.hover' },
                    _active: { bg: 'brand.modal.button.active' }
                },
                brand: {
                    bg: 'brand.blue.200',
                    color: 'white',
                    _hover: { bg: 'brand.blue.300' },
                    _active: { bg: 'brand.blue.400' }
                },
                brandOutline: {
                    bg: 'white',
                    border: 'solid 1px',
                    borderColor: 'brand.blue.200',
                    color: 'brand.blue.200',
                    _hover: {
                        bg: 'brand.blue.300',
                        borderColor: 'brand.blue.300',
                        color: 'white'
                    },
                    _active: {
                        bg: 'brand.blue.400',
                        borderColor: 'brand.blue.400',
                        color: 'white'
                    }
                },
                ghost: {
                    bg: 'none',
                    _hover: { bg: 'gray.100' }
                },
                link: { bg: 'none' }
            }
        },
        FormLabel: {
            baseStyle: {
                fontSize: 'sm',
                fontWeight: 400,
            },
        },
        Heading: {
            baseStyle: { fontWeight: 400, },
            sizes: {
                '3xl': { fontSize: 42, },
                '2xl': { fontSize: 36, },
                xl: { fontSize: 30, },
                lg: { fontSize: 26, },
                md: { fontSize: 24, },
                sm: { fontSize: 22, },
                xs: { fontSize: 20, },
            },
            variants: {
                bold: { fontWeight: 600, },
                semiBold: { fontWeight: 500, },
            },
        },
        IconButton: {
            baseStyle: {
                bg: 'brand.navButton.primary',
                fontWeight: 400,
                _hover: {
                    bg: 'brand.navButton.hover',
                    shadow: 'sm'
                },
                _active: { bg: 'brand.navButton.active' }
            },
            sizes: {
                lg: { fontSize: 'md' },
                md: {
                    fontSize: 'sm',
                    px: 6,
                },
                sm: { fontSize: 'sm' }
            },
            variants: {
                accent: {
                    bg: 'brand.orange.300',
                    color: 'white',
                    _hover: { bg: 'brand.orange.400' },
                    _active: { bg: 'brand.orange.500' }
                },
                accentOutline: {
                    bg: 'white',
                    border: 'solid 1px',
                    borderColor: 'brand.orange.300',
                    color: 'brand.orange.300',
                    _hover: {
                        bg: 'brand.orange.400',
                        borderColor: 'brand.orange.400',
                        color: 'white'
                    },
                    _active: {
                        bg: 'brand.orange.500',
                        borderColor: 'brand.orange.500',
                        color: 'white'
                    }
                },
                modal: {
                    bg: 'brand.modal.button.primary',

                    _hover: { bg: 'brand.modal.button.hover' },
                    _active: { bg: 'brand.modal.button.active' }
                },
                brand: {
                    bg: 'brand.blue.200',
                    color: 'white',
                    _hover: { bg: 'brand.blue.300' },
                    _active: { bg: 'brand.blue.400' }
                },
                brandOutline: {
                    bg: 'white',
                    border: 'solid 1px',
                    borderColor: 'brand.blue.200',
                    color: 'brand.blue.200',
                    _hover: {
                        bg: 'brand.blue.300',
                        borderColor: 'brand.blue.300',
                        color: 'white'
                    },
                    _active: {
                        bg: 'brand.blue.400',
                        borderColor: 'brand.blue.400',
                        color: 'white'
                    }
                },
                ghost: {
                    bg: 'none',
                    _hover: { bg: 'gray.100' }
                },
                link: { bg: 'none' }
            }
        },
        TabPanel: {
            baseStyle: {
                bg: 'red',
                px: 0,
            },
        },
        VStack: {
            sizes: {
                lg: { spacing: 12, },
                md: { spacing: 8, },
                sm: { spacing: 2, },
            },
        },
        Table: {
            variants: {
                striped: {
                    tbody: {
                        tr: {
                            '&:nth-of-type(odd)': {
                                'th, td': {
                                    borderBottomWidth: '1px',
                                    borderColor: 'white'
                                },
                                td: { background: 'brand.table.stripe' }
                            }
                        }
                    }
                }
            }
        }
    }
})

export default theme
