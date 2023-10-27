import { $, $$ } from "jessquery"
import "./style.css"

$("#app").html(`<div class="container">
              <h1>jQuery is for old people.</h1>
              <div class="card">
                <button id="counter" type="button"></button>
              </div>
              <h2 class="truth">This will disappear.</h2>
              <h3 class="truth">I love you.</h3>
            </div>
            <input type="text" />
            <div class="container" id="parentTwo">
              <input id="myFavorite" type="text" />
              <h4 class="truth">Why are you still reading this? Play with the demo!</h4>
            </div>`)

$(".container")
  .on("click", () => $(".container").css("backgroundColor", randomColor()))
  .first()
  .css("backgroundColor", "lightblue")
  .next()
  .next()
  .css("color", "green")
  .prev()
  .prev()
  .css("color", "purple")
  .parent()
  .css({
    backgroundColor: "purple",
    border: "4px dashed hotpink",
    padding: "10px",
    margin: "10px",
  })
  .pick("button")
  .css({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "red",
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
  })
  .wait(2000)
  .css("color", "black")
  .parent()
  .parent()
  .pickAll(".truth")
  .text("jQuery is forever!")
  .css("textAlign", "center")
  .wait(2000)
  .do((el) => {
    el.css("color", "white")
    el.css("backgroundColor", "black")
  })
  .wait(2000)
  .css("backgroundColor", "lightblue")
  .css("color", "black")

let inputs = $$("input")

inputs.on("input", (e) => {
  inputs.val(e.target.value)
})

inputs.on("change", (e) => {
  inputs.do((el) => {
    el.animate(
      [
        // initial state
        {
          backgroundColor: "white",
          borderRadius: "0px",
          transform: "scale(1)",
          offset: 0.8, // 80% of the animation's duration
        },
        // transition to black taking longer
        {
          backgroundColor: "black",
          borderRadius: "20px",
          transform: "scale(1.05)",
        },
        // transition back to white quickly
        {
          backgroundColor: "white",
          borderRadius: "0px",
          transform: "scale(1)",
        },
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      }
    )
  })
})

$("#myFavorite")
  .val("I love jQuery")
  .on("mouseover", () => {
    $("#myFavorite").val("Don't change me!")
  })

$("#parentTwo").css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#59123f",
  color: "aqua",
  padding: "8px",
  borderRadius: "10px",
})

let count = 0

const counter = $("#counter")

counter.text(count).on("click", () => {
  count++
  counter.text(count)
})

function randomColor() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
