import { decrypt } from "./DecryptAes";

export function checkAdmin() {

    const memberHash = window.sessionStorage.getItem("memberHash");
    const mgHash = window.sessionStorage.getItem("mgHash");
    if(mgHash == null && memberHash == null){
        alert("No Authority to access");
        return false;
    }else{
        const mg = decrypt(mgHash);
        if(mg == 1){
            alert("Welcome Manager!!");
            return true;
        }else{
            alert("No Authority to access");
            return false;
        }
    }
}