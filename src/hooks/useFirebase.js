import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,updateProfile,signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { Password } from "@mui/icons-material";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState(' ')

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const registerUser = ( email, password,name,navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword( auth, email, password)
            .then((userCredential) => {
                setAuthError( ' ');
                const newUser = {email,displayName: name};
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });


                navigate.replace('/home')
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError ( error.message);

                // ..
            })
            .finally(() => setIsLoading(false));
            // 


    }

    const loginUser = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{

            setAuthError( ' ');
        })

        .catch((error)=>{
            setAuthError ( error.message);
        })
        .finally(() => setIsLoading(false))
        ;

    }

    const signINWithGoogle = (location,history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
   
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    setAuthError(error.message);
    // ...
  })
  .finally(() => setIsLoading(false));


    }

    //observer user state

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
            
            //   const uid = user.uid;
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
              setUser({})
            }
            setIsLoading(false);
          });
          return() => unsubscribe;

    },[])


    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));

    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        signINWithGoogle
    }


}

export default useFirebase;