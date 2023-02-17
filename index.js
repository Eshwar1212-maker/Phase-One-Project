fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        data.forEach((coin) => {
            let coinImage = document.createElement("img")
            coinImage.className = 'coin'
            let coinInformation = document.getElementsByClassName("coin-information-hidden")
            coinImage.src = coin.image
            let mainCoins = document.getElementById("coins");
            mainCoins.append(coinImage)
<<<<<<< HEAD
            console.log(coinInformation.innerHTML);
            if (coinInformation.textContent === "") {
                coinInformation.classList.add("coin-information-hidden")
            }
=======

 
>>>>>>> 502681de8846321fb3032d361f5f77ad68bdc0b6

            coinImage.addEventListener('click', () => {
                console.log("Coin name is " + coin.name);
                console.log(coin.current_price);
                document.getElementById("coin-title").textContent = coin.name
                document.getElementById("coin-price").textContent = "Coin Price: " + coin.current_price
                document.getElementById("market-cap").textContent = "Coin Market Cap: " + coin.market_cap
                document.getElementById("coin-supply").textContent = "Coin Max Supply: " + coin.max_supply
                document.getElementById("coin-volume").textContent = "Coin Volume: " + coin.total_volume
                document.getElementById("low-24").textContent = "Low 24: " + coin.low_24h;
                document.getElementById("price-change-24").textContent = "Daily change: " + coin.price_change_24h + ", " + coin.price_change_percentage_24h + "%"



            })
            let form = document.getElementById("form")
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                let inputSearchValue = document.getElementById("input").value
                if (inputSearchValue.toLowerCase() !== coin.name.toLowerCase()) {
                    coinImage.classList.add("hidden")
                }
            })
        })
<<<<<<< HEAD
    })


//Dark Mode Toggle NEED TO MERGE//
const icon = document.getElementById("color-mode")
icon.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "dark-theme-icon/moon.png"
        console.log(icon.src)
    } else {
        icon.src = "dark-theme-icon/sun.png"
    }
})

=======

    })
    
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
    })
>>>>>>> 502681de8846321fb3032d361f5f77ad68bdc0b6
