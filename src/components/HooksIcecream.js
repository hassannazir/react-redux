import React from "react";
import { buyIcecream } from "../redux";
import { useSelector, useDispatch } from "react-redux";
const HooksIcecream = () => {
  const dispatch = useDispatch();
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Icecreams: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
};

export default HooksIcecream;
