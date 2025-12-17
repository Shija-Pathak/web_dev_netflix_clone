const moviesData = [
  {
    id: 1,
    title: "Stranger Things",
    description:
      "The gripping, decades-spanning inside story of Her Majesty Queen Elizabeth II and the Prime Ministers who shaped Britain's post-war destiny.",
    genre: "Drama, History, Biography",
    year: "2016",
    rating: "16+",
    cast: "Claire Foy, Olivia Colman, Imelda Staunton, more",
    tags: "Elegant, Political",
    image: "assets/images/the-crown.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 2,
    title: "Breaking Bad",
    description:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student.",
    genre: "Crime, Drama, Thriller",
    year: "2008",
    rating: "18+",
    cast: "Bryan Cranston, Aaron Paul, Anna Gunn, more",
    tags: "Intense, Gripping",
    image: "assets/images/breaking-bad.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 3,
    title: "Ozark",
    description:
      "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    genre: "Crime, Drama, Thriller",
    year: "2017",
    rating: "18+",
    cast: "Jason Bateman, Laura Linney, Sofia Hublitz, more",
    tags: "Dark, Suspenseful",
    image: "assets/images/ozark.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 4,
    title: "The Witcher",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    genre: "Action, Adventure, Fantasy",
    year: "2019",
    rating: "18+",
    cast: "Henry Cavill, Anya Chalotra, Freya Allan, more",
    tags: "Epic, Magical",
    image: "assets/images/the-witcher.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 5,
    title: "Money Heist",
    description:
      "A criminal mastermind manipulates a group of young thieves to pull off the most perfect robbery in Spanish history.",
    genre: "Action, Crime, Mystery",
    year: "2017",
    rating: "16+",
    cast: "Álvaro Morte, Úrsula Corberó, Itziar Ituño, more",
    tags: "Thrilling, Clever",
    image: "assets/images/money-heist.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 6,
    title: "Dark",
    description:
      "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    genre: "Crime, Drama, Mystery",
    year: "2017",
    rating: "16+",
    cast: "Louis Hofmann, Karoline Eichhorn, Lisa Vicari, more",
    tags: "Mind-bending, Complex",
    image: "assets/images/dark.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 7,
    title: "Narcos",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
    genre: "Biography, Crime, Drama",
    year: "2015",
    rating: "18+",
    cast: "Wagner Moura, Boyd Holbrook, Pedro Pascal, more",
    tags: "Gritty, Based on Real Events",
    image: "assets/images/narcos.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 8,
    title: "The Queen's Gambit",
    description:
      "Orphaned at the tender age of nine, prodigious chess player Beth Harmon is determined to become the world's greatest.",
    genre: "Drama",
    year: "2020",
    rating: "16+",
    cast: "Anya Taylor-Joy, Chloe Pirrie, Bill Camp, more",
    tags: "Inspiring, Brilliant",
    image: "assets/images/queens-gambit.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 9,
    title: "Bridgerton",
    description:
      "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
    genre: "Drama, Romance",
    year: "2020",
    rating: "16+",
    cast: "Phoebe Dynevor, Regé-Jean Page, Jonathan Bailey, more",
    tags: "Romantic, Lavish",
    image: "assets/images/bridgerton.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 10,
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.",
    genre: "Crime, Drama",
    year: "2013",
    rating: "18+",
    cast: "Cillian Murphy, Paul Anderson, Helen McCrory, more",
    tags: "Stylish, Violent",
    image: "assets/images/peaky-blinders.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 11,
    title: "Wednesday",
    description:
      "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability.",
    genre: "Comedy, Fantasy, Horror",
    year: "2022",
    rating: "13+",
    cast: "Jenna Ortega, Emma Myers, Hunter Doohan, more",
    tags: "Quirky, Dark Comedy",
    image: "assets/images/wednesday.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 12,
    title: "Squid Game",
    description:
      "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize.",
    genre: "Action, Drama, Mystery",
    year: "2021",
    rating: "18+",
    cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-joon, more",
    tags: "Brutal, Provocative",
    image: "assets/images/squid-game.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 13,
    title: "Vikings",
    description:
      "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer.",
    genre: "Action, Adventure, Drama",
    year: "2013",
    rating: "18+",
    cast: "Travis Fimmel, Katheryn Winnick, Clive Standen, more",
    tags: "Epic, Historical",
    image: "assets/images/vikings.jpg",
    video: "assets/video/preview.mp4",
  },
  {
    id: 14,
    title: "The Umbrella Academy",
    description: "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
    genre: "Action, Adventure, Comedy",
    year: "2019",
    rating: "16+",
    cast: "Elliot Page, Tom Hopper, David Castañeda, more",
    tags: "Quirky, Superhero",
    image: "assets/images/umbrella-academy.jpg",
    video: "assets/video/preview.mp4",
  },
]

