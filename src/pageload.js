const pageload = (() => {
    const content = document.querySelector("#content");

    const mainHeader = document.createElement("div");
    mainHeader.id = "main-header";
    mainHeader.innerHTML = `<div id="nav">
        <div class="nav-item" id="item-home">Home</div>
        <div class="nav-item">About</div>
        <div class="nav-item">Menu</div>
        <div class="nav-item">Order Online</div>
    </div>`;

    content.appendChild(mainHeader);
})();