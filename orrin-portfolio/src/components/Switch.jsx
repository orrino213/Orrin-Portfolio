import React from "react";
let names = ["alex", "ken", "orrin", "jack"];


function Switch(){

  for (let i = 0; i < names.length; i++) {
    switch (names[i][0]) {
      case "a":
        console.log("starts with A");
        break;
        case "k":
          console.log("starts with A");
          break;
          case "o":
            console.log("starts with A");
            break;
            case "j":
              console.log("starts with A");
              break;
              default:
                console.log("doesnt start with any of those");
                break;
              }
            }
          }
            
export default 
