fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        data.forEach((coin) => {
            let coinImage = document.createElement("img")
            coinImage.className = 'coin'
            coinImage.src = coin.image
            let mainCoins = document.getElementById("coins");
            mainCoins.append(coinImage)


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
