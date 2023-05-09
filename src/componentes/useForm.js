import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { helpHttp } from "../helpers/helpHttp";



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
            Swal.fire({ icon: "error", title: "Errores encontrados:", text: Object.values(errors) })
        }
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        const datos = {
            id: 122,
            nombre: "Pineda",
            usuario: "gonzalito3000",
            escuela: "ENUFC",
            correo: "gonzalito@gmail.com",
            contra: "gonzalito123"
        }

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            console.log(JSON.stringify(form))

            await axios({method:'POST', url:'https://nodejs-restapi-test-mysql-production.up.railway.app/docentes', data: {
                nombre: form.nombre,
                usuario: form.usuario,
                escuela:form.escuela,
                correo:form.correo,
                contra:form.contra
            }})
            .then(function(respuesta){
                console.log(respuesta.data);
            }).catch(function(error){
                console.log("ERROR EN LA SOLICITUD",error)
            })

            // try {
            //     console.log(JSON.stringify(form))

            //     let res = await axios.post("http://localhost:3001/docentes",{
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify({form
            //         })
            // })

            //     console.log("RESPUESTA DEL API= " + res.json)
            // } catch (error) {
            //     console.log("ERROR EN EL CATCH= " + error)
            // }


            Swal.fire({ icon: "success", title: "Registro exitoso", text: "Ya puedes iniciar sesión" }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/inicio"
                }
            })
        } else {
            Swal.fire({ icon: "error", title: "Errores encontrados:", text: Object.values(errors) })
        }
    };

    const handleSubmit3 = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            Swal.fire({ icon: "success", title: "Datos guardados exitosamente" }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/dashboard"
                }
            })
        } else {
            Swal.fire({ icon: "error", title: "Ocurrio un error en los campos:", text: Object.values(errors) })
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
        handleSubmit2,
        handleSubmit3
    };
};
