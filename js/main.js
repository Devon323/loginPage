firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.open("https://devon323.github.io/welcome/index.html");

    } else {
        // No user is signed in.
        document.getElementById("user_div").style.display = "none";
        document.getElementById("form").style.display = "block";
    }
  });

function login(){
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;

        signInWithEmailAndPassword:
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error:" + errorCode + " " + errorMessage);
    });    

    // window.alert(userEmail + " " + userPass);

}


function logout(){
    firebase.auth().signOut();
}