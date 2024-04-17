import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import { useEffect } from "react";

import 'animate.css';

const UpdateProfile = () => {
    
    const {user}= useContext(AuthContext)

    useEffect(() => {
        const userLogIn = sessionStorage.getItem('LogIn');
        if (user && !userLogIn) {
          
            sessionStorage.setItem('LogIn', true);
    
          Swal.fire({
            title: "Login Successful!",
            text: "You have signed in!",
            icon: "success"
          });
        }
      }, []);

    console.log(user)
    
    const changeUserName=e=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const username= form.get('username')
        if(username==='')
        {
            toast.error("empty input wont be accepted");
            return
        }
        updateProfile(user,{
            displayName: username
        }) 
        .then(()=>{
            console.log(user)
            window.location.reload();

        })
        .catch()  

    }


    const changePhotoURL=e=>{

        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const photo= form.get('photo')
        if(photo==='')
        {
            toast.error("empty input wont be accepted");
            return
        }
        updateProfile(user,{
            photoURL: photo
        }) 
        .then(()=>{
            console.log(user)
            window.location.reload();

        })
        .catch() 

    }

    return (
        <div style={{backgroundImage:"url('https://img.freepik.com/free-photo/contemporary-building-blur_23-2147694747.jpg')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <div className="flex flex-col justify-center items-center gap-5  py-5">
            <Helmet><title>Profile:{user.displayName}</title></Helmet>
            <h1 className="text-4xl font-bold animate__animated animate__zoomInDown">Hello, {user.displayName}</h1>
            <div className="avatar">
                <div className="w-[200px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 animate__animated animate__rotateIn">
                    <img src={user.photoURL}/>
                </div>
                </div>
            
            <h1 className="text-2xl font-semibold">{user.email}</h1>
           
            

            <form onSubmit={changeUserName} >
                <label className="font-semibold">User Name:</label>
                <div className="flex flex-row">
                <input type="text" placeholder="User Name" name="username" defaultValue={user.displayName} className="input input-bordered w-full max-w-sm" />
                <button  className="btn btn-md">Change</button>
                </div>
            </form> 
            <form onSubmit={changePhotoURL}>   
                <label className="font-semibold">Image URL:</label>
                <div className="flex flex-row">
                <input type="text" placeholder="URL" name="photo" defaultValue={user.photoURL}  className="input input-bordered w-full max-w-xs" />
                <button className="btn ">Change</button>
                </div>
            </form>
            <ToastContainer />      
        </div>
        </div>
    );
};

export default UpdateProfile;