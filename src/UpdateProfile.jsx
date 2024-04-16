import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';


const UpdateProfile = () => {
    
    const {user}= useContext(AuthContext)

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
        <div>

            <img src={user.photoURL} alt="" />
            <h1>{user.email}</h1>
            <h1>{user.displayName}</h1>
            

            <form onSubmit={changeUserName} >
                <label>User Name:</label>
                <div className="flex flex-row">
                <input type="text" placeholder="User Name" name="username" className="input input-bordered w-full max-w-xs" />
                <button  className="btn btn-primary">Change</button>
                </div>
            </form> 
            <form onSubmit={changePhotoURL}>   
                <label>Image URL:</label>
                <div className="flex flex-row">
                <input type="text" placeholder="URL" name="photo"  className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Change</button>
                </div>
            </form>
            <ToastContainer />      
        </div>
    );
};

export default UpdateProfile;