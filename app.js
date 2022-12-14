let header = document.createElement("header");
header.setAttribute("class","header");
header.setAttribute("id","header");
header.innerHTML = `
<div class="container">
    <div class="header-inner">
        <a class="logo">
            Пудин Михаил  </a>
        <ul class="social">
            <li><a href="https://github.com/Alexfokss"><i class="fa-brands fa-github"></i></a></li> 
            <li><a href="https://vk.com/m.onolit"><i class="fa-brands fa-vk"></i></a></li>
            <li><a href="https://web.telegram.org/k/#5362492799"><i class="fa-brands fa-telegram"></i></a></li>
        </ul>
    <nav class="nav" id="nav">
        <li><a href="contacts.html"><i class="fa-solid fa-address-card"></i><span>Контакты</span></a></li>
        <li><a href="index.html"><i class="fa-solid fa-user"></i><span>Обо мне</span></a></li>
    </nav>
    </div>
</div>
`
document.querySelector("body")?.append(header)




let footer = document.createElement("footer");
footer.setAttribute("class","footer-distributed");
footer.setAttribute("id","footer-distributed");
footer.innerHTML = `
    <div class="footer-left">
        <p class="footer-links">
            <a class="link-1" href="#">На главную</a>
            <a href="#">Обо мне</a>
            <a href="contacts.html">Контакты</a> 
        </p> 
        <p>Пудин Михаил © 2022</p>
    </div>
    <div class="footer-right">
        <a href="https://github.com/Alexfokss"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://vk.com/m.onolit"><i class="fa fa-vk" aria-hidden="true"></i></a>
        <a href="https://web.telegram.org/k/#5362492799"><i class="fa fa-telegram" aria-hidden="true"></i></a>
    </div>
    `
    document.querySelector("body")?.append(footer)

