import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import Sketch from "react-p5";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function NftExample() {
  // variables p5
  let a = 300;
  let b = 300;

  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(500, 400).parent(canvasParentRef);

    let x_grid = (p5.windowWidth - p5.width) / 2;
    let y_grid = (p5.windowHeight - p5.height) / 0;
    xyz.position(x_grid, y_grid);
  };
  let draw = p5 => {
    p5.background("rgb(0%,0%,0%)");
  };

  return (
    <div>
      <div style={{ margin: 32 }}>
        <div className="canvas">
          <Sketch setup={setup} draw={draw} className="canvas" />
        </div>
      </div>
    </div>
  );
}

export default NftExample;
