export function isMember() {

    const memberHash = window.sessionStorage.getItem("memberHash");
    if(memberHash == null){
        alert("Please Login First");
        return false;
    }else{
        return true;
    }
}