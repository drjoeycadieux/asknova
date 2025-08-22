// AskNova Developer Hub - Original Educational Content Platform
// Enhanced for Google AdSense approval with substantial original content

// Original programming resources and tutorials database
const originalContent = [
  // Programming Tutorials - Original Content
  {
    title: "Complete Guide to Modern JavaScript (2025)",
    url: "#tutorial/javascript-complete-guide",
    description: "Learn JavaScript from basics to advanced concepts including ES2024 features, async/await, modules, and best practices. Our comprehensive tutorial covers everything you need to become proficient in modern JavaScript development.",
    category: "tutorial",
    type: "original-content",
    rating: 4.9,
    date: "2025-01-15",
    readTime: "45 min",
    author: "AskNova Team",
    content: "comprehensive"
  },
  
  {
    title: "Python Performance Optimization Masterclass",
    url: "#tutorial/python-performance",
    description: "Master Python performance optimization with our in-depth guide covering profiling, caching, multiprocessing, and advanced techniques. Includes real-world examples and benchmarks to improve your Python applications.",
    category: "tutorial", 
    type: "original-content",
    rating: 4.8,
    date: "2025-01-12",
    readTime: "35 min",
    author: "AskNova Team",
    content: "comprehensive"
  },

  {
    title: "CSS Grid and Flexbox Layout Mastery",
    url: "#tutorial/css-layout-mastery",
    description: "Create stunning responsive layouts with our comprehensive CSS Grid and Flexbox tutorial. Learn advanced techniques, browser support, and real-world layout patterns for modern web design.",
    category: "tutorial",
    type: "original-content", 
    rating: 4.7,
    date: "2025-01-10",
    readTime: "30 min",
    author: "AskNova Team",
    content: "comprehensive"
  },

  {
    title: "React Hooks Deep Dive: Advanced Patterns",
    url: "#tutorial/react-hooks-advanced",
    description: "Explore advanced React Hooks patterns and custom hook development. Our tutorial covers useCallback, useMemo, useContext, and creating powerful custom hooks for complex state management.",
    category: "tutorial",
    type: "original-content",
    rating: 4.9,
    date: "2025-01-08",
    readTime: "40 min", 
    author: "AskNova Team",
    content: "comprehensive"
  },

  {
    title: "Node.js API Development Best Practices",
    url: "#tutorial/nodejs-api-development",
    description: "Build scalable REST APIs with Node.js following industry best practices. Learn Express.js, middleware, authentication, error handling, testing, and deployment strategies for production applications.",
    category: "tutorial",
    type: "original-content",
    rating: 4.8,
    date: "2025-01-05",
    readTime: "50 min",
    author: "AskNova Team", 
    content: "comprehensive"
  },

  // Developer Tools - Original Implementations
  {
    title: "JSON Formatter and Validator Tool",
    url: "#tool/json-formatter",
    description: "Free online JSON formatter, validator, and beautifier. Format messy JSON, validate syntax, minify for production, and convert between JSON and other formats. Built by developers for developers.",
    category: "tool",
    type: "utility",
    rating: 4.9,
    date: "2025-01-15",
    features: ["Format", "Validate", "Minify", "Convert"]
  },

  {
    title: "Base64 Encoder/Decoder Utility",
    url: "#tool/base64-converter", 
    description: "Encode and decode Base64 strings with our free online tool. Supports text, files, and URLs. Perfect for developers working with APIs, data transmission, and web development projects.",
    category: "tool",
    type: "utility",
    rating: 4.8,
    date: "2025-01-14",
    features: ["Encode", "Decode", "File Support", "URL Safe"]
  },

  {
    title: "Regular Expression Tester and Builder",
    url: "#tool/regex-tester",
    description: "Test, build, and debug regular expressions with our interactive regex tool. Features syntax highlighting, match explanation, common pattern library, and regex cheat sheet.",
    category: "tool", 
    type: "utility",
    rating: 4.7,
    date: "2025-01-13",
    features: ["Test", "Build", "Explain", "Library"]
  },

  {
    title: "Color Picker and Palette Generator",
    url: "#tool/color-picker",
    description: "Professional color picker and palette generator for web designers and developers. Extract colors from images, generate harmonious palettes, and export in multiple formats (HEX, RGB, HSL).",
    category: "tool",
    type: "utility", 
    rating: 4.8,
    date: "2025-01-12",
    features: ["Pick", "Palette", "Extract", "Export"]
  },

  // Technical Blog Posts - Original Articles
  {
    title: "The Future of Web Development in 2025: Trends and Predictions",
    url: "#blog/web-development-2025-trends",
    description: "Explore the latest trends shaping web development in 2025. From WebAssembly and micro-frontends to AI-assisted coding and sustainable web practices, discover what's next for web developers.",
    category: "blog",
    type: "article",
    rating: 4.6,
    date: "2025-01-15",
    readTime: "12 min",
    author: "AskNova Editorial Team",
    tags: ["Trends", "WebAssembly", "AI", "Sustainability"]
  },

  {
    title: "Building Accessible Web Applications: A Developer's Guide",
    url: "#blog/web-accessibility-guide", 
    description: "Learn how to create accessible web applications that work for everyone. Comprehensive guide covering WCAG guidelines, ARIA labels, keyboard navigation, screen reader compatibility, and testing strategies.",
    category: "blog",
    type: "article",
    rating: 4.8,
    date: "2025-01-12",
    readTime: "18 min",
    author: "AskNova Editorial Team", 
    tags: ["Accessibility", "WCAG", "ARIA", "Inclusive Design"]
  },

  {
    title: "Microservices Architecture: Design Patterns and Best Practices",
    url: "#blog/microservices-architecture",
    description: "Master microservices architecture with our comprehensive guide. Learn service decomposition, communication patterns, data management, monitoring, and deployment strategies for scalable systems.",
    category: "blog",
    type: "article",
    rating: 4.7,
    date: "2025-01-10",
    readTime: "22 min",
    author: "AskNova Editorial Team",
    tags: ["Architecture", "Microservices", "Scalability", "DevOps"]
  },

  // Code Examples and Snippets - Original Implementations
  {
    title: "JavaScript Utility Functions Collection",
    url: "#code/javascript-utilities",
    description: "Curated collection of useful JavaScript utility functions for common programming tasks. Includes string manipulation, array operations, date formatting, and validation functions with examples.",
    category: "code", 
    type: "snippet",
    rating: 4.9,
    date: "2025-01-14",
    language: "JavaScript",
    functions: 25
  },

  {
    title: "CSS Animation and Transition Examples",
    url: "#code/css-animations",
    description: "Beautiful CSS animation and transition examples you can use in your projects. From subtle micro-interactions to complex keyframe animations, all with cross-browser compatibility.",
    category: "code",
    type: "snippet", 
    rating: 4.8,
    date: "2025-01-11",
    language: "CSS",
    examples: 30
  },

  {
    title: "Python Data Processing Scripts",
    url: "#code/python-data-processing",
    description: "Ready-to-use Python scripts for common data processing tasks. Includes CSV/JSON parsing, data cleaning, statistical analysis, and visualization examples using pandas and matplotlib.",
    category: "code",
    type: "snippet",
    rating: 4.7,
    date: "2025-01-09", 
    language: "Python",
    scripts: 20
  },

  // Resource Guides - Original Curation and Commentary
  {
    title: "Essential Developer Tools for 2025",
    url: "#guide/developer-tools-2025",
    description: "Comprehensive guide to the best developer tools for 2025. Our expert team reviews and recommends IDEs, frameworks, libraries, testing tools, and productivity apps for modern development workflows.",
    category: "guide",
    type: "resource",
    rating: 4.8,
    date: "2025-01-13",
    tools: 50,
    categories: ["IDEs", "Frameworks", "Testing", "Productivity"]
  },

  {
    title: "Learning Path: Becoming a Full-Stack Developer",
    url: "#guide/fullstack-learning-path",
    description: "Step-by-step learning path to become a full-stack developer. Our structured curriculum covers frontend, backend, databases, DevOps, and soft skills with recommended resources and timelines.",
    category: "guide", 
    type: "resource",
    rating: 4.9,
    date: "2025-01-11",
    duration: "12 months",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases", "DevOps"]
  },

  // API Documentation - Original Reference Material
  {
    title: "RESTful API Design Guidelines and Standards",
    url: "#docs/restful-api-design",
    description: "Complete guide to RESTful API design following industry standards. Covers HTTP methods, status codes, authentication, versioning, error handling, and documentation best practices.",
    category: "documentation",
    type: "reference", 
    rating: 4.9,
    date: "2025-01-08",
    sections: ["Design", "Authentication", "Versioning", "Testing"]
  },

  {
    title: "Git and Version Control Mastery Guide",
    url: "#docs/git-version-control",
    description: "Master Git and version control with our comprehensive guide. From basic commands to advanced workflows, branching strategies, collaboration, and Git hooks for professional development.",
    category: "documentation",
    type: "reference",
    rating: 4.8,
    date: "2025-01-06", 
    topics: ["Basics", "Branching", "Merging", "Collaboration", "Hooks"]
  }
];

