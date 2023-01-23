const renderHomePage = (() => {
    const content = document.querySelector("#content");

    const home = document.createElement("div");
    home.innerHTML = `<div id="page-header">
        <h1 id="page-title">Tonio's<br>Italian Restaurant</h1>
    </div>
    <div id="content-section">
        <h2 id="chef-name">Tonio Trussardi</h2>
        <img src="../dist/imgs/Tonio-Trussardi.png" id="tonio">
    </div>`;

    content.appendChild(home);
})();

export { renderHomePage };