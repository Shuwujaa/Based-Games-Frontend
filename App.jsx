// App.jsx
import { useState } from "react"; // React hook for managing state in functional components
import "./App.css"; // Import the main stylesheet

// ----------------------------
// DATA SECTION
// ----------------------------

// Array of featured games to show in the main shop section
const featuredGames = [
  {
    id: 1,
    title: "Fortnite", // Game title
    desc: "Fortnite battle royale with exciting updates and crossovers.", // Short description
    players: "299 players", // Player count
    image: "./src/1.png", // Image path
  },
  {
    id: 2,
    title: "Breat Star",
    desc: "Sci-fi shooter with incredible gameplay and missions.",
    players: "623 players",
    image: "src/2.png",
  },
  {
    id: 3,
    title: "Quantic",
    desc: "Tactical action shooter with immersive sci-fi story.",
    players: "1825 players",
    image: "src/3.png",
  },
  {
    id: 4,
    title: "Others",
    desc: "Explore a vast library of real games and new adventures.",
    players: "All",
    image: "src/4.png",
  },
  
];

// Array of bottom games for the discounted/secondary section
const bottomGames = [
  {
    id: 1,
    title: "Death Stranding Key",
    discount: 75, // Percentage discount
    image: "src/1.png",
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    discount: 42,
    image: "src/2.png",
  },
  {
    id: 3,
    title: "Star Wars",
    discount: 37,
    image: "src/3.png",
  },
  {
    id: 4,
    title: "1000+ New Games",
    discount: 42,
    image: "src/4.png",
  },
  
];

// Detailed info about a single product
const productDetail = {
  title: "Cyberpunk 2077 Key",
  desc: "Dive into a futuristic RPG with deep roleplaying and neon-lit streets.",
  genre: "Action / RPG",
  developer: "CD PROJEKT RED",
  publisher: "CD PROJEKT RED",
  releaseDate: "Dec 10, 2020",
  site: "cyberpunk.net",
  price: 1499, // Price in rubles
  images: ["src/1.png", "src/2.png", "src/3.png"], // Array of images
};

// ----------------------------
// COMPONENTS
// ----------------------------

// Component to display a single featured game
function FeaturedGame({ game }) {
  return (
    <article className="featured-game">
      {/* Game image */}
      <img src={game.image} alt={game.title} loading="lazy" />
      
      {/* Game title overlay */}
      <div className="featured-label">{game.title}</div>
      
      {/* Short description */}
      <p>{game.desc}</p>
      
      {/* Number of players */}
      <span>{game.players}</span>
      
      {/* Button for more info */}
      <button aria-label={`More info about ${game.title}`}>More Info</button>
    </article>
  );
}

// Component to display a single bottom game (discounted or secondary)
function BottomGame({ game }) {
  return (
    <article className="bottom-game">
      {/* Background image div */}
      <div className="bottom-game-image" style={{ backgroundImage: `url(${game.image})` }}>
        {/* Discount badge */}
        <span className="discount" aria-label={`${game.discount}% discount`}>-{game.discount}%</span>
      </div>
      {/* Game title */}
      <p>{game.title}</p>
    </article>
  );
}

// Component for the detailed product description section
function ProductDescription({ detail }) {
  return (
    <section className="product-description" aria-labelledby="product-title">
      {/* Section heading */}
      <h2 id="product-title">Product Description</h2>
      
      {/* Main content area */}
      <div className="product-main">
        {/* Main product image */}
        <img src={detail.images[0]} alt={detail.title} className="product-main-image" loading="lazy" />
        
        {/* Product info */}
        <div className="product-info">
          {/* Title */}
          <h3>{detail.title}</h3>
          
          {/* Description */}
          <p>{detail.desc}</p>
          
          {/* List of product metadata */}
          <ul>
            <li><b>Genres:</b> {detail.genre}</li>
            <li><b>Developer:</b> {detail.developer}</li>
            <li><b>Publisher:</b> {detail.publisher}</li>
            <li><b>Release Date:</b> {detail.releaseDate}</li>
            <li><b>Official Site:</b> {detail.site}</li>
          </ul>
          
          {/* Price and purchase section */}
          <div className="price-buy-section">
            <span className="price" aria-label={`Price: ${detail.price} rubles`}>{detail.price} ₽</span>
            <button aria-label={`Buy ${detail.title}`}>Buy</button>
            
            {/* Installment option */}
            <label>
              <input type="checkbox" aria-label="Enable installments for 12 months" /> Installments: 12 months
            </label>
          </div>
        </div>
      </div>
      
      {/* Similar products section */}
      <div className="similar-products">
        {bottomGames.map((game) => <BottomGame key={game.id} game={game} />)}
      </div>
    </section>
  );
}

