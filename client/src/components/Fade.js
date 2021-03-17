import styled  from 'styled-components'
const Fade = styled.div`
 margin: 0;
 padding: 0;
 visibility   : ${props => props.hide ? 'hidden' : 'show'};
 display   : ${props => props.hide ? 'none' : ''};
 animation: ${props => props.hide ? 'none' : 'fadeIn'} .3s linear;
height: ${props => props.hide ? '0' : '100%'};
 transition: visibility ${props => props.hide ? '0' : '.3s'}; linear, 
            height ${props => props.hide ? '0' : '.3s'};  linear;
            display ${props => props.hide ? '0' : '.3s'};  linear;
`;
export default Fade