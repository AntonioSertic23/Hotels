# Hotels

## Web application for managing a hotel chain

The Hotels page was created as a project for web programming fundamentals exercises at university.

The project's theme was chosen to address potential issues related to managing a hotel chain.

The page showcases all the acquired knowledge about basic web technologies like **HTML**, **CSS** (using **Bootstrap 3.3.7**), and **JavaScript** (with **jQuery**). **Firebase** was used as the database.

[![My Skills](https://skills.thijs.gg/icons?i=html,css,bootstrap,js,jquery,firebase)](https://skills.thijs.gg)

The application allows users to register and log in via Firebase with thorough validation of all entered parameters, such as proper email format.

---

### The page includes 3 types of views:

1. For regular website visitors who can only see the list of hotels.
1. For logged-in users who can make room reservations at hotels.
1. For logged-in admins who can manage the hotels themselves. They can edit, delete, and add hotels, as well as cancel reservations. Admins also have access to statistics and can add new admins.

---

### Project Setup

To run the project, it's necessary to create your own Firebase database following the example provided in `assets/data.json`. Then, paste the obtained connection data into `js/firebase_config.js`.
