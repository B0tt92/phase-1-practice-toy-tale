let addToy = false;
const toyurl = "http://localhost:3000/toys";
document.addEventListener("DOMContentLoaded", () => {
  toy_fetch();
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  toyFormContainer.style.display = "none";

  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
    }
  });
  function toy_fetch() {
    fetch(toyurl)
      .then((resp) => resp.json())
      .then((toy) => {
        toy.forEach((toy) => {
          rendertoys(toy);
        });
      });
  }
  rendertoys = (toy) => {
    const block = document.getElementById("toy-collection");
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.src = toy.image;
    img.className = "toy-avatar";
    const h2 = document.createElement("h2");
    const toyID = toy.id;
    h2.setAttribute("id", toy.id);
    h2.innerHTML = toy.name;
    className = "toy-header";
    const btn = document.createElement("button");
    (btn.innerHTML = "Like"), (className = "like-btn");
    btn.className = "like-btn";

    const p = document.createElement("p");
    let render_likes = parseInt(toy.likes, 10);
    p.innerHTML = "Likes " + render_likes;
    p.setAttribute("id", "Like_num_class");

    block.append(div);
    div.append(h2, img, btn, p);

    btn.addEventListener("click", () => {
      newlikes = render_likes += 1;
      (Likes_PATCH = (toyID) => {
        fetch(`http://localhost:3000/toys/${toyID}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ likes: newlikes }),
        })
          .then((resp) => resp.json())
          .then((newlikes) => newlikes);
      }),
        Likes_PATCH(toyID);
      p.removeChild(p.lastChild);
      p.append("likes " + newlikes);
    });
  };
  const crtbtn = document.getElementById("Createbtn");
  crtbtn.addEventListener("click", () => {
    let body = {
      name: document.getElementById("crt_toyname").value,
      image: document.getElementById("crt_image").value,
      likes: 0,
    };
    fetch(`http://localhost:3000/Toys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(window.location.reload());
  });
});