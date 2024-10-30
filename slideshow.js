//this is the data for holding which page we're on
let pageNumber = 0;

// pick the relevant tag
const nextTag = document.querySelector('footer img.next');
const prevTag = document.querySelector('footer img.prev');
const outputTag = document.querySelector('h1');

// make a next function by increasing the pageNumber by +1
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > 4) {
    pageNumber = 1;
  }

  updateSection();
};

// make a prev function by decreasing the pageNumber by -1
const prev = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 1) {
    pageNumber = 4;
  }

  updateSection();
};

// this will update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

// on-click of the nextTag, run this
nextTag.addEventListener('click', function () {
  next();
});

// on-click of the prevTag, run this
prevTag.addEventListener('click', function () {
  prev();
});
