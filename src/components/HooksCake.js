import React from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";
const HooksCake = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h2>Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCake;
