import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const residence= useLoaderData();
    const {id}= useParams();
   
    const reside= residence.find(res=> res.id===parseInt(id));
    return (
        <div>
            <h1>Book detail of : {reside.id}</h1>
        </div>
    );
};

export default Details;