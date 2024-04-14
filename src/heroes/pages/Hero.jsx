import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {

  const { id } = useParams();

  const heroe = useMemo(() => getHeroById(id), [ id ]);

  const navigate =  useNavigate();

  const handleReturn = () => {
    navigate(-1) // Regresa a lo anterior
  }
  
  if ( !heroe ) {
    return <Navigate to="/marvel" />;
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={`/assets/heroes/${ id }.jpg`} 
        alt={heroe.superhero} 
        className="card-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{ heroe.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { heroe.alter_ego } </li>
          <li className="list-group-item"><b>Publisher:</b> { heroe.publisher } </li>
          <li className="list-group-item"><b>First Appearance:</b> { heroe.first_appearance } </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ heroe.characters }</p>

        <button 
        className="btn btn-info"
        onClick={ handleReturn }
        >
          Go Back
        </button>
      </div>
    </div>
  )
}
