var arr = [
  {
    name: "cherry glasses",
    image:
      "https://images.unsplash.com/photo-1726476641991-d243eb5e5d8d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },

  {
    name: "cake",
    image:
      "https://images.unsplash.com/photo-1726996599574-9815af778f41?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    name: "apple juice",
    image:
      "https://images.unsplash.com/photo-1719937050792-a6a15d899281?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "petals",
    image:
      "https://images.unsplash.com/photo-1727078439429-8055e46374ec?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "cake",
    image:
      "https://images.unsplash.com/photo-1726828952056-5efd2d76c22b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  },
  {
    name: "view of city",
    image:
      "https://images.unsplash.com/photo-1727163941315-1cc29bb49e54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "leaf",
    image:
      "https://images.unsplash.com/photo-1727030876302-d79bd90fae8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "jellyfish",
    image:
      "https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
];

function showTheCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });

  input.addEventListener("input", function () {
    const filteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    filteredArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`;
    });

    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

handleSearchFunctionality();
showTheCards();