// ----------------------------
// ROOT APP COMPONENT
// ----------------------------
function App() {
  // State to control whether mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* ---------------- PARTICLE SYSTEM ---------------- */}
      <div className="particles">
        {/* Render 50 random particles for background effect */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`, // Random horizontal position
              width: `${Math.random() * 4 + 2}px`, // Random width 2-6px
              height: `${Math.random() * 4 + 2}px`, // Random height 2-6px
              animationDelay: `${Math.random() * 20}s`, // Random animation delay
            }}
          />
        ))}
      </div>



      {/* ---------------- BACKGROUND VIDEO ---------------- */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="./src/game.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      {/* ---------------- HEADER / NAVIGATION ---------------- */}
      <header className="header">
        <nav className="nav">
          <div className="logo">SKYGAMES</div>
          
          {/* Navigation links */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#agreement">Agreement</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
          
          {/* Account / Cart icons */}
          <div className="nav-icons">
            <button className="icon-btn" aria-label="User account">
              <span className="icon">👤</span>
            </button>
            <button className="icon-btn cart-btn" aria-label="Shopping cart">
              <span className="icon">🛒</span>
              <span className="cart-badge">3</span> {/* Number of items in cart */}
            </button>
          </div>
          
          {/* Hamburger menu for mobile */}
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="hero" aria-label="SKYGAMES Hero Section">
        {/* Left content (text & buttons) */}
        <div className="hero-content" style={{ flex: 1, maxWidth: "600px" }}>
          <h1>
            Welcome to <span>SKYGAMES</span>
          </h1>
          <p className="hero-subtitle">
            Discover the best games, exclusive keys, and incredible discounts.
            Join millions of players worldwide.
          </p>
          <div className="hero-buttons">
            <button aria-label="Shop Now">Shop Now</button>
            <button aria-label="Learn More">Learn More</button>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-image" role="img" aria-label="Gaming action scene"></div>
      </section>

      {/* ---------------- NEWS SECTION ---------------- */}
      <section className="news" id="news">
        <h2>News</h2>
        <p>Latest updates including UI redesign, referral system, promo codes, and more.</p>
        <button aria-label="More news information">More Info</button>
        <div className="news-images">
          <img src="src/1.png" alt="News image 1" loading="lazy" />
          <img src="src/2.png" alt="News image 2" loading="lazy" />
          <img src="src/3.png" alt="News image 3" loading="lazy" />
        </div>
      </section>

      {/* ---------------- SHOP SECTION(REAL PRODUCTS LIE THEREEEEE) ---------------- */}
      <section className="store" id="shop">
        <h2>Shop</h2>

        {/* Featured games */}
        <div className="featured-games">
          {featuredGames.map((game) => <FeaturedGame key={game.id} game={game} />)}
        </div>

        {/* Bottom games */}
        <div className="bottom-games">
          {bottomGames.map((game) => <BottomGame key={game.id} game={game} />)}
        </div>
      </section>



      {/* ---------------- PRODUCT DESCRIPTION ---------------- */}
      <ProductDescription detail={productDetail} />

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">© 2023 SKYGAMES. All rights reserved.</footer>
    </div>
  );
}

export default App; 
