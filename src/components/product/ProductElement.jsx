
import styled, {keyframes} from 'styled-components';


 const fadeIn = keyframes`
0%{
    transform: translate(100%);
    opacity: 0,;
}
    100%{
    transform: translate(0);
    opacity: 1,;
}
`
export const ToastContainer = styled.div`
position:fixed;
right: 20px;
top: 20px
padding: 10px 12px; 
background: ${props=>props.bg};
border-radius: 10px;
animation: ${fadeIn} 0.5s ease-in;
`;
export const ToastText = styled.div`
color:#fff;
`;
