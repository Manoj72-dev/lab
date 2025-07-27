import {useEffect} from 'react';
function Logout({onLogout}){
    useEffect(()=>{
        if(onLogout) onLogout();
    },[onLogout]);
    return(
        <div>
            Logging you out......        
        </div>
    )
}

export default Logout;