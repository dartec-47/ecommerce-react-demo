import { useState, createContext } from 'react'

const initialState = {

}

const LoginContext = createContext(initialState);

const LoginProvider = props => {
    const [login, setLogin] = useState(initialState);
    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {props.children}
        </LoginContext.Provider>
    )
}

export {LoginContext, LoginProvider};