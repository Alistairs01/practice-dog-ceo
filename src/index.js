document.addEventListener('DOMContentLoaded', function() {
    console.log('%c HI', 'color: firebrick');
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                document.body.appendChild(img); // Add images to the body
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedLista = document.getElementById('dog-breeds'); 
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedLista.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Challenge 3
    const breedList = document.getElementById('dog-breeds');
    breedList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color === 'red'; 
        }
    });

    // Challenge 4
    const filterDropdown = document.getElementById('breed-dropdown'); 
    filterDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value;
        const breedItems = breedList.getElementsByTagName('li');
        for (let i = 0; i < breedItems.length; i++) {
            const breedName = breedItems[i].textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                breedItems[i].style.display = 'block'; // Show breeds that start with the selected letter
            } else {
                breedItems[i].style.display = 'none'; // Hide breeds that don't start with the selected letter
            }
        }
    });
});
