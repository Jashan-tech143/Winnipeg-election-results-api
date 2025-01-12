/******w**************
    
    Name: Jashanpreet kaur
    Date: 13-10-2024
    Description: The JavasCript files includes information about fetching winnipeg elections results using API url and displays it on webpage by creating dynamic html elements to store it.

*********************/

function fetchData() {
    let candidate_name = document.getElementById('Candname').value.trim();
    let year = document.getElementById('Year').value.trim();

    //   console.log(candidate_name)
    if (!candidate_name && !year) {
        alert('Please enter either candidate name or year.');
        return; // stops the function
    }

    let apiURL = `https://data.winnipeg.ca/resource/....`; //replace with your API key here


    const filter = [];

    if (candidate_name) {
        filter.push(`lower(candidate) LIKE lower('%${candidate_name}%')`);
    }
    if (year) {
        filter.push(`date >= '${year}-01-01T00:00:00' AND date <= '${year}-12-31T23:59:59'`);
    }

    console.log(year)
    apiURL += `$where=${filter.join(' AND ')}&$order=date DESC&$limit=50`;

    const encodedURL = encodeURI(apiURL);

    //debugging
    console.log(encodedURL)

    //fetching data from url
    fetch(encodedURL)
        .then(response => response.json()) // parsing json data
        .then(data => {

            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';

            if (data.length === 0) {
                resultsContainer.innerText = 'No results found!';
            }
            else {
                const mainHeading = document.createElement('h3');
                mainHeading.textContent = `Search Results: `;
                resultsContainer.appendChild(mainHeading);

                //loop through the results
                data.forEach(element => {
                    const resultElement = document.createElement('div');
                    resultElement.classList.add('result-element');

                    //Add content to results container
                    const candidate = document.createElement('p');
                    candidate.innerText = `Candidate: ${element.candidate}`;
                    resultElement.appendChild(candidate);

                    //position 
                    const position = document.createElement('p');
                    position.innerText = `Position: ${element.position}`;
                    resultElement.appendChild(position);

                    //Area
                    const area = document.createElement('p');
                    area.innerText = `Area: ${element.area}`;
                    resultElement.appendChild(area);

                    //Votes
                    const votes = document.createElement('p');
                    votes.innerText = `Votes: ${element.votes}`;
                    resultElement.appendChild(votes);

                    //Won or not shows Check or cross mark
                    const won = document.createElement('p');
                    won.innerText = `Won: ${element.won === 'Yes' ? '\u2714' : '\u274C'}`;
                    resultElement.appendChild(won);

                    // Date election held/ elected
                    const date = document.createElement('p');
                    date.innerText = `Date: ${new Date(element.date).toLocaleDateString()}`;
                    resultElement.appendChild(date);

                    //Append each result element to the container
                    resultsContainer.appendChild(resultElement);

                    const sepratorResult = document.createElement('hr');
                    resultsContainer.appendChild(sepratorResult);
                });


                // console.log(data); for troubleshooting purposes
            }
        })
        .catch(error => {
            console.error('Error: ', error)
        });
}
