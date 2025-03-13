import {ToastContainer, ToastText} from  './ProductContext'

function Toast(bg,text) {
    return 
    <ToastContainer bg={bg}>
        <ToastText>{text}</ToastText>
    </ToastContainer>
}
export default Toast