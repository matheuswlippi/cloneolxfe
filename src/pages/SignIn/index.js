import React, { useState } from "react";
import { PageArea} from './styled'
import { PageContainer , PageTitle } from '../../components/MainComponents'
import useApi from '../../helpers/OlxAPI'
import { doLogin } from "../../helpers/AuthHandler";


const Page = () => {
    const api = useApi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const json = await api.login(email, password)
        if (json.error) {
            setError(json.error)
        }else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }
    } 

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">
                            E-mail
                        </div>
                        <div className="area--input">
                            <input type="email" disabled={disable} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Senha
                        </div>
                        <div className="area--input">
                            <input type="password" disabled={disable} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                            Lembrar Senha
                        </div>
                        <div className="area--input">
                            <input type="checkbox" disabled={disable} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input" disabled={disable} >
                            <button >Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page