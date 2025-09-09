export function is_Authanticated(){
    let token=localStorage.getItem('token')
    if(token){
        return true
    }
    else{
        return false
    }
}
export  function login(){
    localStorage.setItem("token","user")
}
export function logout(){
    localStorage.removeItem("token")
}

