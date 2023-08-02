import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({setNombrePersonaje}) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre:'',
    });

    const {nombre} = inputs;

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nombre);

        if (!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba un personaje por favor',
                icon: 'error',
              });
        };
       
        setNombrePersonaje(nombre.trim().toLowerCase());
        reset();
    };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="form-control mb-2" placeholder="Ingrese personaje" name="nombre" onChange={handleChange} value={nombre} />
      <button type="submit"className="btn btn-dark">Enviar</button>
    </form>
  );
}

export default Formulario;

 