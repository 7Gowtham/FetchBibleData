const API_URL = "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10";

function bibleData(data){
    let chap12 = document.getElementById("chapter12")
    let chap13 = document.getElementById("chapter13")
    chap12.innerHTML="<h2>Chapter 12</h2>";
    chap13.innerHTML="<h2>Chapter 13</h2>";

    data.verses.forEach((e)=>{
        let div = document.createElement("div")
        div.classList.add("card", "mb-3")
        div.innerHTML = `
            <div class="card-body">
                <div><b>Verse:</b>${e.verse}</div>
                <div><b>Text:</b>${e.text}</div>
            </div>
        `
        if(e.chapter === 12){
            chap12.appendChild(div)
        }
        else if(e.chapter === 13){
            chap13.appendChild(div)
        }
    })
}

function showRomans(){
    let chap12 = document.getElementById("chapter12")
    let chap13 = document.getElementById("chapter13")
    let romans = document.getElementById("romans")

    romans.style.display = "block";
    chap12.style.display = "none";
    chap13.style.display = "none";

    romans.innerHTML = `
        <h2>Romans</h2>
        <div>"The book of Romans is one of the longest and most significant things written by the Apostle Paul, formerly known as Saul of Tarsus. Paul was a Jewish rabbi belonging to a group called the Pharisees, and he passionately devoted his life to observing the Torah of Moses and the traditions of Israel. He viewed Jesus and his followers as a threat to these traditions, so he persecuted them. His life was changed, however, when he had a radical encounter with the risen Jesus himself. Paul was commissioned to become an apostle for Jesus, an official representative to the world of non-Jewish people (or Gentiles)."</div>
        <img src = "https://cdn.dribbble.com/users/81958/screenshots/18167287/media/4ce4dc55aa8567d70574e0aeb98027f8.jpg?resize=800x600&vertical=center">
    `

}

function showChapter(chapter){
    let chap12 = document.getElementById("chapter12")
    let chap13 = document.getElementById("chapter13")
    let romans = document.getElementById("romans")

    if(chapter===12){
        romans.style.display = "none";
        chap12.style.display = "block";
        chap13.style.display = "none";
    }
    else if(chapter === 13){
        romans.style.display = "none";
        chap12.style.display = "none";
        chap13.style.display = "block";
    }
}

async function fetchData(){
    try {
        let res = await fetch(API_URL)
        let data = await res.json()
        if(res.status === 200){
            console.log(data)
            bibleData(data)
        }
        else{
            alert(`${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


window.onload = () => {
    fetchData();
    showRomans();
}