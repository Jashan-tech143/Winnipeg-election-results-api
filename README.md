# Winnipeg Election Results API Viewer

The **Winnipeg Election Results API Viewer** is a client-side web application designed to fetch and display election results from the Winnipeg Elections API. Users can search for election results by candidate name and election year, with results displayed dynamically in real-time using JavaScript (AJAX). This project showcases the use of the `fetch` API to interact with external datasets and display data in a user-friendly interface.

---

## Features
- **Search by Candidate Name**: Filter results based on the name of the candidate.
- **Search by Year**: Filter results by the election year.
- **Dynamic Display**: Election results are fetched and displayed as soon as the user enters search parameters.
- **Vote Results**: Displays key information such as candidate names, positions, area, votes received, whether they won, and the election date.

---

## Technologies Used
- **HTML**: The basic structure of the webpage.
- **CSS**: Custom styling for an enhanced and user-friendly experience.
- **JavaScript (AJAX)**: Used to make asynchronous requests to the Winnipeg Elections API and update the UI dynamically with the results.
- **API**: The Winnipeg Elections API provides the data for election results.

---

## Usage & Installation

1. **Download or Clone** the repository to your local system.
2. **Open** the `index.html` file in any modern web browser (e.g., Chrome, Firefox), and make sure to replace API url with your's.

### How to Use:
- Enter a *Candidate Name* or *Election Year* (or both) in the input fields.
- Click the **Search** button to initiate the API request.
- The page will display relevant results, including:
    - Candidate Name
    - Position (e.g., Mayor, Councillor)
    - Area
    - Number of Votes
    - Election Outcome (✓ or ✘)
    - Election Date
- If no results are found, a *"No results found!"* message will appear.

---

## Acknowledgements
- **Winnipeg Elections API**: All election data is provided by the Winnipeg Elections API, which makes public election data freely accessible.

---

## Contact
For any inquiries or feedback, feel free to open an issue or contact me at:  
**Email**: [Jashanpreetkaur110424@gmail.com](mailto:Jashanpreetkaur110424@gmail.com)
