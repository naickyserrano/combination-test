import { createGlobalStyle } from 'styled-components';

/**
 * Add all global styling (css)
 */
export default createGlobalStyle`
    html, 
    body, 
    #__next {
        height: 100%;
        line-height: 1.5;
    }

    body {
        font-family: 'Barlow', sans-serif;
        font-size: 16px;
        margin: 0;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.gray};
        background: ${({ theme }) => theme.colors.white};
    }
`;
