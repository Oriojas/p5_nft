import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import Sketch from "react-p5";
import { Button } from "antd";
import { Upload } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function NftExample() {
  // variables p5
  let inc = 60;
  let x = 200;
  let y = 350;
  let oldX = x;
  let oldY = y;

  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(500, 400).parent(canvasParentRef);

    let x_grid = (p5.windowWidth - p5.width) / 2;
    let y_grid = (p5.windowHeight - p5.height) / 0;
    xyz.position(x_grid, y_grid);
    p5.background(0, 0, 0);

    p5.textFont("Courier");
    p5.textSize(36);
    p5.stroke(255, 90);
    p5.strokeWeight(4);
    p5.text("eth Bogotá", 140, 368);
  };

  let draw = p5 => {
    p5.fill(255, 90);
    p5.stroke(255, 255, 255, 40);
    p5.strokeWeight(1);
    p5.frameRate(24);

    let rX = p5.random(-inc, inc);
    let rY = p5.random(-inc, inc);
    let avgInc = (rX + rY) / 10;

    if (x < p5.width) {
      x = x + rX;
    } else {
      x = oldX - inc;
    }

    if (x > 0) {
      x = x + rX;
    } else {
      x = oldX + inc;
    }

    if (y < p5.height) {
      y = y + rY;
    } else {
      y = oldY - inc;
    }

    if (y > 0) {
      y = y + rY;
    } else {
      y = oldY + inc;
    }

    p5.fill(255, 90);
    p5.ellipse(x, y, avgInc, avgInc);
    p5.line(oldX, oldY, x, y);

    oldX = x;
    oldY = y;

    p5.fill(0, 0, 0);
    p5.stroke(255, 255, 255, 40);
    p5.strokeWeight(2);
    p5.triangle(175, 202, 250, 168, 250, 78);
    p5.triangle(325, 202, 250, 168, 250, 78);
    p5.triangle(175, 202, 250, 168, 250, 246);
    p5.triangle(325, 202, 250, 168, 250, 246);
    p5.triangle(175, 216, 250, 260, 250, 322);
    p5.triangle(325, 216, 250, 260, 250, 322);

    p5.fill(0, 0, 0, 60);
    p5.noStroke();
    p5.textFont("Courier");
    p5.text("eth Bogotá", 140, 368);

    if (p5.mouseIsPressed) {
      p5.save("Created_NFT.png");
      p5.noLoop();
    }
  };

  return (
    <div>
      <div>
        <br></br>
        <div>
          <div className="canvas" style={{ margin: "auto" }}>
            <Sketch setup={setup} draw={draw} className="canvas" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 420 }}>
        <Upload></Upload>
        <br></br>
        <Button type="primary">MINT!</Button>
      </div>
      <br></br>
    </div>
  );
}

export default NftExample;
