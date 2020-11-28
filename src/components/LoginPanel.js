import { useForm } from "react-hook-form";
import axios from "axios";



const LoginPanel = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('http://142.93.110.208/authenticate', data)
            .then(response => window.sessionStorage.setItem('jwt', response.data.data.jwt))
        e.target.reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group row">
                <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-12">
                    <input type="username" name="username" className="form-control" id="inputUsername"  ref={register}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-12">
                    <input type="password" name="password" className="form-control" id="inputPassword" ref={register} />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Zaloguj</button>

        </form>
    )
}

export default LoginPanel;