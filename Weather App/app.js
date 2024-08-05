const apiKey = "6777c3fba4bc4a62bfc55741240508";
const apiUrl = `https://api.weatherapi.com/v1/current.json`;

const form = document.querySelector("#form1");

const addDetails = (data) => {
    const img1 = document.createElement("img");
    img1.src = data.current.condition.icon;
    document.querySelector("#div1").append(img1);

    document.querySelector("#temp").append(`${data.current.temp_c}°C`);
    document.querySelector("#place").append(`${data.location.name}`);

    const img2 = document.createElement("img");
    img2.src = "images/humidity.png";
    const sp1 = document.createElement("span");
    sp1.id = "sp1";
    sp1.innerText = `${data.current.humidity}%`;
    document.querySelector("#humidity").append(img2,sp1);
    
    const img3 = document.createElement("img");
    img3.src = "images/wind.png";
    const sp2 = document.createElement("span");
    sp2.innerText = `${data.current.wind_kph} km/h`;
    document.querySelector("#wind-speed").append(img3, sp2);

    const sp3 = document.createElement("span");
    const sp4 = document.createElement("span");
    sp3.innerText = "Humidity";
    sp4.innerText = "Wind Speed";
    document.querySelector("#div4").append(sp3, sp4);
}

function clearAll() {
    try {
        document.querySelector("#div1 img").remove();
        document.querySelector("#temp").innerText = "";
        document.querySelector("#place").innerText = "";
        document.querySelector("#humidity").innerText = "";
        document.querySelector("#wind-speed").innerText = "";
        document.querySelector("#div4 span").remove();
        document.querySelector("#div4 span").remove();
    }
    catch (e) {
        console.log(e);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const place = document.querySelector("input").value;
    const config = { params: { q: place, key: apiKey } };
    const res = await axios.get(apiUrl, config);
    const data = res.data;
    console.log(data);

    clearAll();
    addDetails(data);
});
