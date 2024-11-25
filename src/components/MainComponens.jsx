const ButtonComponent = function (text){
 return(
     <button className = {`${text.style} ${text.textColor} ${text.buttonSize}`} >{text.value}</button>
 )
 
}
export default ButtonComponent