function createCounter() {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.gap = "10px";
    wrap.style.alignItems = "center";
    wrap.style.fontSize = "20px";
    wrap.style.margin = "20px";

    const plus = document.createElement("div");
    plus.textContent = "+";
    plus.style.cursor = "pointer";
    plus.style.padding = "5px 10px";
    plus.style.border = "1px solid #aaa";

    const value = document.createElement("span");
    value.textContent = "1";
    const minus = document.createElement("div");
    minus.textContent = "-";
    minus.style.cursor = "pointer";
    minus.style.padding = "5px 10px";
    minus.style.border = "1px solid #aaa";

    plus.addEventListener("click", () => value.textContent = Number(value.textContent) + 1);
    plus.style.backgroundColor = "red"
    minus.addEventListener("click", () => value.textContent = Number(value.textContent) - 1);
    minus.style.backgroundColor = "blue"

    wrap.appendChild(plus);
    wrap.appendChild(value);
    wrap.appendChild(minus);

    document.body.appendChild(wrap);
}


function createCard() {
    const container = document.createElement("div");
    container.style.margin = "20px";

    const showBtn = document.createElement("button");
    showBtn.textContent = "Show";
    showBtn.style.marginRight = "10px";
    showBtn.style.backgroundColor = "yellow"


    const hideBtn = document.createElement("button");
    hideBtn.textContent = "Hide";
    hideBtn.style.backgroundColor = "green"

    const card = document.createElement("div");
    card.style.width = "200px";
    card.style.padding = "10px";
    card.style.border = "1px solid #aaa";
    card.style.marginTop = "10px";
    card.style.display = "none";

    const img = document.createElement("img");
    img.src = "img/gettyimages-2236821230-612x612.jpg";
    img.style.width = "100%";


    const text = document.createElement("p");
    text.textContent = "Bu kartochkadagi matn.";

    card.appendChild(img);
    card.appendChild(text);

    showBtn.addEventListener("click", () => {
        card.style.display = "block";
    });

    hideBtn.addEventListener("click", () => {
        card.style.display = "none";
    });

    container.appendChild(showBtn);
    container.appendChild(hideBtn);
    container.appendChild(card);

    document.body.appendChild(container);
}
function createInputPress() {
    const wrap = document.createElement("div");
    wrap.style.margin = "20px";

    const input = document.createElement("input");
    input.type = "text";
    input.style.padding = "5px";
    input.style.marginRight = "10px";
    input.style.backgroundColor = "green"
    const pressBtn = document.createElement("button");
    pressBtn.textContent = "Press";
    pressBtn.style.backgroundColor = "black"
    pressBtn.style.color = "white"

    const preview = document.createElement("div");
    preview.style.marginTop = "10px";
    preview.style.fontSize = "18px";

    const card = document.createElement("div");
    card.style.display = "none";
    card.style.marginTop = "10px";
    card.style.padding = "10px";
    card.style.border = "1px solid #aaa";
    card.style.width = "220px";

    input.addEventListener("input", () => {
        preview.textContent = input.value;
        if (input.value.trim() === "") {
        preview.textContent = "";
        }
    });

pressBtn.addEventListener("click", () => {
    card.textContent = "Siz jo‘natdingiz: " + input.value;
    card.style.display = "block";
});

wrap.appendChild(input);
wrap.appendChild(pressBtn);
wrap.appendChild(preview);
wrap.appendChild(card);

document.body.appendChild(wrap);
}


createCounter();
createCard();
createInputPress();