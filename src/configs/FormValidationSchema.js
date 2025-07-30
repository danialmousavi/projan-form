import * as Yup from 'yup';
const FormValidationSchema = Yup.object().shape({
    serial: Yup.string()
        .required('سریال الزامی است')
        .matches(/^[0-9]+$/, 'سریال باید فقط شامل اعداد باشد')
        .min(5, 'سریال باید حداقل ۵ رقم باشد')  
        .max(10, 'سریال باید حداکثر ۱۰ رقم باشد'),

    amount: Yup.number()
        .required('مبلغ الزامی است')    
        .positive('مبلغ باید یک عدد مثبت باشد'),
    date: Yup.date()
        .required('تاریخ الزامی است')
});
export default FormValidationSchema;