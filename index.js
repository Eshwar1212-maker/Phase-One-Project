fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        data.forEach((coin) => {
            let coinImage = document.createElement("img")
            coinImage.className = 'coin'
            coinImage.src = coin.image
            let mainCoins = document.getElementById("coins");
            //mainCoins.append(coinImage)
            let coinframe = document.createElement("div")
            coinframe.className = "coin-frame"
            mainCoins.append(coinframe)
            console.log(coinframe)
            let coinCard = document.createElement("div")
            coinCard.className = "coin-card"
            coinframe.appendChild(coinCard)
            let coinFront = document.createElement("div")
            coinFront.className = "coin-front"
            coinCard.append(coinFront)
            //console.log(coinBack)
           let coinBack = document.createElement("div")
           coinBack.className = "coin-back"
           // coinCard.append(coinBack)
            coinFront.append(coinImage)


            coinImage.addEventListener('click', () => {
                console.log("Coin name is " + coin.name);
                console.log(coin.current_price);
                document.getElementById("coin-title").textContent = coin.name
                document.getElementById("coin-price").textContent = "Coin Price: " + coin.current_price
                document.getElementById("market-cap").textContent = "Coin Market Cap: " + coin.market_cap
                document.getElementById("coin-supply").textContent = "Coin Max Supply: " + coin.max_supply
                document.getElementById("coin-volume").textContent = "Coin Volume: " + coin.total_volume
            })

            let form = document.getElementById("form")
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                let inputSearchValue = document.getElementById("input").value
                if (inputSearchValue.toLowerCase() !== coin.name.toLowerCase()) {
                    console.log(data);
                    coinImage.classList.add("hidden")
                }
            })
        })
    })
const search = (coin) => {

}
//Dark Mode Toggle NEED TO MERGE//
const icon = document.getElementById("color-mode")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "dark-theme-icon/moon.png";
        console.log(icon.src)
    } else {
        icon.src = "dark-theme-icon/sun.png";
    }
}