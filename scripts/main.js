function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            console.log("user is logged in")
            console.log(user.displayName)
            userName = user.displayName;
            $("#name-goes-here").text(userName);
        }else{
            console.log("user is not logged in")
        }
    })
}
getNameFromAuth();