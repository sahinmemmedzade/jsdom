const head= document.getElementsByTagName("header")[0]
const nav = document.createElement("navbar")
const img = document.createElement("img")
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const a1 = document.createElement("a")
const a2 = document.createElement("a")
const a3 = document.createElement("a")
const a4 = document.createElement("a")
const a5 = document.createElement("a")
a1.textContent = "Home"
a2.textContent = "About"
a3.textContent = "Contact"
a4.textContent = "Blog"
a5.textContent = "Service"
a1.href = "google.com"
a2.href = "google.com"
a3.href = "google.com"
a4.href = "google.com"
a5.href = "google.com"
li1.append(a1)
li2.append(a2)
li3.append(a3)
li4.append(a4)
li5.append(a5)
ul.append(li1, li2, li3, li4, li5)
nav.append(img)
nav.append(ul)
head.append(nav)
img.style.width = "60px"
img.style.height = "60px"
nav.style.backgroundColor = "blue"
ul.style.display = "flex"
ul.style.gap = "20px"
nav.style.display = "flex"
nav.style.justifyContent = "space-around"
nav.style.alignItems = "alignItems"
a1.style.textDecoration = "none"
a2.style.textDecoration = "none"
a3.style.textDecoration = "none"
a4.style.textDecoration = "none"
a5.style.textDecoration = "none"
a1.style.color = "white"
a2.style.color = "white"
a3.style.color = "white"
a4.style.color = "white"
a5.style.color = "white"
li1.style.listStyle = "none"
li2.style.listStyle = "none"
li3.style.listStyle = "none"
li4.style.listStyle = "none"
li5.style.listStyle = "none"
img.style.cursor = "pointer"