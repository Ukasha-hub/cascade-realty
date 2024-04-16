//import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useForm } from "react-hook-form"
import 'animate.css';





const About = () => {
    sessionStorage.setItem('LogIn', true);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    
    return (
        <div>

            <h1 className="animate__animated animate__bounce">About Us: Your Trusted Partner in Real Estate</h1>
            <p>Welcome to [Company Name], where your journey to finding your dream home begins. With a deep understanding of the profound significance of buying or renting a home, we stand as your reliable and dedicated partner in the quest for your perfect abode. At [Company Name], we are committed to offering unparalleled service, expert guidance, and a personalized approach to every client.

With a legacy of excellence spanning several years in the real estate industry, our team of seasoned professionals brings a wealth of experience and expertise to the table. We recognize that each client is unique, with their own set of preferences, needs, and aspirations. Therefore, our approach is tailored to provide bespoke solutions that align perfectly with your individual requirements.</p>
            <div></div>
            <p>Our mission is clear: to exceed your expectations at every turn. We achieve this by prioritizing your needs above all else and delivering results that speak for themselves. By fostering an environment of trust, transparency, and integrity, we have earned the reputation of being a trusted advisor and partner in your real estate journey.

At [Company Name], we believe that the key to success lies in our unwavering commitment to serving our clients with the highest standards of professionalism and excellence. From your initial consultation to the final closing, we are with you every step of the way, providing guidance, support, and expert advice to ensure a smooth and stress-free transaction.</p>


<div className="mt-5">
<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
</div>



        </div>
    );
};

export default About;