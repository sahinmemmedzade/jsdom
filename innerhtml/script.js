const head = document.getElementsByTagName("header")[0]
head.innerHTML = `
<div
            style="display: flex; justify-content: space-around;background-color:blue; align-items: center;">
            <div class="sekil">
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                        style="width:60px;height:60px " alt=""></a>
            </div>
            <ul style="display: flex; gap: 20px; list-style: none;">
                <li><a style="color: white;text-decoration: none;" href="">Home</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Contact</a></li>
                <li><a style="color: white;text-decoration: none;" href="">About</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Blog</a></li>
                <li><a style="color: white;text-decoration: none;" href="">Service</a></li>
            </ul>
</div>
 
`
