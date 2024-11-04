const toggleButton = document.getElementById("mode");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "clair";
    } else {
        toggleButton.textContent = "sombre";
    }
});


window.onload = function() {
    const track = document.querySelector('.content-img1');
    const items = document.querySelectorAll('.img');
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 20;

    function scrollCarousel() {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    }

    setInterval(scrollCarousel, 3000);
};

/* window.onload = function() {
    const track = document.querySelector('.content-img1');
    const items = document.querySelectorAll('.img');
    const itemWidth = items[0].offsetWidth + 20; // Ajustez si nécessaire
    let currentIndex = 0;

    // Dupliquez les éléments pour un défilement en continu
    track.innerHTML += track.innerHTML;
    const totalItems = items.length * 2;

    function scrollCarousel() {
        currentIndex++;
        if (currentIndex >= totalItems / 2) {
            track.style.transition = 'none'; // Enlevez la transition pour éviter le saut
            currentIndex = 0;
            track.style.transform = `translateX(0px)`;
        } else {
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
        }
    }

    setInterval(scrollCarousel, 3000);
};
*/

/*like compter*/

let likeCount = 0;

document.getElementById("like-button").addEventListener("click", function() {
  likeCount++;
  document.getElementById("like-count").textContent = likeCount + " J'aime";
});





/* recherche*/
document.addEventListener("DOMContentLoaded", function () {
 
    const searchInput = document.querySelector('.bare-de-recherche input');
    const images = document.querySelectorAll('.content-img1 .img, .content-img2 .img');

    searchInput.addEventListener("keyup", function (e) {
        const searchText = e.target.value.toLowerCase();

        images.forEach((image) => {
            const title = image.querySelector('h3'); 

            if (title && title.textContent.toLowerCase().includes(searchText)) {
                image.style.display = ""; 
            } else {
                image.style.display = "none"; 
            }
        });
    });
});


/*etoile*/
const stars = document.querySelectorAll(".star"); 
const result = document.getElementById("rating-result"); 

stars.forEach(star => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value"); 
    result.textContent = `Votre note : ${rating}`; 

    stars.forEach(s => s.classList.remove("selected")); 
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("selected"); 
    }
  });
});