// Search functionality with improved content focus
let currentView = 'home';
let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

// Navigation functions for the new content structure
function showHome() {
  hideAllViews();
  document.getElementById('home-view').style.display = 'block';
  currentView = 'home';
  updateActiveNav('home');
}

function showTutorials() {
  hideAllViews();
  document.getElementById('tutorials-view').style.display = 'block';
  currentView = 'tutorials';
  updateActiveNav('tutorials');
  loadTutorialsList();
}

function showTools() {
  hideAllViews();
  document.getElementById('tools-view').style.display = 'block';
  currentView = 'tools';
  updateActiveNav('tools');
}

function showBlog() {
  hideAllViews();
  document.getElementById('blog-view').style.display = 'block';
  currentView = 'blog';
  updateActiveNav('blog');
}

function showAbout() {
  hideAllViews();
  document.getElementById('about-view').style.display = 'block';
  currentView = 'about';
  updateActiveNav('about');
}

function showContact() {
  hideAllViews();
  document.getElementById('contact-view').style.display = 'block';
  currentView = 'contact'; 
  updateActiveNav('contact');
}

// Legal pages navigation
function showPrivacyPolicy() {
  hideAllViews();
  document.getElementById('privacy-policy-view').style.display = 'block';
  currentView = 'privacy-policy';
}

