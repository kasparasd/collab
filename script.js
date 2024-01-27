let comments = [
  {
    stars: 1,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
        molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
        curabitur in morbi facilisi imperdiet non sollicitudin.`,
    name: "Designation",
  },
  {
    stars: 2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
        molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
        curabitur in morbi facilisi imperdiet non sollicitudin. Molestie volutpat vulputate eu nunc in
        vulputate sit. Varius neque accumsan libero, augue tortor.`,
    name: "Production",
  },
  {
    stars: 3,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
        molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
        curabitur in morbi facilisi imperdiet non sollicitudin. Molestie volutpat vulputate eu nunc in
        vulputate sit. Varius neque accumsan libero, augue tortor. Id metus rutrum fringilla nibh neque, at
        bibendum. Diam libero morbi aliquet mi gravida velit enim.`,
    name: "Result",
  },
];

const commentsSection = document.querySelector(".comments");

function commentHtml() {
  const fullStars = comments[0]["stars"];
  const emptyStars = 5 - fullStars;

  const fullStarsHtml = "<img src='./img/star.png'>".repeat(fullStars);
  const emptyStarsHtml = "<img src='./img/starEmpty.png'>".repeat(emptyStars);

  const html = `
        <div class='commentContainer'>
            <div class="stars">
            ${fullStarsHtml}
            ${emptyStarsHtml}
            </div>
            <div class="comment-container">
            <img class="leftArrow" src="./img/left.png" alt="">
            <div class="comment">
            ${comments[0]["comment"]}
            </div>
            <img class="rightArrow" src="./img/right.png" alt="">
            </div>
            <img src="./img/person.png" alt="">
            <p>${comments[0]["name"]}</p>
        </div>
        `;

  commentsSection.innerHTML = html;

  const leftArr = document.querySelector(".leftArrow");
  const rightArr = document.querySelector(".rightArrow");

  rightArr.addEventListener("click", () => {
    const firstEl = comments.shift();
    comments.push(firstEl);
    document.querySelector(".commentContainer").remove();
    commentHtml();
  });
  leftArr.addEventListener("click", () => {
    const last = comments.slice(-1);
    comments.pop();
    comments.unshift(last[0]);
    document.querySelector(".commentContainer").remove();
    commentHtml();
  });
}
commentHtml();

const plans = [
  {
    cardName: "Basic",
    cardPrice: 5000,
    li: ["Create BoQ", "Release Purchase Orders", "Cash flow analysis"],
  },
  {
    cardName: "Essential",
    cardPrice: 8000,
    li: [
      "Create BoQ",
      "Release Purchase Orders",
      "Cash flow analysis",
      "Vendor App",
      "Site Engineer App",
      "Client App",
    ],
  },
  {
    cardName: "Enterprise",
    cardPrice: "Contact sales team",
    message:
      "Unlock the full power to work effectively. Click “Request Demo” now.",
  },
];

const slider = document.querySelector(".slider");

function plansHtml() {
  let cards = "";

  const plansContainer = document.querySelector(".cards");
  plans.forEach((el) => {
    let price;
    if (
      !slider.classList.contains("monthly") &&
      typeof el["cardPrice"] == "number"
    ) {
      price = el["cardPrice"] * 12 * 0.9;
    } else {
      price = el["cardPrice"];
    }
    let liItems = [];

    if (el["li"]) {
      el["li"].forEach((li) => {
        liItems += `<li><img src="./img/Vector.png" alt="">${li}</li>`;
      });
    }

    let html = `
        <div class="card">
        <p class="card-name">${el["cardName"]}</p>
        <h2 class="card-price">${price}</h2>
        <a class="start-request-demo-button" href="">Request Demo</a>
        `;
    if (el["li"]) {
      html += `
        <ul>
        ${liItems}
      </ul>
      </div>`;
    } else {
      html += `
        <p class="start-pros">${el["message"]}</p>
        </div>`;
    }
    cards += html;
  });
  plansContainer.innerHTML = cards;
}

plansHtml();

slider.addEventListener("click", () => {
  if (slider.classList.contains("monthly")) {
    slider.classList.remove("monthly");
  } else {
    slider.classList.add("monthly");
  }
  plansHtml();
});

// How does Collab-app help section

const vendorBtn = document.querySelector(".b1");
const supervisorBtn = document.querySelector(".b2");

const vendorApp = [
  {
    bold: "Work/Material request:",
    text: "Whenever a client wants to start a work, request notifications with date and time for materials and artisians will be promted through their app",
  },
  {
    bold: "Project Management:",
    text: "Work on multiple projects",
  },
  {
    bold: "Payment:",
    text: "Get paid for the step by step work",
  },
  {
    bold: "Tutorials:",
    text: "Explore the video tutorials to learn",
  },
];
const supervisorApp = [
  {
    bold: "Project Management:",
    text: "Work on multiple projects",
  },
  {
    bold: "Payment:",
    text: "Get paid for the step by step work",
  },
  {
    bold: "Tutorials:",
    text: "Explore the video tutorials to learn",
  },
];

const helpUl = document.querySelector(".help-list");

function helpHtml(arr) {
  let list = "";
  arr.forEach((el) => {
    list += `
    <li><b>${el["bold"]}</b> ${el["text"]}<a class="see-more" href="#"> ...see more</a></li>
    `;
  });
  return  helpUl.innerHTML = list;
}

helpHtml(vendorApp);

vendorBtn.addEventListener("click", function () {
  if (vendorBtn.classList.contains("inactive")) {
    vendorBtn.classList.remove("inactive");
    supervisorBtn.classList.add("inactive");
    helpHtml(vendorApp);
  }
});
supervisorBtn.addEventListener("click", function () {
  if (supervisorBtn.classList.contains("inactive")) {
    supervisorBtn.classList.remove("inactive");
    vendorBtn.classList.add("inactive");
    helpHtml(supervisorApp);
  }
});
