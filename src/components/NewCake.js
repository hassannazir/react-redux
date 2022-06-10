import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
const NewCake = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      {" "}
      <h2>
        <br />
        Cakes: {props.numOfCakes}
      </h2>
      <button onClick={() => props.buyCake(number)}>Buy Cake</button>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numOfCakes: state.cake.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return { buyCake: (number) => dispatch(buyCake(number)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCake);
