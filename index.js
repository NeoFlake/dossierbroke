"use strict";

function FN_init () {

let lignesCdes = [];
let clients = [{name: "client1", code: "Cl1"},
               {name: "client2", code: "Cl2"}];
let TVA = [ 2, 10, 20.6];

for (let i = 0; i < 1000; i++) {

  let indexTVA = Math.round(Math.random() * ( TVA.length - 1 ) );
  let myTVA = TVA[indexTVA];
  let indexCl = Math.round(Math.random() * ( clients.length - 1 ) );
  let myCl = clients[indexCl];
  let montHT = Math.random() * 1000;

  lignesCdes.push([myCl, myTVA, montHT]);

}

return lignesCdes;

}
