import { createContext } from "react";

const FormContext=createContext({
        serial:"",
        setSerial:()=>{},
        amount:"",
        setAmount:()=>{},
        date:"",
        setDate:()=>{},
        allDatas:[],
        etAllDatas:()=>{}
});
export default FormContext;