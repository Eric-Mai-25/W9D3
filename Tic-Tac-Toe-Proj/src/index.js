import Game from "../ttt_node/game"
import View from  "./ttt-view"

let game = new Game()
document.addEventListener("DOMContentLoaded", () => {
  let element = document.getElementsByClassName("ttt")
  let view = new View(game, element)
  view()
});


