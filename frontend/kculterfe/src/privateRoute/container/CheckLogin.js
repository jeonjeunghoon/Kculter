const isMember = () => {
    const keyHash = window.sessionStorage.getItem("memberHash")
    if(!!keyHash){
        return false;
    }else{
        return true;
    }
  };
  
export default isMember;