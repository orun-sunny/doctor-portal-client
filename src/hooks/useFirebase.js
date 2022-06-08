import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Password } from "@mui/icons-material";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();


    const registerUser = (auth, email, password) => {
        createUserWithEmailAndPassword()
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                // ..
            });


    }

    const loginUser = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{

            const user = userCredential.user;
        })

        .catch((error)=>{
            const errorCode= error.code;
            const errorMessage = error.message;
        });

    }

    //observer user state

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
            
              const uid = user.uid;
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
              setUser({})
            }
          });
          return() => unsubscribe;

    },[])


    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }
    return {
        user,
        registerUser,
        loginUser,
        logout
    }


}

export default useFirebase;