import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";



export const useForm = (initialForm, validateForm) => {
    const [datos, setDatos] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [editable, setEditable] = useState(true)


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

    const handleBlur2 = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
        axios.get("https://nodejs-restapi-test-mysql-production.up.railway.app/login/docentes/" + form.correo).then(response => {
            setDatos(response.data)
        })
        // axios.get("http://localhost:3001/login/docentes/" + form.correo).then(response => {
        //     setDatos(response.data)
        // })
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if (Object.keys(errors).length === 0) {
            if (datos.contra === form.contraseña) {
                window.location.href = "/dashboard"
                localStorage.setItem('token', 'true')
                localStorage.setItem('id', datos.id_docente)
            } else {
                Swal.fire({ icon: "error", title: "Datos incorrectos" })
            }
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
                method: 'POST', url: 'https://nodejs-restapi-test-mysql-production.up.railway.app/docentes', data: {
                    nombre: form.nombre,
                    usuario: form.usuario,
                    escuela: form.escuela,
                    correo: form.correo,
                    contra: form.contra
                }
                // method: 'POST', url: 'http://localhost:3001/docentes', data: {
                //     nombre: form.nombre,
                //     usuario: form.usuario,
                //     escuela: form.escuela,
                //     correo: form.correo,
                //     contra: form.contra
                // }
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
        if (!editable) {
            if (Object.keys(errors).length === 0) {
                setLoading(true);
                console.log(JSON.stringify(form))


                await axios({
                    method: 'PATCH', url: 'https://nodejs-restapi-test-mysql-production.up.railway.app/docentes/1038', data: {
                        nombre: form.nombre,
                        usuario: form.usuario,
                        escuela: form.escuela,
                        correo: form.correo,
                        contra: form.contra
                    }
                    // method: 'PATCH', url: 'http://localhost:3001/docentes/1038', data: {
                    //     nombre: form.nombre,
                    //     usuario: form.usuario,
                    //     escuela: form.escuela,
                    //     correo: form.correo,
                    //     contra: form.contra
                    // }
                })
                    .then(function (respuesta) {
                        console.log(respuesta.data);
                    }).catch(function (error) {
                        console.log("ERROR EN LA SOLICITUD", error)
                    })

                Swal.fire({ icon: "success", title: "Actualización exitosa", text: "Tus datos han sido guardados exitosamente" }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/dashboard"
                    }
                })
            } else {
                Swal.fire({ icon: "error", title: "Errores encontrados:", text: Object.values(errors) })
            }

        }




    };

    const handleSubmit3 = async (e) => {
        await axios({
            method: 'POST', url: 'https://nodejs-restapi-test-mysql-production.up.railway.app/alumnos', data: {
                id_docente: form.id_docente,
                nombre: form.nombre,
                tipo: form.tipo
            }
            // method: 'POST', url: 'http://localhost:3001/alumnos', data: {
            //     id_docente: form.id_docente,
            //     nombre: form.nombre,
            //     tipo: form.tipo
            // }
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
        handleBlur2,
        handleSubmit1,
        handleSubmit2,
        handleSubmit3,
        handleSubmitPatch
    };
};
