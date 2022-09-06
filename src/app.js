/* eslint-disable */
import "bootstrap";
import "./style.css";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon", "suave", "sabroso", "palabres"];
var extensions = ["es", "eu", "co", "ve"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        if (noun[k].endsWith(extensions[l])) {
          console.log(
            pronoun[i] +
              adj[j] +
              noun[k].slice(0, -1 * extensions[l].length) +
              "." +
              extensions[l]
          );
        } else {
          console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        }
      }
    }
  }
}
