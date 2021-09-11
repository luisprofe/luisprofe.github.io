import React, {useState} from "react";
import { useLocation } from "react-router";
import queryString from "query-string";

export default (props) => {
    const { search } = useLocation();
    const { id } = queryString.parse(search);

    const [arduinoId, setArduinoId ] = useState(id);
    const [student, setStudent ] = useState("");
    const [group, setGroup ] = useState("");
    const [sent, setSent ] = useState("");



    const handleSubmit = (e) => {
        setSent(true)
        e.preventDefault();
        const data = { arduinoId, student, group };

        fetch("https://nelson.free.beeceptor.com", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            setSent(true)
        })
    }
  
  return(
    <>
        {id && <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3 text-white">Registro de Arduino</h1>
            <p className="col-lg-10 fs-4">Por favor, registra el Arduino que utilizarás hoy para realizar la/-s práctica/-s.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form id="registerForm" className="needs-validation p-4 p-md-5 border rounded-3 bg-dark" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input value={arduinoId} onChange={(e) => setArduinoId(e.target.value)} className="form-control" name="arduinoId" id="arduinoId" type="text" placeholder="Readonly input here…" readOnly></input>
                    <label id="arduinoId">Arduino</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} className="form-control" id="nameAndSurname" name="nameAndSurname" placeholder="Luis Juarros" required></input>
                    <label>Nombre y Apellidos</label>
                </div>

                
              
                <div className="form-floating mb-3 text-start">
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="group" className="custom-control-input" onChange={(e) => setGroup("RoboticaI")}></input>
                        <label className="custom-control-label">Robótica I</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="group" className="custom-control-input" onChange={(e) => setGroup("RoboticaII")}></input>
                        <label className="custom-control-label">Robótica II</label>
                    </div>
                </div>

              <button id="registerButton" className="w-100 btn btn-lg btn-warning" type="submit" >Registrar</button>
            </form>
          </div>
          <hr className="my-4"></hr>
              <small className="text-muted">Happy Coding 👾</small>
        </div>
    </div>
      }
      {!id && <div>¿Qué buscas aquí pequeño hacker?<br/>Aquí no hay nada que te pueda interesar<br/>💀 💀 💀</div>}
      {id && sent && <div class="alert alert-dark" role="alert">Arduino registrado 👍</div>}
        

    </>
  )
}