// List of Marvel movies by genre with links
const movies = {
    action: [
        { title: "The Avengers series", link: "https://www.imdb.com/title/tt0848228/" },
        { title: "Captain America: The Winter Soldier", link: "https://www.imdb.com/title/tt1843866/" },
        { title: "Thor: Ragnarok", link: "https://www.imdb.com/title/tt3501632/" },
        { title: "Guardians of the Galaxy series", link: "https://www.imdb.com/title/tt2015381/" },
        { title: "Doctor Strange", link: "https://www.imdb.com/title/tt1211837/" },
        { title: "Ant-Man and the Wasp", link: "https://www.imdb.com/title/tt5095030/" },
        { title: "Spider-Man: Far From Home", link: "https://www.imdb.com/title/tt6320628/" },
        { title: "Shang-Chi and the Legend of the Ten Rings", link: "https://www.imdb.com/title/tt9376612/" }
    ],
    science_fiction: [
        { title: "Guardians of the Galaxy series", link: "https://www.imdb.com/title/tt2015381/" },
        { title: "Thor series (especially Thor: Ragnarok)", link: "https://www.imdb.com/title/tt3501632/" },
        { title: "Doctor Strange series", link: "https://www.imdb.com/title/tt1211837/" },
        { title: "Captain Marvel", link: "https://www.imdb.com/title/tt4154664/" },
        { title: "Eternals", link: "https://www.imdb.com/title/tt9032400/" }
    ],
    superhero: [
        { title: "Avengers: Infinity War", link: "https://www.imdb.com/title/tt4154756/" },
        { title: "Avengers: Endgame", link: "https://www.imdb.com/title/tt4154796/" },
        { title: "Spider-Man: No Way Home", link: "https://www.imdb.com/title/tt10872600/" },
        { title: "Black Panther", link: "https://www.imdb.com/title/tt1825683/" },
        { title: "Captain America: Civil War", link: "https://www.imdb.com/title/tt3498820/" }
    ],
    comedy: [
        { title: "Guardians of the Galaxy series", link: "https://www.imdb.com/title/tt2015381/" },
        { title: "Ant-Man series", link: "https://www.imdb.com/title/tt5095030/" },
        { title: "Thor: Ragnarok", link: "https://www.imdb.com/title/tt3501632/" },
        { title: "Spider-Man: Homecoming", link: "https://www.imdb.com/title/tt2250912/" },
        { title: "Spider-Man: Far From Home", link: "https://www.imdb.com/title/tt6320628/" }
    ],
    spy: [
        { title: "Captain America: The Winter Soldier", link: "https://www.imdb.com/title/tt1843866/" },
        { title: "Black Widow", link: "https://www.imdb.com/title/tt3480822/" },
        { title: "Captain America: Civil War", link: "https://www.imdb.com/title/tt3498820/" }
    ],
    heist: [
        { title: "Ant-Man", link: "https://www.imdb.com/title/tt0478970/" },
        { title: "Ant-Man and the Wasp", link: "https://www.imdb.com/title/tt5095030/" }
    ],
    political_thriller: [
        { title: "Captain America: The Winter Soldier", link: "https://www.imdb.com/title/tt1843866/" },
        { title: "Captain America: Civil War", link: "https://www.imdb.com/title/tt3498820/" }
    ],
    space_opera: [
        { title: "Guardians of the Galaxy series", link: "https://www.imdb.com/title/tt2015381/" },
        { title: "Thor: Ragnarok", link: "https://www.imdb.com/title/tt3501632/" }
    ],
    mystery: [
        { title: "WandaVision (TV series)", link: "https://www.imdb.com/title/tt9140560/" },
        { title: "Loki (TV series)", link: "https://www.imdb.com/title/tt9140554/" },
        { title: "Moon Knight (TV series)", link: "https://www.imdb.com/title/tt10234788/" }
    ],
    drama: [
        { title: "Black Panther", link: "https://www.imdb.com/title/tt1825683/" },
        { title: "Eternals", link: "https://www.imdb.com/title/tt9032400/" },
        { title: "Iron Man 3", link: "https://www.imdb.com/title/tt1300854/" }
    ],
    romance: [
        { title: "Eternals (Sersi and Ikaris relationship)", link: "https://www.imdb.com/title/tt9032400/" }
    ]
};

// Function to display movie recommendations with buttons
function showMovies() {
    const genres = document.querySelectorAll("#genreSelection input[type='checkbox']:checked");
    const recommendations = document.getElementById("recommendations");
    recommendations.innerHTML = ""; // Clear previous results

    if (genres.length === 0) {
        recommendations.innerHTML = "<p>Please select at least one genre.</p>";
        return;
    }

    const uniqueMovies = new Set(); // To store unique movie titles

    genres.forEach(genreCheckbox => {
        const genre = genreCheckbox.value;
        if (movies[genre]) {
            movies[genre].forEach(movie => {
                if (!uniqueMovies.has(movie.title)) {
                    uniqueMovies.add(movie.title);
                    const movieItem = document.createElement("div");
                    movieItem.classList.add("movie-item");

                    // Create movie title and link
                    const movieTitle = document.createElement("span");
                    movieTitle.innerText = movie.title;
                    movieItem.appendChild(movieTitle);

                    // Create button for IMDb link
                    const movieButton = document.createElement("a");
                    movieButton.href = movie.link;
                    movieButton.target = "_blank"; // Open link in a new tab
                    movieButton.innerText = "View Details";
                    movieButton.classList.add("link-button");

                    movieItem.appendChild(movieButton);
                    recommendations.appendChild(movieItem);
                }
            });
        }
    });

    if (recommendations.innerHTML === "") {
        recommendations.innerHTML = "<p>No movies found for the selected genres.</p>";
    } else {
        recommendations.innerHTML = `<p>Showing movies for selected genres:</p>` + recommendations.innerHTML;
    }
}