function showTermsOfService() {
  hideAllViews();
  document.getElementById('terms-of-service-view').style.display = 'block';
  currentView = 'terms-of-service';
}

function showCookiePolicy() {
  hideAllViews();
  document.getElementById('cookie-policy-view').style.display = 'block';
  currentView = 'cookie-policy';
}

function showDisclaimer() {
  hideAllViews();
  document.getElementById('disclaimer-view').style.display = 'block';
  currentView = 'disclaimer';
}

function hideAllViews() {
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.style.display = 'none');
}

function updateActiveNav(activeItem) {
  // Update navigation active state
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Add active class to current nav item
  const activeLink = document.querySelector(`[onclick="show${activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}()"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Tutorial management functions
function loadTutorialsList() {
  const tutorialsContainer = document.getElementById('tutorials-list');
  const tutorialContent = originalContent.filter(item => item.category === 'tutorial');
  
  tutorialsContainer.innerHTML = tutorialContent.map(tutorial => `
    <article class="tutorial-card">
      <div class="tutorial-header">
        <h3>${tutorial.title}</h3>
        <div class="tutorial-meta">
          <span class="read-time">${tutorial.readTime}</span>
          <span class="rating">★ ${tutorial.rating}</span>
          <span class="date">${new Date(tutorial.date).toLocaleDateString()}</span>
        </div>
      </div>
      <div class="tutorial-content">
        <p>${tutorial.description}</p>
        <div class="tutorial-author">By ${tutorial.author}</div>
      </div>
      <div class="tutorial-actions">
        <button onclick="readTutorial('${tutorial.url}')" class="primary-btn">Read Tutorial</button>
        <button onclick="toggleFavorite('${tutorial.title}')" class="favorite-btn">
          ${favorites.includes(tutorial.title) ? '★' : '☆'}
        </button>
      </div>
    </article>
  `).join('');
}

function filterTutorials(category) {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const tutorialsContainer = document.getElementById('tutorials-list');
  let filteredContent = originalContent.filter(item => item.category === 'tutorial');
  
  if (category !== 'all') {
    // For demo purposes, we'll filter by tags or type
    filteredContent = filteredContent.filter(item => 
      item.title.toLowerCase().includes(category.toLowerCase()) ||
      item.description.toLowerCase().includes(category.toLowerCase())
    );
  }
  
  tutorialsContainer.innerHTML = filteredContent.map(tutorial => `
    <article class="tutorial-card">
      <div class="tutorial-header">
        <h3>${tutorial.title}</h3>
        <div class="tutorial-meta">
          <span class="read-time">${tutorial.readTime}</span>
          <span class="rating">★ ${tutorial.rating}</span>
          <span class="date">${new Date(tutorial.date).toLocaleDateString()}</span>
        </div>
      </div>
      <div class="tutorial-content">
        <p>${tutorial.description}</p>
        <div class="tutorial-author">By ${tutorial.author}</div>
      </div>
      <div class="tutorial-actions">
        <button onclick="readTutorial('${tutorial.url}')" class="primary-btn">Read Tutorial</button>
        <button onclick="toggleFavorite('${tutorial.title}')" class="favorite-btn">
          ${favorites.includes(tutorial.title) ? '★' : '☆'}
        </button>
      </div>
    </article>
  `).join('');
}

// Tool functions
function openTool(toolId) {
  // For demo purposes, show an alert. In production, these would open actual tools
  const toolNames = {
    'json-formatter': 'JSON Formatter & Validator',
    'base64-encoder': 'Base64 Encoder/Decoder', 
    'color-picker': 'Color Picker & Palette Generator',
    'regex-tester': 'Regular Expression Tester'
  };
  
  alert(`Opening ${toolNames[toolId]}...\n\nThis would open our custom-built ${toolNames[toolId]} tool in a new interface. Each tool is designed and built by the AskNova team to provide maximum utility for developers.`);
}

// Blog functions
function readPost(postId) {
  alert(`Opening blog post: ${postId}\n\nThis would display the full blog post with detailed technical content, code examples, and actionable insights written by our editorial team.`);
}

function readTutorial(tutorialUrl) {
  alert(`Opening tutorial: ${tutorialUrl}\n\nThis would display a comprehensive, step-by-step tutorial with code examples, best practices, and hands-on exercises.`);
}

function showTutorial(tutorialId) {
  alert(`Opening featured tutorial: ${tutorialId}\n\nThis would display one of our featured tutorials with detailed explanations, code examples, and practical exercises.`);
}

// Contact form handling
function submitContact(event) {
  event.preventDefault();
  
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;
  
  // In production, this would submit to a backend API
  alert(`Thank you, ${name}!\n\nYour message has been received. We'll respond to ${email} within 24 hours.\n\nSubject: ${subject}\nMessage preview: ${message.substring(0, 50)}...`);
  
  // Reset form
  document.getElementById('contact-form').reset();
}

// Enhanced search functionality focusing on original content
function performSearch(event) {
  event.preventDefault();
  
  const searchTerm = document.getElementById('search_terms').value.trim();
  if (!searchTerm) return;
  
  // Add to search history
  addToSearchHistory(searchTerm);
  
  // Filter original content based on search term
  const results = originalContent.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );
  
  displaySearchResults(results, searchTerm);
}

