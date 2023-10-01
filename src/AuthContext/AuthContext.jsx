import { createContext } from "react";
import PropTypes from 'prop-types';

export const Authcontext = createContext(null)

const AuthProvider = ({ children }) => {
    const persone = { name:'Rakib' }
    return (
        
           <Authcontext.Provider value={persone}>
                {children}
            </Authcontext.Provider> 
        
    );
};

export default AuthProvider;

AuthProvider.propTypes  = {
    children: PropTypes.node
}