// Header scroll effect
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Video Modal

const videoModal = document.getElementById("videoModal")
const modalVideo = document.getElementById("modalVideo")
const videoModalClose = document.getElementById("videoModalClose")
const heroPlayBtn = document.getElementById("heroPlayBtn")

heroPlayBtn.addEventListener("click", () => {
  openVideoModal()
})

function openVideoModal() {
  videoModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Make sure video is ready + plays
  modalVideo.load()
  modalVideo.play().catch(() => {})

  // Fullscreen request
  const requestFS =
    modalVideo.requestFullscreen ||
    modalVideo.webkitRequestFullscreen ||
    modalVideo.msRequestFullscreen

  if (requestFS) {
    requestFS.call(modalVideo).catch(() => {})
  } else if (modalVideo.webkitEnterFullscreen) {
    // iPhone Safari fallback
    modalVideo.webkitEnterFullscreen()
  }
}

videoModalClose.addEventListener("click", () => {
  closeVideoModal()
})

videoModal.querySelector(".modal-overlay").addEventListener("click", () => {
  closeVideoModal()
})

function closeVideoModal() {
  // Exit fullscreen first (prevents that stuck grey player)
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {})
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen()
  }

  // Stop video
  modalVideo.pause()
  modalVideo.currentTime = 0

  // Hide modal
  videoModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Auto-close modal when exiting fullscreen (ESC/back)
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && videoModal.classList.contains("active")) {
    closeVideoModal()
  }
})

document.addEventListener("webkitfullscreenchange", () => {
  if (!document.webkitFullscreenElement && videoModal.classList.contains("active")) {
    closeVideoModal()
  }
})


// Open video modal from hero
heroPlayBtn.addEventListener("click", () => {
  openVideoModal()
})
function openVideoModal() {
  videoModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // play first (helps with browser rules)
  modalVideo.play()

  // request fullscreen on the video
  const requestFS =
    modalVideo.requestFullscreen ||
    modalVideo.webkitRequestFullscreen ||
    modalVideo.msRequestFullscreen

  if (requestFS) {
    requestFS.call(modalVideo).catch(() => {})
  } else if (modalVideo.webkitEnterFullscreen) {
    // iPhone Safari fallback
    modalVideo.webkitEnterFullscreen()
  }
}

// Info Modal
const infoModal = document.getElementById("infoModal")
const infoModalClose = document.getElementById("infoModalClose")
const heroInfoBtn = document.getElementById("heroInfoBtn")
const infoTitleStyled = document.getElementById("infoTitleStyled")
const infoDescription = document.getElementById("infoDescription")
const infoGenre = document.getElementById("infoGenre")
const infoYear = document.getElementById("infoYear")
const infoCast = document.getElementById("infoCast")
const infoModalVideo = document.getElementById("infoModalVideo")
const addToListBtn = document.getElementById("addToListBtn")
const likeBtn = document.getElementById("likeBtn")
const volumeBtn = document.getElementById("volumeBtn")

// Open info modal from hero
heroInfoBtn.addEventListener("click", () => {
  openInfoModal(moviesData[0])
})

document.querySelectorAll(".movie-card").forEach((card) => {
  card.addEventListener("click", () => {
    const movieId = Number.parseInt(card.getAttribute("data-id"))
    const movieData = moviesData.find((movie) => movie.id === movieId)

    if (movieData) {
      openInfoModal(movieData)
    }
  })
})

function openInfoModal(movieData) {
  infoTitleStyled.textContent = movieData.title
  infoDescription.textContent = movieData.description
  infoGenre.textContent = movieData.genre
  infoYear.textContent = movieData.year
  infoCast.textContent = movieData.cast

  infoModal.classList.add("active")
  infoModalVideo.play()
  document.body.style.overflow = "hidden"
}

infoModalClose.addEventListener("click", () => {
  closeInfoModal()
})

