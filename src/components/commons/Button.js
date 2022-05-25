import styled from 'styled-components';

const accentColor = 'rgb(29,  161, 242)';

export const Button = styled.button`
    align-items: center;
    background-color: ${props =>{
        if(props.variant === 'primary') {
            return accentColor
        }
        else if(props.variant === 'header-icons'){
            return 'transparent'
        }
        else {
            return 'white'
        }  
    }};
    border-radius: 10px;
    border: ${props => {
        if(props.variant === 'header-icons') {
            return;
        } else {
            return `1px solid ${accentColor}`;
        }
    }};
    color: ${props => (props.variant === 'primary' ? 'white' : accentColor)};
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: bold;
    max-height: ${props =>{
        if(props.variant === 'header-icons') {
            return '16px';
        }
    }};
    max-width: ${props =>{
        if(props.variant === 'header-icons') {
            return '20px';
        }
    }};
    min-height: ${props =>{
        if(props.variant === 'header-icons') {
            return '16px';
        } else {
            return '36px'
        }
    }};
    min-width: ${props =>{
        if(props.variant === 'header-icons') {
            return '20px';
        } else {
            return '72px'
        }
    }};
    justify-content: center;
    outline-style: none;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    padding: ${props =>{
        if(props.variant === 'header-icons') {
            return '0 2px';
        }
        else{
            return '0 30px';
        }
    }};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
    text-decoration: none;
    transition: background-color 0.2s;
&:hover {
    background-color: ${props =>{
        if(props.variant === 'header-icons'){
            return;
        }
        else if(props.variant === 'primary'){
            return 'rgb(26, 145, 218)'
        }
        else {
            return 'rgba(29, 161, 242, 0.1)';
        }
    }
}
`;