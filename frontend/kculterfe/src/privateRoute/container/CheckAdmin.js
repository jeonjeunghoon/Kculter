import { decrypt } from "./Descrypt";

export function checkAdmin() {

    const memberHash = window.sessionStorage.getItem("memberHash");
    const mgHash = window.sessionStorage.getItem("mgHash");
    const mg = decrypt(mgHash);

    if(!((!!memberHash) && !(!!mg))){
        alert("No Authority to access");
        return false;
    }else{
        return true;
    }
    

}