infoModal.querySelector(".modal-overlay").addEventListener("click", () => {
  closeInfoModal()
})

function closeInfoModal() {
  infoModal.classList.remove("active")
  infoModalVideo.pause()
  infoModalVideo.currentTime = 0
  document.body.style.overflow = ""

  // Reset button states
  addToListBtn.classList.remove("active")
  likeBtn.classList.remove("active")
}

addToListBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  addToListBtn.classList.toggle("active")

  if (addToListBtn.classList.contains("active")) {
    addToListBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    `
  } else {
    addToListBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    `
  }
})

likeBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  likeBtn.classList.toggle("active")
})

let isMuted = true
volumeBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  isMuted = !isMuted
  infoModalVideo.muted = isMuted

  if (isMuted) {
    volumeBtn.innerHTML = `
      <svg class="volume-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    `
  } else {
    volumeBtn.innerHTML = `
      <svg class="volume-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    `
  }
})

const notificationBtn = document.getElementById("notificationBtn")
const notificationDropdown = document.getElementById("notificationDropdown")

notificationBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  notificationDropdown.classList.toggle("active")
  profileDropdown.classList.remove("active")
})

const profileBtn = document.getElementById("profileBtn")
const profileDropdown = document.getElementById("profileDropdown")

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  profileDropdown.classList.toggle("active")
  notificationDropdown.classList.remove("active")
})

document.addEventListener("click", (e) => {
  if (!e.target.closest(".profile-container")) {
    profileDropdown.classList.remove("active")
  }
  if (!e.target.closest(".notification-btn") && !e.target.closest(".notification-dropdown")) {
    notificationDropdown.classList.remove("active")
  }
  if (!e.target.closest(".search-box") && !e.target.closest(".search-icon-btn")) {
    searchBox.classList.remove("active")
    searchInput.value = ""
    showAllMovies()
  }
})

const searchIconBtn = document.getElementById("searchIconBtn")
const searchBox = document.getElementById("searchBox")
const searchInput = document.getElementById("searchInput")
const searchCloseBtn = document.getElementById("searchCloseBtn")
const movieCards = document.querySelectorAll(".movie-card")

searchIconBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  searchBox.classList.toggle("active")
  if (searchBox.classList.contains("active")) {
    searchInput.focus()
  } else {
    searchInput.value = ""
    showAllMovies()
  }
})

searchCloseBtn.addEventListener("click", () => {
  searchBox.classList.remove("active")
  searchInput.value = ""
  showAllMovies()
})

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase()

  movieCards.forEach((card) => {
    const movieId = Number.parseInt(card.getAttribute("data-id"))
    const movieData = moviesData.find((movie) => movie.id === movieId)

    if (movieData && movieData.title.toLowerCase().includes(query)) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
})

function showAllMovies() {
  movieCards.forEach((card) => {
    card.style.display = "block"
  })
}

// Slider functionality
const sliderButtons = document.querySelectorAll(".slider-btn")

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rowIndex = button.getAttribute("data-row")
    const rowPosters = document.querySelector(`.row-posters[data-row="${rowIndex}"]`)
    const scrollAmount = 600

    if (button.classList.contains("slider-btn-left")) {
      rowPosters.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    } else {
      rowPosters.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  })
})

document.querySelectorAll(".row-posters").forEach((row) => {
  const rowIndex = row.getAttribute("data-row")
  const leftBtn = document.querySelector(`.slider-btn-left[data-row="${rowIndex}"]`)
  const rightBtn = document.querySelector(`.slider-btn-right[data-row="${rowIndex}"]`)

  function updateButtons() {
    leftBtn.style.display = row.scrollLeft > 0 ? "flex" : "none"
    rightBtn.style.display = row.scrollLeft < row.scrollWidth - row.clientWidth - 10 ? "flex" : "none"
  }

  updateButtons()
  row.addEventListener("scroll", updateButtons)
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (videoModal.classList.contains("active")) {
      closeVideoModal()
    }
    if (infoModal.classList.contains("active")) {
      closeInfoModal()
    }
    if (profileDropdown.classList.contains("active")) {
      profileDropdown.classList.remove("active")
    }
    if (notificationDropdown.classList.contains("active")) {
      notificationDropdown.classList.remove("active")
    }
    if (searchBox.classList.contains("active")) {
      searchBox.classList.remove("active")
      searchInput.value = ""
      showAllMovies()
    }
  }
})
