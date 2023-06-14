import { useDispatch } from "react-redux";
import "./CropsCard.css";

import { addCropsArticle } from './../../../store/reducers/cropsArticleSlice';

function GardenCard(props) {
  const dispatch = useDispatch();  
  const addCropsArticleToState = () => {
    dispatch(addCropsArticle(props.name))
}

  return (
    <button className="gardenCard" onClick={addCropsArticleToState}>
      <img className="gardenCard__image" src={props.url} alt="" />
      <h3 className="gardenCard__title">{props.name}</h3>
    </button>
  );
}

export default GardenCard;
