import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const categoryCards = [
  {
    title: 'Women',
    subtitle: 'Kaftans, kurtas and everyday layers',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Men',
    subtitle: 'Clean silhouettes and relaxed essentials',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Home',
    subtitle: 'Warm textures and thoughtful living pieces',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
]

const collectionCards = [
  {
    title: 'Karachi late light',
    text: 'A neutral edit built for city evenings, workdays and quick family dinners with a polished finish.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Lahore weekend living',
    text: 'Soft layers, laid-back tailoring, and home accents chosen for slower routines and warmer gatherings.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
]

const reviews = [
  {
    name: 'Ayesha K.',
    quote:
      'The fabric quality is excellent and the stitching feels premium. I ordered the outfit for a family event and it looked elegant without being overdone.',
  },
  {
    name: 'Hamza S.',
    quote:
      'Everything arrived on time, packed neatly, and the fit was better than expected. This feels like a store built for real people, not just aesthetics.',
  },
  {
    name: 'Sara M.',
    quote:
      'I ordered home accessories for my apartment and they completely changed the feel of the room. The colors, finish, and presentation were all very polished.',
  },
]

const shopProducts = [
  { name: 'Nadiya Cotton Kurta', price: 'PKR 4,200', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80', tag: 'Women' },
  { name: 'Bahria Leather Tote', price: 'PKR 6,900', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80', tag: 'Accessories' },
  { name: 'Lahori Ceramic Vase', price: 'PKR 2,800', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80', tag: 'Home' },
  { name: 'Zarif Linen Set', price: 'PKR 5,600', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', tag: 'New' },
  { name: 'Sialkot Slip-On', price: 'PKR 3,900', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80', tag: 'Footwear' },
  { name: 'Saffron Candle', price: 'PKR 1,550', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80', tag: 'Essentials' },
]

const fallbackProductImage =
  'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          onError={(event) => {
            if (event.currentTarget.src !== fallbackProductImage) {
              event.currentTarget.src = fallbackProductImage
            }
          }}
        />
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-meta">
        <h3>{product.name}</h3>
        <div className="product-row">
          <span className="product-price">{product.price}</span>
          <button type="button" className="mini-btn">Add to cart</button>
        </div>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <div className="page-section home-page">
      <div className="hero-copy">
        <span className="eyebrow">New season arrivals</span>
        <h1>Modern essentials for homes and everyday life in Pakistan.</h1>
        <p>
          Thoughtful pieces for city routines, family gatherings, and simple comfort—from
          Karachi evenings to Lahore weekends and everything in between.
        </p>
        <div className="cta-group">
          <NavLink to="/shop" className="primary-btn">Shop now</NavLink>
          <NavLink to="/collections" className="secondary-btn">Explore collections</NavLink>
        </div>

        <div className="stats-row">
          <div>
            <strong>24k+</strong>
            <span>happy shoppers</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>customer rating</span>
          </div>
          <div>
            <strong>48 hrs</strong>
            <span>dispatch time</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Lifestyle shopping showcase">
        <img
          className="hero-main-image"
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
          alt="Fashion lifestyle"
        />
        <div className="floating-badge badge-top">Free delivery over PKR 10,000</div>
        <div className="floating-badge badge-bottom">Fresh arrivals every week</div>
      </div>

      <div className="home-info-grid">
        <div className="info-card">
          <span>01</span>
          <h3>Carefully chosen details</h3>
          <p>We focus on fabrics, finishes, and silhouettes that are meant to work beautifully in daily life.</p>
        </div>
        <div className="info-card">
          <span>02</span>
          <h3>Made for local routines</h3>
          <p>From warm family dinners to office days and weekend escapes, our pieces are designed to adapt.</p>
        </div>
        <div className="info-card">
          <span>03</span>
          <h3>Simple, honest value</h3>
          <p>Premium feel without inflated prices, so useful essentials stay accessible and long-lasting.</p>
        </div>
      </div>
    </div>
  )
}

function ShopPage() {
  return (
    <div className="page-section content-page">
      <div className="section-heading">
        <span className="eyebrow">Shop the edit</span>
        <h2>Layered essentials for everyday living.</h2>
      </div>

      <div className="shop-intro">
        <p>
          Each piece is selected to work across daily routines, from office hours and family plans to quick trips and relaxed weekends.
          Our collections are made for people who want style that feels practical, polished, and easy to live in.
        </p>
      </div>

      <div className="shop-benefits">
        <div>
          <strong>Nationwide delivery</strong>
          <span>Fast dispatch from Karachi to all major cities.</span>
        </div>
        <div>
          <strong>Easy exchanges</strong>
          <span>Simple size and fit support when you need it.</span>
        </div>
        <div>
          <strong>Gift-ready packaging</strong>
          <span>Perfect for birthdays, weddings, and thoughtful surprises.</span>
        </div>
      </div>

      <div className="filter-bar">
        <button type="button" className="filter-pill active">All</button>
        <button type="button" className="filter-pill">Women</button>
        <button type="button" className="filter-pill">Home</button>
        <button type="button" className="filter-pill">Accessories</button>
        <button type="button" className="filter-pill">Sale</button>
      </div>

      <div className="product-grid">
        {shopProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}

function CollectionsPage() {
  return (
    <div className="page-section content-page">
      <div className="section-heading">
        <span className="eyebrow">Curated looks</span>
        <h2>Thoughtful styling for city life and slower weekends.</h2>
      </div>

      <div className="collection-stack">
        {collectionCards.map((item) => (
          <article className="collection-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="collection-copy">
              <span>{item.title}</span>
              <h3>{item.text}</h3>
              <NavLink to="/shop" className="secondary-btn small-btn">Shop this story</NavLink>
            </div>
          </article>
        ))}
      </div>

      <div className="category-row">
        {categoryCards.map((category) => (
          <article className="category-card" key={category.title}>
            <img src={category.image} alt={category.title} />
            <div className="category-copy">
              <h3>{category.title}</h3>
              <p>{category.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="story-banner">
        <div>
          <span>Why people come back</span>
          <h3>Pieces that feel useful, warm, and worth keeping.</h3>
        </div>
        <p>
          We build collections around the way real homes and wardrobes evolve: layered, practical,
          and personal. The result is a more intentional kind of shopping that feels better to wear and easier to live with.
        </p>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="page-section content-page">
      <div className="section-heading">
        <span className="eyebrow">Our story</span>
        <h2>Designed for real routines, not just perfect photos.</h2>
      </div>

      <div className="about-layout">
        <div className="about-image-block">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
            alt="Store interior"
          />
        </div>

        <div className="about-copy">
          <p>
            Saffron &amp; Stone began with a simple idea: everyday essentials should feel considered,
            comfortable, and genuinely beautiful. We wanted to build a brand that gives Pakistani homes,
            wardrobes, and routines something more thoughtful than mass-produced basics.
          </p>
          <p>
            From soft fabrics and warm neutrals to refined silhouettes and practical details, our collections are
            shaped around how people actually live. Whether it is a working day in Lahore, a family gathering in Karachi,
            or a quiet evening at home in Islamabad, our pieces are meant to move with you.
          </p>
          <p>
            We work with quality materials, honest pricing, and a slow design process that values longevity over trends.
            That means pieces that feel personal, wearable, and useful for years rather than a single season.
          </p>
          <p>
            Our approach is intentionally simple: fewer, better pieces that help you feel ready for work, celebration,
            travel, and everyday comfort. We believe good design should make life easier and more beautiful without forcing a lifestyle that isn’t yours.
          </p>

          <div className="brand-stats">
            <div>
              <strong>8 years</strong>
              <span>serving modern households</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>quality-forward sourcing</span>
            </div>
            <div>
              <strong>Nationwide</strong>
              <span>delivery and support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-values">
        <div className="value-card">
          <span>01</span>
          <h3>Thoughtful curation</h3>
          <p>We edit down to what is useful, refined, and worth returning to season after season.</p>
        </div>
        <div className="value-card">
          <span>02</span>
          <h3>Modern practicality</h3>
          <p>Our designs balance comfort and form so they work just as beautifully in a daily routine as they do in a special moment.</p>
        </div>
        <div className="value-card">
          <span>03</span>
          <h3>Local understanding</h3>
          <p>We design with Pakistani homes, climates, and lifestyles in mind, without sacrificing aesthetic quality.</p>
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="page-section content-page">
      <div className="section-heading">
        <span className="eyebrow">Contact us</span>
        <h2>Need help with an order, a gift, or styling advice?</h2>
      </div>

      <div className="contact-layout">
        <form className="contact-form">
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="03xx-xxxxxxx" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell us how we can help with your order or styling question" />
          </label>
          <button type="submit" className="primary-btn">Send message</button>
        </form>

        <div className="contact-card">
          <h3>Visit our showroom</h3>
          <p>Shop 6, Gulshan-e-Iqbal</p>
          <p>Karachi, Sindh 75300</p>
          <p>hello@saffronandstone.pk</p>
          <p>+92 300 1234567</p>
          <p>Mon-Sat: 10:00 AM – 8:00 PM</p>
        </div>
      </div>

      <div className="store-grid">
        <div className="store-card">
          <span>Lahore studio</span>
          <p>House 18, DHA Phase 6, Lahore, Punjab</p>
        </div>
        <div className="store-card">
          <span>Islamabad outlet</span>
          <p>F-7 Markaz, Islamabad, ICT</p>
        </div>
      </div>

      <div className="faq-block">
        <h3>Frequently asked questions</h3>
        <div className="faq-item">
          <strong>Do you offer nationwide delivery?</strong>
          <p>Yes. We deliver across Pakistan with tracking and support for major cities and smaller towns.</p>
        </div>
        <div className="faq-item">
          <strong>Can I exchange my order?</strong>
          <p>Absolutely. We offer exchange and size support within the stated return window for unworn items.</p>
        </div>
        <div className="faq-item">
          <strong>Do you do gifting or custom notes?</strong>
          <p>We can prepare gift-ready packaging and include a short message at checkout for special occasions.</p>
        </div>
      </div>

      <div className="review-section">
        {reviews.map((review) => (
          <div className="review-card" key={review.name}>
            <div className="stars">★★★★★</div>
            <p>“{review.quote}”</p>
            <strong>{review.name}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-strip">
          <span>Free shipping on orders over PKR 10,000</span>
          <span>New arrivals every Thursday</span>
        </div>

        <div className="nav-row">
          <NavLink to="/" className="brand" aria-label="Saffron and Stone home page">
            <span className="brand-mark">S</span>
            Saffron &amp; Stone
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <span>Account</span>
            <span>Cart (2)</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div>
          <p>© 2026 Saffron &amp; Stone</p>
        </div>
        <div className="footer-links">
          <span>Shipping</span>
          <span>Returns</span>
          <span>Journal</span>
          <span>Instagram</span>
        </div>
      </footer>
    </div>
  )
}

export default App
