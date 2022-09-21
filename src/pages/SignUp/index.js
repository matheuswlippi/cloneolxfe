import React, { useState, useEffect } from "react";
import { PageArea} from './styled';
import { PageContainer, 
    PageTitle, 
    ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from "../../helpers/AuthHandler";


const Page = () => {
    const api = useApi()

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState();
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getState();
            setStateList(sList);
        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisable(true);
        setError('');
        if (password !== confirmPassword){
            setError("Senhas não batem");
            setDisable(false);
            return;
        }
        const json = await api.register(
            name,
            stateLoc,
            email,
            password
        )
        if (json.error) {
            setError(json.error);
        }else {
            doLogin(json.token);
            window.location.href = '/';
        }
        setDisable(false);
    } 

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">
                            Nome Completo
                        </div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                disabled={disable}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Estado
                        </div>
                        <div className="area--input">
                            <select 
                                disabled={disable}
                                value={stateLoc}
                                onChange={e => setStateLoc(e.target.value)}
                                required
                            >
                                <option></option>
                                {stateList.map((i, k) =>
                                    <option
                                        key={k}
                                        value={i.id}
                                    >
                                        {i.name}
                                    </option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            E-mail
                        </div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                disabled={disable}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Senha
                        </div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={disable}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Confirmar a Senha
                        </div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={disable}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input" disabled={disable} >
                            <button >Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page