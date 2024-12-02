import { useState } from "react";


const Register = () => {
    const [mail, SetMail] = useState("");
    const [password, SetPassword] = useState("");
    const [repassword, SetRepassword] = useState("");
    const [error, SetError] = useState(false);
    const [errorPass, SetErrorPass] = useState(false);
    const [errorRePass, SetErrorRePass] = useState(false);


    const validarDatos = (e) => {
        e.preventDefault()
        if ( !mail.trim() || !password.trim() || !repassword.trim()) {
            SetError(true);
            return;
        }
        SetError(false);
        if (password.length < 6) {
            SetErrorPass(true);
            return;
        }
        SetErrorPass(false);
        if (password != repassword) {
            SetErrorRePass(true)
        } else {
            alert("Éxito, todos los datos son correctos!")
        };


        SetErrorRePass(false);
        SetMail('');
        SetPassword('');
        SetRepassword('');
    }
    
    return (
        <>
            <form className="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', height:'71vh'}} action="" onSubmit={validarDatos}>
            {error ? <p className="error">Todos los campos son obligatiorios</p> : null}
                <div className="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginBottom: '20px'}}>
                    <label style={{fontSize: '16px'}}>Email</label>
                    <input className="" style={{marginLeft: '10px', fontSize: '16px'}} type="email" name="mail" onChange={(e) => SetMail(e.target.value)} value={mail} placeholder="Ingresa tu e-mail"/>
                </div>
                <div className="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginBottom: '20px'}}>
                {errorPass ? <p className="error">Contraseña debe contener 6 carácteres como mínimo</p> : null}
                    <label style={{fontSize: '16px'}}>Contraseña</label>
                    <input className="" style={{marginLeft: '10px', fontSize: '16px'}} type="password" name="password" onChange={(e) => SetPassword(e.target.value)} value={password} placeholder="Ingresa tu contraseña"/>
                </div>
                <div className="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginBottom: '20px'}}>
                {errorRePass ? <p className="error">Contraseñas deben ser iguales</p> : null}
                    <label style={{fontSize: '16px'}}>Confirmar Contraseña</label>
                    <input className="" style={{marginLeft: '10px', fontSize: '16px'}} type="password" name="repassword" onChange={(e) => SetRepassword(e.target.value)} value={repassword} placeholder="Re-ingresa tu e-mail"/>
                </div>
                <button className="" style={{margin:'10px', fontSize: '16px'}} type="submit">Enviar</button>
            </form>        
        </>
    )
}

export default Register;

