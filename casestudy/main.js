const heartButton = document.querySelector("#heart-button");
const heartIcon = document.querySelector("#heart-icon");
const bagButton = document.querySelector("#bag-button");
const bagText = document.querySelector("#bag-text")
const bagIcon = document.querySelector("#bag-icon")

const unheartSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="0000">
    <path d="M479.62-171.62q-12.85 0-25.81-4.61-12.96-4.62-22.81-14.46l-57.46-52.23q-106.38-97-189.96-190.58Q100-527.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q48.38 0 95.58 22.31 47.19 22.31 84.42 72.46 37.23-50.15 84.42-72.46Q611.62-834 660-834q85.15 0 142.58 57.42Q860-719.15 860-634q0 108.08-85 202.73-85 94.65-189.54 188.96l-56.85 51.62q-9.84 9.84-22.99 14.46-13.16 4.61-26 4.61Zm-28.39-506.84q-32.46-49.46-68.35-72.5Q347-774 300-774q-60 0-100 40t-40 100q0 48.15 31.04 100.69t77.92 104.46q46.88 51.93 101.58 101.46 54.69 49.54 101.38 92.08 3.46 3.08 8.08 3.08t8.08-3.08q46.69-42.54 101.38-92.08 54.7-49.53 101.58-101.46 46.88-51.92 77.92-104.46Q800-585.85 800-634q0-60-40-100t-100-40q-47 0-82.88 23.04-35.89 23.04-68.35 72.5-5.08 7.69-12.77 11.54-7.69 3.84-16 3.84-8.31 0-16-3.84-7.69-3.85-12.77-11.54ZM480-502.54Z"/>
  /svg>
`;

const heartSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="0000">
    <path d="M479.62-171.62q-12.85 0-25.81-4.61-12.96-4.62-22.81-14.46l-57.46-52.23q-106.38-97-189.96-190.58Q100-527.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q48.38 0 95.58 22.31 47.19 22.31 84.42 72.46 37.23-50.15 84.42-72.46Q611.62-834 660-834q85.15 0 142.58 57.42Q860-719.15 860-634q0 108.08-85 202.73-85 94.65-189.54 188.96l-56.85 51.62q-9.84 9.84-22.99 14.46-13.16 4.61-26 4.61Z"/>
  </svg>
`

const bagSVG = `
  <svg fill="currentColor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11v3h8v-3c0-2.188-1.813-4-4-4-2.25 0-4 1.813-4 4Zm-3 6H9v13c0 1.688 1.313 3 3 3h16a3 3 0 0 0 3-3V17h-4v3.5c0 .875-.688 1.5-1.5 1.5-.875 0-1.5-.625-1.5-1.5V17h-8v3.5c0 .875-.688 1.5-1.5 1.5-.875 0-1.5-.625-1.5-1.5V17Zm0-3v-3c0-3.813 3.125-7 7-7 3.813 0 7 3.188 7 7v3h4c1.625 0 3 1.375 3 3v13c0 3.313-2.688 6-6 6H12c-3.313 0-6-2.688-6-6V17a3 3 0 0 1 3-3h4Z"/>
  </svg>
`;

const checkmarkSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24px" viewBox="0 -960 960 960" width="24px">
    <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"/>
  </svg>
`;

let toggled = false;

heartButton.addEventListener("click", () => {
  toggled = !toggled;
  heartIcon.style.opacity = 0;

  if (toggled) {
    setTimeout(function () {
      heartIcon.innerHTML = heartSVG;
      heartIcon.style.opacity = 1
    }, 150);
  } else {
    setTimeout(function () {
      heartIcon.innerHTML = unheartSVG;
      heartIcon.style.opacity = 1
    }, 150);
  }

  heartIcon.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(-45deg)" }],
    { duration: 75, easing: "ease", fill: "forwards" }
  ).finished

  .then(() => new Promise(res => setTimeout(res, 1)))

  .then(() =>
    heartIcon.animate(
      [{ transform: "rotate(-45deg)" }, { transform: "rotate(45deg)" }],
      { duration: 200, easing: "ease", fill: "forwards" }
    ).finished
  )

  .then(() => new Promise(res => setTimeout(res, 1)))

  .then(() =>
    heartIcon.animate(
      [{ transform: "rotate(45deg)" }, { transform: "rotate(-45deg)" }],
      { duration: 200, easing: "ease", fill: "forwards" }
    ).finished
  )

  .then(() => new Promise(res => setTimeout(res, 1)))

  .then(() =>
    heartIcon.animate(
      [{ transform: "rotate(-45deg)" }, { transform: "rotate(45deg)" }],
      { duration: 200, easing: "ease", fill: "forwards" }
    ).finished
  )

  .then(() => new Promise(res => setTimeout(res, 1)))

  .then(() =>
    heartIcon.animate(
      [{ transform: "rotate(45deg)" }, { transform: "rotate(0deg)" }],
      { duration: 200, easing: "ease", fill: "forwards" }
    ).finished
  );
})

bagButton.addEventListener("click", () => {
  bagText.innerHTML = "Added!";
  bagText.style.color = "#F47D20";
  bagIcon.innerHTML = checkmarkSVG;
  bagButton.classList.add("black");

  setTimeout(()=>{
    bagText.innerHTML = "Add to Bag";
    bagText.style.color = "";
    bagIcon.innerHTML = bagSVG;
    bagButton.classList.remove("black");
  }, 800)
})