let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
let addToy = false;
const toyurl = 'http://localhost:3000/toys'
document.addEventListener("DOMContentLoaded", () => {
  toy_fetch()
   const addBtn = document.querySelector("#new-toy-btn");
   const toyFormContainer = document.querySelector(".container");
   addBtn.addEventListener("click", () => {
     // hide & seek with the form
     addToy = !addToy;
     if (addToy) {
       toyFormContainer.style.display = "block";
     } else {
       toyFormContainer.style.display = "none";
     }
  });
 });
 function toy_fetch() {
    fetch(toyurl)
    .then(resp => resp.json())
    .then(toy => {toy.forEach(toy => {rendertoys(toy)
    })
  })

}
rendertoys = (toy) => {
  
  const block = document.getElementById('toy-collection')
  const div = document.createElement('div')
  div.className ="card"
  const img = document.createElement('img')
  img.src = toy.image
  img.className = "toy-avatar"
  const h2 = document.createElement('h2')
  const toyID = toy.id
  h2.setAttribute("id", toy.id  )
  h2.innerHTML = toy.name
  className = "toy-header"
  const btn = document.createElement("button")
  btn.innerHTML = "Like",className = "like-btn"
  btn.className = "like-btn"
  const p = document.createElement('p')
  let render_likes =  parseInt(toy.likes, 10)
  p.innerHTML ="Likes " + render_likes
  p.setAttribute("id", "Like_num_class")
  block.append(div)
  div.append(h2,img,btn,p)
  btn.addEventListener("click", () => {
     // const d = getElementById(toy.id) 
      console.log(toy.name)
      render_likes += 1
      console.log(render_likes)
      p.removeChild(p.lastChild)
      p.append("Likes " + render_likes)
      Likes_POST()
  });
  
    Likes_POST = () => {
       //document.getElementById(Like_num_class)
  console.log(`http://localhost:3000/${toyID}`)

  //    fetch(`http://localhost:3000/${toy.id}`, {
  //      method: 'PATCH',
  //      headers: {'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify(render_likes)
  //  })
  //    .then(resp => resp.json())
  //    .then(render_likes => console.log(render_likes))
     }
} 