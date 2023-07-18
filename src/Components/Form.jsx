
const Form = () => {
  return (
        <>
            <form className="form-Cont">
                <h2 className="text-blue">Escríbenos</h2>

                <div className="row">
                    <div className="col-6 ">
                        <input type="text" name="" placeholder="Nombre" className="form-control" />
                    </div>
                    <div className="col-6 ">
                        <input type="email" name="" placeholder="Email" className="form-control" />
                    </div>
                </div>

                <input type="number" name="" placeholder="Número Celular" className="form-control" />

                <textarea placeholder="Mensaje" className="form-control" />

                <input type="submit"  value="Enviar" className=" btnEnviar"/>


            </form>
        </>
    );
}

export default Form;
