function drawLayout(element, children) {
    element.innerHTML = `
        <link rel="stylesheet" href="../styles/default.css">
        <header>
            <div class="navbar">
                <img src="./images/Logo.png" alt="logo">
                <input type="search" placeholder="Search">
                <div class="functions">
                    <img src="./images/1.png" alt="home">
                    <img src="./images/2.png" alt="messege">
                    <img src="./images/3.png" alt="">
                    <img src="./images/4.png" alt="like">
                    <div class="profile"></div>
                </div>
            </div>
        </header>
        ${children}
    `
}

drawLayout(document.body, document.body.innerHTML);