import './App.css';
import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map' 
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

// Define the location for the map
const location = {
  address: "P 1, Sousse, Tunisia",
  lat: 35.824503,
  lng: 10.634584,
};

// App component, the main entry point for the application
const App = () => (
  <div className="App">
    {/* Display the introductory section */}
    <IntroSection />

    {/* Display the contact section */}
    <ContactSection />

    {/* Display the map section with specified location and zoom level */}
    <MapSection location={location} zoomLevel={17} /> 

    {/* Display the disclaimer section */}
    <DisclaimerSection />

    {/* Display the footer section */}
    <FooterSection />
  </div>
)

export default App;
