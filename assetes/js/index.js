"use strict";

// Select Elements
const gamesWrapper = document.querySelector(".games-wrapper");
const categories = document.querySelector(".categories");
const categoriesBtns = document.querySelectorAll(".nav-link");
const detailsContainer = document.querySelector(".row--details");
const gamesSection = document.querySelector(".games");
const detailsSection = document.querySelector(".game-details");
const header = document.querySelector("header");
const closeDetailsBtn = document.querySelector(".btn--close");
const spinner = document.querySelector(".spinner");
const scrollTopBtn = document.querySelector(".scroll-top");

/*
// Functions
const displayGames = function (arr) {
  // Clear inner HTML
  gamesWrapper.innerHTML = "";

  arr.forEach((game) => {
    const html = `
    <div class="col">
      <div data-id = "${game.id}" class="card game-card bg-transparent">
        <img
          class="card-img-top"
          src="${game.thumbnail}"
          alt="${game.title}"
        />
        <div class="card-body">
          <div
            class="d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="card-title mb-0 text-white">${game.title}</h3>
            <span class="badge text-bg-primary">Free</span>
          </div>
          <p class="card-text text-white text-center">
            ${game.short_description}
          </p>
        </div>
        <div
          class="card-footer d-flex justify-content-between align-items-center"
        >
          <span class="category badge text-bg-secondary">${game.genre}</span>
          <span class="platform-type badge text-bg-secondary"
            >${game.platform}</span
          >
        </div>
      </div>
    </div>
    `;
    gamesWrapper.insertAdjacentHTML("beforeend", html);
  });

  // Hide spinner
  spinner.classList.add("d-none");
};

const displayGameDetails = function (obj) {
  // Clear inner HTML
  detailsContainer.innerHTML = "";

  const html = `
    <div class="col-md-4">
      <div class="inner">
        <img
          class="w-100 mw-100"
          src="${obj.thumbnail}"
          alt="${obj.title}"
        />
      </div>
    </div>
    <div class="col-md-8">
      <h3 class="game-title text-white">Title: ${obj.title}</h3>
      <p class="text-white fw-bold">
        Category:
        <span class="game-category badge"> ${obj.genre}</span>
      </p>
      <p class="text-white fw-bold">
        Platform:
        <span class="game-platform badge"> ${obj.platform}</span>
      </p>
      <p class="text-white fw-bold">
        Status:
        <span class="status badge"> ${obj.status}</span>
      </p>
      <p class="game-description">
        ${obj.description}
      </p>
      <button class="show-game btn text-white fw-bold">
        Show Game
      </button>
    </div>
  `;

  detailsContainer.insertAdjacentHTML("beforeend", html);

  // Hide spinner
  spinner.classList.add("d-none");
};

const getGames = async function (category) {
  try {
    // Display spinner
    spinner.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7217fcc650msh786b2041385eb53p115aeajsnbd07e4aa2332",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const getData = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const data = await getData.json();
    console.log(data);
    displayGames(data);
  } catch (error) {
    console.error(error);
  }
};
getGames("shooter");

const getGameDetails = async function (id) {
  try {
    // Display spinner
    spinner.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7217fcc650msh786b2041385eb53p115aeajsnbd07e4aa2332",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const getData = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );

    const data = await getData.json();
    console.log(data);
    displayGameDetails(data);
  } catch (error) {
    console.error(error);
  }
};

// Event Handelrs
categories.addEventListener("click", function (e) {
  // Remove active class
  categoriesBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to targeted btn
  e.target.classList.add("active");

  // Get data-category
  const category = e.target.dataset.category;

  // Fetch data with current category
  getGames(category);
});

gamesWrapper.addEventListener("click", function (e) {
  const gameCard = e.target.closest(".game-card");
  // console.log(gameCard);
  if (gameCard) {
    // Hide header
    header.classList.add("d-none");
    // Hide games section
    gamesSection.classList.add("d-none");
    // Display details section
    detailsSection.classList.remove("d-none");

    const gameId = gameCard.dataset.id;
    getGameDetails(gameId);
  }
});

closeDetailsBtn.addEventListener("click", function () {
  // Hide details section
  detailsSection.classList.add("d-none");
  // Display header
  header.classList.remove("d-none");
  // Display games section
  gamesSection.classList.remove("d-none");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("d-none"); // Show button when scrolled down
  } else {
    scrollTopBtn.classList.add("d-none"); // Hide button when near the top
  }
});

scrollTopBtn.addEventListener("click", function () {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo(0, 0);
});
*/

class GameApp {
  constructor() {
    this.getGames("mmorpg");
    this.initEventListeners();
  }

  displayGames(arr) {
    gamesWrapper.innerHTML = "";
    arr.forEach((game) => {
      const html = `
      <div class="col">
        <div data-id="${game.id}" class="card game-card bg-transparent">
          <img class="card-img-top" src="${game.thumbnail}" alt="${game.title}" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="card-title mb-0 text-white">${game.title}</h3>
              <span class="badge text-bg-primary">Free</span>
            </div>
            <p class="card-text text-white text-center">${game.short_description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span class="category badge text-bg-secondary">${game.genre}</span>
            <span class="platform-type badge text-bg-secondary">${game.platform}</span>
          </div>
        </div>
      </div>
      `;
      gamesWrapper.insertAdjacentHTML("beforeend", html);
    });
    spinner.classList.add("d-none");
  }

  displayGameDetails(obj) {
    detailsContainer.innerHTML = "";
    const html = `
      <div class="col-md-4">
        <div class="inner">
          <img class="w-100 mw-100" src="${obj.thumbnail}" alt="${obj.title}" />
        </div>
      </div>
      <div class="col-md-8">
        <h3 class="game-title text-white">Title: ${obj.title}</h3>
        <p class="text-white fw-bold">Category: <span class="game-category badge">${obj.genre}</span></p>
        <p class="text-white fw-bold">Platform: <span class="game-platform badge">${obj.platform}</span></p>
        <p class="text-white fw-bold">Status: <span class="status badge">${obj.status}</span></p>
        <p class="game-description">${obj.description}</p>
        <button class="show-game btn text-white fw-bold">Show Game</button>
      </div>
    `;
    detailsContainer.insertAdjacentHTML("beforeend", html);
    spinner.classList.add("d-none");
  }

  async getGames(category) {
    try {
      spinner.classList.remove("d-none");
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7217fcc650msh786b2041385eb53p115aeajsnbd07e4aa2332",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const getData = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      const data = await getData.json();
      this.displayGames(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getGameDetails(id) {
    try {
      spinner.classList.remove("d-none");
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7217fcc650msh786b2041385eb53p115aeajsnbd07e4aa2332",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const getData = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const data = await getData.json();
      this.displayGameDetails(data);
    } catch (error) {
      console.error(error);
    }
  }

  initEventListeners() {
    categories.addEventListener("click", (e) => {
      categoriesBtns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      this.getGames(e.target.dataset.category);
    });

    gamesWrapper.addEventListener("click", (e) => {
      const gameCard = e.target.closest(".game-card");
      if (gameCard) {
        header.classList.add("d-none");
        gamesSection.classList.add("d-none");
        detailsSection.classList.remove("d-none");
        this.getGameDetails(gameCard.dataset.id);
      }
    });

    closeDetailsBtn.addEventListener("click", () => {
      detailsSection.classList.add("d-none");
      header.classList.remove("d-none");
      gamesSection.classList.remove("d-none");
    });

    window.addEventListener("scroll", () => {
      scrollTopBtn.classList.toggle("d-none", window.scrollY <= 300);
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Initialize the app
new GameApp();
