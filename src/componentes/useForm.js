import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useFetch } from "./useFetch";



export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [editable, setEditable] = useState(true)

    const { data } = useFetch

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

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            console.log(JSON.stringify(form))


            await axios({
                method: 'POST', url: 'http://localhost:3001/docentes', data: {

                    //OCUPEN ESTE PARA LA API *avisar para que se active*
                    // await axios({method:'POST', url:'https://nodejs-restapi-test-mysql-production.up.railway.app/docentes', data: {
                    nombre: form.nombre,
                    usuario: form.usuario,
                    escuela: form.escuela,
                    correo: form.correo,
                    contra: form.contra
                }
            })
                .then(function (respuesta) {
                    console.log(respuesta.data);
                }).catch(function (error) {
                    console.log("ERROR EN LA SOLICITUD", error)
                })

            Swal.fire({ icon: "success", title: "Registro exitoso", text: "Ya puedes iniciar sesión" }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/inicio"
                }
            })
        } else {
            Swal.fire({ icon: "error", title: "Errores encontrados:", text: Object.values(errors) })
        }
    };


    const handleSubmitPatch = async (e) => {
        e.preventDefault();

        setEditable(!editable)

        setErrors(validateForm(form));
    };

    const handleSubmit3 = async (e) => {
        await axios({
            method: 'POST', url: 'http://localhost:3001/alumnos', data: {

                //OCUPEN ESTE PARA LA API *avisar para que se active*
                // await axios({method:'POST', url:'https://nodejs-restapi-test-mysql-production.up.railway.app/alumnos', data: {
                id_docente: form.id_docente,
                nombre: form.nombre,
                tipo: form.tipo
            }
        })
            .then(function (respuesta) {
                console.log(respuesta.data);
            }).catch(function (error) {
                console.log("ERROR EN LA SOLICITUD", error)
            })

    };


    return {
        form,
        errors,
        loading,
        response,
        editable,
        handleChange,
        handleBlur,
        handleSubmit1,
        handleSubmit2,
        handleSubmit3,
        handleSubmitPatch
    };
};
