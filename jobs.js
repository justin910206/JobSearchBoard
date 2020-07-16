const submit_btn = document.getElementById("submitBtn")
// create submit button to click
submit_btn.addEventListener("click", (e) => {

    e.stopPropagation()
    

    const description = document.getElementById("description");
    const location = document.getElementById("location");
    const full_time = document.getElementById("full_time");
    const part_time = document.getElementById("part_time");
    const remote = document.getElementById("remote");


    //vaildate description or location is not empty
    if((description.value != "" && description.value != null) || (location.value != "" && location.value != null)){
        //build query 
        let query = "https://jobs.github.com/positions.json?"
        if(description.value != "" && description.value != null){
            //include decription to query
            query += `description=${description.value}`
        }
        if(location.value != "" && location.value != null){
            //include location to query
            query += `&location=${location.value}`
        }
        if(full_time.checked){
            //include full_time to query
            query += "&full_time=true"
        }
        if(part_time.checked){
            //include part_time to query
            query += "&part_time=true"
        }
        if(remote.checked){
            //include remote to query
            query += "&remote=true"
        }

        fetch(query)
            .then((response) => response.json())
            .then((data) => {
                data.forEach(job => {
                    makeJobCard(job)
                });
            });

    } else {
        //notify user they have to fill in Descr or location
        function validateForm(){
            const makeJobCard = document.forms["myform"]["fname"].value;
            if (makeJobCard
               == "") {
                alert("field must have data");
                return false;
            }
        }
    }
    e.preventDefault()
});

function makeJobCard(result) {
    const newCard = document.createElement("div");
    newCard.classList.add("card", "m-3");
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = result.company_logo;
    newCard.appendChild(cardImage);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title", "text-center");
    cardTitle.textContent = result.title;
    cardBody.appendChild(cardTitle);
    newCard.appendChild(cardBody);
    const jobs_container = document.getElementById("jobs_container");
    jobs_container.appendChild(newCard);
    

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-img-top");
    cardDescription.src = result.description;
    newCard.appendChild(cardImage);
}
//notify user they have to fill in Descr or location
  


  //fetch from API
        //build cards for all the jobs
        //throw cards into jobs container

    
//     makeKeywordCard(searchField.value);
// // create search button to link to back end
// function jobSearch(e){
//     e.stopPropagation()
//     e.preventDefault()
//     const searchResultContainer = document.getElementById("search_result_container");
//     searchResultContainer.innerHTML = "";
//     const keyword = encodeURIComponent(e.target.textContent);
//     console.log(keyword);
//     const url = `${keyword}`;

//create soemthing to ensure all fields are filled
