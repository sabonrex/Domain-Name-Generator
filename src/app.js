/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let colour = ["the", "our", "their"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
window.onload = function() {
  let pronoun = ["the", "our", "my", "hers"];
  let adj = ["great", "big", "tiny", "medium"];
  let noun = ["tulip", "daisy", "orquit", "rose"];

  let dominio = "";

  for (let i = 0; i < colour.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let k = 0; k < noun.length; k++) {
        dominio = dominio + pronoun[i] + adj[x] + noun[k] + ".com\n";
      }
    }
  }

  console.log(dominio);
};