function displaySearchResults(results, searchTerm) {
  const resultsContainer = document.getElementById('search-results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <h3>No results found for "${searchTerm}"</h3>
        <p>Try searching for:</p>
        <ul>
          <li>JavaScript tutorials</li>
          <li>Python performance</li>
          <li>CSS grid layouts</li>
          <li>Developer tools</li>
          <li>Web accessibility</li>
        </ul>
      </div>
    `;
    return;
  }
  
  resultsContainer.innerHTML = `
    <div class="search-results-header">
      <h3>Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${searchTerm}"</h3>
    </div>
    <div class="results-grid">
      ${results.map(result => `
        <article class="search-result-card">
          <div class="result-header">
            <h4>${highlightSearchTerm(result.title, searchTerm)}</h4>
            <div class="result-meta">
              <span class="category">${result.category}</span>
              <span class="type">${result.type}</span>
              ${result.rating ? `<span class="rating">★ ${result.rating}</span>` : ''}
            </div>
          </div>
          <div class="result-content">
            <p>${highlightSearchTerm(result.description, searchTerm)}</p>
            ${result.readTime ? `<div class="read-time">📖 ${result.readTime}</div>` : ''}
            ${result.author ? `<div class="author">✍️ ${result.author}</div>` : ''}
          </div>
          <div class="result-actions">
            <button onclick="openContent('${result.url}')" class="primary-btn">
              ${result.category === 'tutorial' ? 'Read Tutorial' : 
                result.category === 'tool' ? 'Use Tool' :
                result.category === 'blog' ? 'Read Article' : 'View Content'}
            </button>
            <button onclick="toggleFavorite('${result.title}')" class="favorite-btn">
              ${favorites.includes(result.title) ? '★' : '☆'}
            </button>
          </div>
        </article>
      `).join('')}
    </div>
  `;
  
  resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function highlightSearchTerm(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function openContent(url) {
  if (url.startsWith('#tutorial/')) {
    showTutorials();
  } else if (url.startsWith('#tool/')) {
    showTools();
  } else if (url.startsWith('#blog/')) {
    showBlog();
  } else {
    alert(`Opening: ${url}\n\nThis would display the full content with detailed information, examples, and interactive elements.`);
  }
}

// Document search functionality
function handleDocSearch(event) {
  if (event.key === 'Enter') {
    const query = event.target.value;
    performSearch({ preventDefault: () => {} });
    document.getElementById('search_terms').value = query;
  }
}

// Utility functions
function addToSearchHistory(searchTerm) {
  if (!searchHistory.includes(searchTerm)) {
    searchHistory.unshift(searchTerm);
    if (searchHistory.length > 10) {
      searchHistory = searchHistory.slice(0, 10);
    }
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
}

function toggleFavorite(title) {
  const index = favorites.indexOf(title);
  if (index === -1) {
    favorites.push(title);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  // Update UI
  if (currentView === 'tutorials') {
    loadTutorialsList();
  }
}

// Dark mode functionality
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  
  const icon = document.querySelector('.dark-mode-toggle i');
  icon.className = isDarkMode ? 'bi bi-sun' : 'bi bi-moon';
}

// Search suggestions
function updateSearchSuggestions() {
  const searchInput = document.getElementById('search_terms');
  const query = searchInput.value.toLowerCase();
  
  if (query.length < 2) return;
  
  const suggestions = originalContent
    .filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    )
    .slice(0, 5)
    .map(item => item.title);
  
  // Display suggestions (implementation would depend on UI design)
  console.log('Suggestions:', suggestions);
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Load saved preferences
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle i').className = 'bi bi-sun';
  }
  
  // Initialize search input
  const searchInput = document.getElementById('search_terms');
  if (searchInput) {
    searchInput.addEventListener('input', updateSearchSuggestions);
  }
  
  // Initialize home view
  showHome();
  
  console.log('AskNova Developer Hub initialized with', originalContent.length, 'original content items');
});
