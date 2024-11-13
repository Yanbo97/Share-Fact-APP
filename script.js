const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".facts-list");
// creat DOM elements: Render facts in list
factList.innerHTML = "";

// Load data from
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://gwgmkvqwnxcrotyuugnp.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Z21rdnF3bnhjcm90eXV1Z25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MzYyMjEsImV4cCI6MjA0NzAxMjIyMX0.3SR4m1qF5HI3Nf9Ow3Yf_Ge7PrDLsxFb_5RD9mRqft0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Z21rdnF3bnhjcm90eXV1Z25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MzYyMjEsImV4cCI6MjA0NzAxMjIyMX0.3SR4m1qF5HI3Nf9Ow3Yf_Ge7PrDLsxFb_5RD9mRqft0",
      },
    }
  );
  const data = await res.json();
  //   const filteredData = data.filter((fact) => fact.category === "society");
  //   console.log(data);
  createFactList(data);
}

function createFactList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
        <p>
        ${fact.text}
        <a
        class="source"
        href="${fact.source}"
        target = "_blank"
          >(Source)</a
        >
         </p>
         <span class="tag" style="background-color: ${
           CATEGORIES.find((cat) => cat.name === fact.category).color
         }"
        >${fact.category}</span
          >
        </li>`
  );
  const html = htmlArray.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}

// Toggle from visibility
btn.addEventListener("click", function () {
  console.log("CLICK SHARE A FACT");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// const CalFactAge = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `Impossible Year, year needs to be less than or equal to ${new Date().getFullYear()}`;
// console.log(CalFactAge(2015));

// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact[0]);
// const [text, createdIn] = fact;
// console.log(createdIn);
// const newFact = [...fact, "society"];
// console.log(newFact);
// const factObj = {
//   text: "Lisbon is the capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The fact "${
//       this.text
//     }" is from the category ${this.category.toUpperCase()}`;
//   },
// };
// console.log(factObj.text);

// const { category, isCorrect } = factObj;
// console.log(factObj.createSummary());
// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });
// // const time10 = [2, 4, 6, 5].map(function (el) {
// //   return el * 10;
// // });

// const time10 = [2, 4, 6, 5].map((el) => el * 10);
// console.log(time10);

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);
