import React from 'react';
import style from './FormControl.module.css'

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            {props.children}
            </div>
            {hasError &&<span className={style.errorMessage}>{meta.error}</span>}
        </div>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
};
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
};