# Opendoor Clone - Real Estate Listings App

This is a React-based application that mimics the functionality of Opendoor's real estate listings. It features a map interface powered by Mapbox, a list of property cards, and filtering/sorting capabilities.

---

## **Features**
- **Interactive Map**: Displays property locations using Mapbox.
- **Property Listings**: Shows property details such as price, address, bedrooms, bathrooms, and more.
- **Filtering and Sorting**: Allows users to filter by status (active, sold) and sort by newest/oldest listings.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---

## **Prerequisites**
- **Node.js**: Ensure you have Node.js LTS 20.9.0 or higher installed.
- **Mapbox API Key**: You'll need a Mapbox API key to use the map functionality.

---

## **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/opendoor-clone.git
   cd opendoor-clone

2. **Install Dependencies**:
    ```bash
    npm install

3. **Set Up Mapbox API Key**:
    Replace the placeholder in src/components/Map.tsx with your actual Mapbox API key:
    ```bash
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox token

4. **Run the Application**:
    ```bash
    npm start

5. **Open App**:
- Visit http://localhost:3000 in your browser to view the application.

6. **Run unit tests**:
    ```bash
    npm test
