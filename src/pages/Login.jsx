import { useState } from "react";


const Login = () => {
    const [mail, SetMail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState(false);
    const [errorPass, SetErrorPass] = useState(false);


    const validarDatos = (e) => {
        e.preventDefault()
        if ( !mail.trim() || !password.trim()) {
            SetError(true);
            return;
        }
        SetError(false);
        if (password.length < 6) {
            SetErrorPass(true);
        } else {
            alert("Éxito, todos los datos son correctos!")
        };
        SetMail('');
        SetPassword('');
    }
    return (
        <>
            <form className="formulario" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', height:'71vh'}} action="" onSubmit={validarDatos}>
            {error ? <p className="error">Todos los campos son obligatiorios</p> : null}
                <div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vw', marginBottom: '20px', fontSize: '16px'}}>
                    <label>Email</label>
                    <input className="" type="email" name="mail" onChange={(e) => SetMail(e.target.value)} value={mail} placeholder="Ingresa tu e-mail"/>
                </div>
                <div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vw', marginBottom: '20px', fontSize: '16px'}}>
                {errorPass ? <p className="error">Contraseña debe contener 6 carácteres como mínimo</p> : null}
                    <label>Contraseña</label>
                    <input className="" type="password" name="password" onChange={(e) => SetPassword(e.target.value)} value={password} placeholder="Ingresa tu contraseña"/>
                </div>
                <button className="" style={{margin:'10px', fontSize: '16px'}} type="submit">Enviar</button>
            </form>        
        </>
    )
}

export default Login;
