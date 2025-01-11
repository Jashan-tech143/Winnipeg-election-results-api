# Winnipeg Election Results API Viewer

The ***Winnipeg Election Results API Viewer*** is a client-side web application that retrieves and displays election results from the Winnipeg Elections API. The application allows users to search election results by candidate name and election year. Results are dynamically fetched and displayed using JavaScript (AJAX), providing a real-time, interactive experience.
---

This project serves as an example of using the fetch API to interact with external datasets and dynamically display data in a user-friendly interface.
---

**Features**
Search by *Candidate Name*: Filter results based on the name of the candidate.
Search by *Year*: Filter results based on the election year.
----
*Dynamic Display*: Results are displayed dynamically as soon as the user enters search parameters.
*Vote Results*: Displays candidate names, positions, area, votes received, whether they won, and the election date.

---
**Technologies Used**
HTML: Basic structure of the webpage.
CSS: Custom styling to ensure a user-friendly experience.
JavaScript (AJAX): Used for making asynchronous requests to the Winnipeg Elections API and dynamically updating the UI with the results.
API: Winnipeg Elections API provides the data for election results.

**Usage & Installation**

1. Download or clone the repository to your local system.
2. Open the index.html file in any modern web browser (e.g., Chrome, Firefox).

***How to Use***
- Enter a Candidate Name or Election Year (or both) in the input fields.
- Click on the Search Button to initiate the API request.
- The page will display the relevant results, including:
        Candidate name
        Position (e.g., Mayor, Councillor)
        Area
        Number of votes
        Whether the candidate won the election (✓ or ✘)
        Election date
        If no results match, a *"No results found!"* message will appear.

**Acknowledgements**
*Winnipeg Elections API*: All election data is provided by the Winnipeg Elections API, which makes public election data available for open access.


# For any inquiries or feedback, feel free to open an issue or contact me at Jashanpreetkaur110424@gmail.com