import style from "./formInput.module.scss";

function FormInput({label,type = "text", name}){
    return <input className = {style} label = {label} type = {type} name={name} />
}

export default FormInput