import { useState } from "react";
import Swal from "sweetalert2";

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            window.location.href = "/dashboard"
            //setForm(initialForm)
        } else {
            Swal.fire({ icon: "error", title: "Campos incorrectos", text:Object.values(errors)})
        }
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            Swal.fire({ icon: "success", title: "Registro exitoso", text:"Ya puedes iniciar sesión"}).then((result)=>{if (result.isConfirmed) {
                window.location.href = "/inicio"
              }})
        } else {
            Swal.fire({ icon: "error", title: "Campos incorrectos", text:Object.values(errors)})
        }
    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit1,
        handleSubmit2
    };
};
