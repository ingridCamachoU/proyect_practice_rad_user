import { useState } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {

    const initialForm ={
        "name": "",
        "email": "",
        "phone": "",
        "message": "",
    };

    const [formData, handleChange, handleReset, setFormData] = useForm (initialForm);

    const [errors, setErrors] = useState({});

    const onValidate = (formData)=>{
        let errors = {};
        let regexName = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){2,20}$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPhone = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜüs]){5,15}$/;
        let regexMessage = /^.{1,255}$/;

        if (!formData.name.trim()){
            errors.name= 'El campo "Nombre" no debe ser vacio.';
        }else if(!regexName.test(formData.name)){
            errors.name= 'El campo "Nombre" es incorrecto.';
        }

        if (!formData.email.trim()){
            errors.email= 'El campo "Email" no debe ser vacio.';
        }else if(!regexEmail.test(formData.email)){
            errors.email= 'El campo "Email" es incorrecto.';
        }

        if (!formData.phone.trim()){
            errors.phone= 'El campo "Celular" no debe ser vacio.';
        }else if(!regexPhone.test(formData.phone)){
            errors.phone= 'El campo "Celular" es incorrecto, no puede tener espacios en blanco y debe tener más de 5 caracteres';
        }

        if (!formData.message.trim()){
            errors.message= 'El campo "Mensaje" no debe ser vacio.';
        }else if(!regexMessage.test(formData.message)){
            errors.message= 'El campo "Mensaje" es incorrecto.';
        }
        return errors;
    };

    const err= onValidate(formData);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(err);      

        if (Object.keys(errors).length === 0){
            setFormData(initialForm);
            setErrors('');
            handleReset();
        }

    };

  return (
        <>
            <form className="form-Cont" onSubmit={handleSubmit}>
                <h2 className="text-blue">Escríbenos</h2>

                <div className="row">
                    <div className="col-6 ">
                        <input 
                        type="text" 
                        name="name" 
                        required
                        placeholder="Nombre" 
                        className="form-control" 
                        onChange={handleChange} 
                        value={formData.name}/>
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className="col-6 ">
                        <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="Email"
                        className="form-control" 
                        onChange={handleChange} 
                        value={formData.email}/>
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                </div>

                <input 
                type="number" 
                name="phone" 
                required
                placeholder="Número Celular" 
                className="form-control" 
                onChange={handleChange} 
                value={formData.phone}/>
                {errors.phone && <p className="text-danger">{errors.phone}</p>}

                <textarea 
                placeholder="Mensaje" 
                name="message" 
                required
                className="form-control" 
                onChange={handleChange} 
                value={formData.message}/>
                {errors.message && <p className="text-danger">{errors.message}</p>}

                <input type="submit"  value="Enviar" className=" btnEnviar"/>

            </form>
        </>
    );
}

export default Form;
