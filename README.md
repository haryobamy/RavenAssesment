# RavenAssesment

# RavenAssesment Trading Dashboard

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a responsive cryptocurrency trading dashboard that includes a financial candlestick chart, a trading pairs list, an order book, and a section for placing buy and sell orders. Additionally, it features an authentication screen that fetches and displays the user's Gravatar and GitHub repositories based on their email.

## Features

- Responsive design following modern design practices
- Header with company logo, navigation links, and search bar
- Main content area with a financial candlestick chart, trading pairs list, and order book
- Section for placing buy and sell orders with input fields for price, amount, and total value
- Footer with copyright information, social media icons, and contact link
- Authentication screen that fetches Gravatar and GitHub repositories
- Filtering of trading pairs list based on user input
- Dynamic updating of order form fields and total value calculation
- Switching between different time intervals for the candlestick chart
- Integration with a public cryptocurrency API to fetch and display trading data
- Refactored to use React JS with reusable components and state management
- Simple client-side routing using React Router

## Technologies Used

- HTML
- CSS (with BEM methodology)
- JavaScript
- ApexCharts
- React JS
- React Router
- Public Cryptocurrency API
- Git for version control

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/haryobamy/RavenAssesment
   cd framework
   ```

   To run the development server:

1. Setup `.env.local` if not setup using the `.envsample` file provided,
1. Run `yarn dev`
1. Access app on [http://localhost:5173](http://localhost:5173); or use the link in the terminal
