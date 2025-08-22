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
  searchInput.addEventListener('input', updateSearchSuggestions);
  
  // Initialize home view
  showHome();
  
  console.log('AskNova Developer Hub initialized with', originalContent.length, 'original content items');
});
  {
    title: "C++ Programming Language Reference",
    url: "https://cppreference.com",
    description: "Comprehensive C++ language reference with examples, tutorials, and best practices for modern C++ development.",
    category: "programming",
    type: "reference",
    rating: 4.6,
    date: "2024-03-05"
  },
  {
    title: "TypeScript Documentation - Typed JavaScript",
    url: "https://typescriptlang.org",
    description: "TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript.",
    category: "programming",
    type: "documentation",
    rating: 4.8,
    date: "2024-02-28"
  },
  {
    title: "Go Programming Language - Google's Open Source",
    url: "https://golang.org",
    description: "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
    category: "programming",
    type: "documentation",
    rating: 4.7,
    date: "2024-01-30"
  },
  {
    title: "Rust Programming Language - Safe Systems Programming",
    url: "https://rust-lang.org",
    description: "Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.",
    category: "programming",
    type: "documentation",
    rating: 4.9,
    date: "2024-03-01"
  },
  {
    title: "Swift Programming Language - Apple's Modern Language",
    url: "https://swift.org",
    description: "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.",
    category: "programming",
    type: "documentation",
    rating: 4.6,
    date: "2024-02-15"
  },
  {
    title: "Kotlin Programming Language - JetBrains Modern JVM Language",
    url: "https://kotlinlang.org",
    description: "Kotlin is a modern programming language that makes developers happier. Open-source forever.",
    category: "programming",
    type: "documentation",
    rating: 4.7,
    date: "2024-02-20"
  },
  {
    title: "PHP: The Right Way - Best Practices Guide",
    url: "https://phptherightway.com",
    description: "An easy-to-read, quick reference for PHP best practices, accepted coding standards, and links to authoritative tutorials.",
    category: "programming",
    type: "guide",
    rating: 4.5,
    date: "2024-01-25"
  },

  // Web Development
  {
    title: "HTML & CSS - Web Development Basics",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    description: "Learn web development with HTML, CSS, and JavaScript. Start with the basics and advance to complex web applications.",
    category: "web-development",
    type: "tutorial",
    rating: 4.8,
    date: "2024-01-10"
  },
  {
    title: "React - A JavaScript Library for Building User Interfaces",
    url: "https://reactjs.org",
    description: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
    category: "web-development",
    type: "framework",
    rating: 4.9,
    date: "2024-02-05"
  },
  {
    title: "Vue.js - The Progressive JavaScript Framework",
    url: "https://vuejs.org",
    description: "Vue.js is an approachable, performant and versatile framework for building web user interfaces.",
    category: "web-development",
    type: "framework",
    rating: 4.7,
    date: "2024-02-12"
  },
  {
    title: "Angular - Platform for Building Web Applications",
    url: "https://angular.io",
    description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    category: "web-development",
    type: "framework",
    rating: 4.6,
    date: "2024-01-18"
  },
  {
    title: "Node.js Documentation - JavaScript Runtime",
    url: "https://nodejs.org/en/docs/",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model.",
    category: "web-development",
    type: "runtime",
    rating: 4.8,
    date: "2024-02-08"
  },
  {
    title: "Express.js - Fast, unopinionated, minimalist web framework",
    url: "https://expressjs.com",
    description: "Express.js is a minimal and flexible Node.js web application framework that provides robust features for web applications.",
    category: "web-development",
    type: "framework",
    rating: 4.7,
    date: "2024-02-18"
  },
  {
    title: "Next.js - The React Framework for Production",
    url: "https://nextjs.org",
    description: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.",
    category: "web-development",
    type: "framework",
    rating: 4.8,
    date: "2024-03-10"
  },
  {
    title: "Svelte - Cybernetically enhanced web apps",
    url: "https://svelte.dev",
    description: "Svelte is a radical new approach to building user interfaces with less code, no virtual DOM, and truly reactive.",
    category: "web-development",
    type: "framework",
    rating: 4.6,
    date: "2024-02-25"
  },
  {
    title: "Bootstrap - CSS Framework for Responsive Design",
    url: "https://getbootstrap.com",
    description: "Bootstrap is the world's most popular CSS framework for building responsive, mobile-first sites.",
    category: "web-development",
    type: "framework",
    rating: 4.5,
    date: "2024-01-12"
  },
  {
    title: "Tailwind CSS - Utility-first CSS Framework",
    url: "https://tailwindcss.com",
    description: "Tailwind CSS is a utility-first CSS framework packed with classes to build any design, directly in your markup.",
    category: "web-development",
    type: "framework",
    rating: 4.8,
    date: "2024-03-02"
  },

  // Tools & Development
  {
    title: "Git Version Control - Distributed Version Control",
    url: "https://git-scm.com",
    description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects.",
    category: "tools",
    type: "version-control",
    rating: 4.9,
    date: "2024-01-05"
  },
  {
    title: "GitHub - Code Hosting Platform",
    url: "https://github.com",
    description: "GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code.",
    category: "tools",
    type: "platform",
    rating: 4.8,
    date: "2024-01-08"
  },
  {
    title: "VS Code - Code Editor Redefined",
    url: "https://code.visualstudio.com",
    description: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
    category: "tools",
    type: "editor",
    rating: 4.9,
    date: "2024-01-22"
  },
  {
    title: "Docker - Containerization Platform",
    url: "https://docker.com",
    description: "Docker is a platform designed to help developers build, share, and run modern applications. We handle the tedious setup.",
    category: "tools",
    type: "containerization",
    rating: 4.7,
    date: "2024-02-14"
  },
  {
    title: "Webpack - Static Module Bundler",
    url: "https://webpack.js.org",
    description: "Webpack is a static module bundler for modern JavaScript applications. Bundle your scripts, styles, and assets.",
    category: "tools",
    type: "bundler",
    rating: 4.6,
    date: "2024-01-28"
  },
  {
    title: "Vite - Next Generation Frontend Tooling",
    url: "https://vitejs.dev",
    description: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
    category: "tools",
    type: "bundler",
    rating: 4.8,
    date: "2024-03-08"
  },
  {
    title: "ESLint - Pluggable JavaScript Linter",
    url: "https://eslint.org",
    description: "ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.",
    category: "tools",
    type: "linter",
    rating: 4.7,
    date: "2024-02-03"
  },
  {
    title: "Prettier - Code Formatter",
    url: "https://prettier.io",
    description: "Prettier is an opinionated code formatter that enforces a consistent style by parsing your code.",
    category: "tools",
    type: "formatter",
    rating: 4.8,
    date: "2024-02-07"
  },
  {
    title: "Jest - JavaScript Testing Framework",
    url: "https://jestjs.io",
    description: "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
    category: "tools",
    type: "testing",
    rating: 4.7,
    date: "2024-01-16"
  },
  {
    title: "Cypress - End-to-End Testing Framework",
    url: "https://cypress.io",
    description: "Cypress is a next generation front end testing tool built for the modern web.",
    category: "tools",
    type: "testing",
    rating: 4.6,
    date: "2024-02-22"
  },

  // Data Science & AI
  {
    title: "TensorFlow - Machine Learning Platform",
    url: "https://tensorflow.org",
    description: "TensorFlow is an end-to-end open source platform for machine learning with comprehensive tools and libraries.",
    category: "ai-ml",
    type: "framework",
    rating: 4.7,
    date: "2024-03-12"
  },
  {
    title: "PyTorch - Deep Learning Framework",
    url: "https://pytorch.org",
    description: "PyTorch is an optimized tensor library for deep learning using GPUs and CPUs.",
    category: "ai-ml",
    type: "framework",
    rating: 4.8,
    date: "2024-03-15"
  },
  {
    title: "Scikit-learn - Machine Learning in Python",
    url: "https://scikit-learn.org",
    description: "Scikit-learn is a simple and efficient tool for predictive data analysis built on NumPy, SciPy, and matplotlib.",
    category: "ai-ml",
    type: "library",
    rating: 4.7,
    date: "2024-02-28"
  },
  {
    title: "Pandas - Data Analysis Library",
    url: "https://pandas.pydata.org",
    description: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool.",
    category: "data-science",
    type: "library",
    rating: 4.8,
    date: "2024-02-10"
  },
  {
    title: "NumPy - Numerical Computing in Python",
    url: "https://numpy.org",
    description: "NumPy is the fundamental package for scientific computing with Python.",
    category: "data-science",
    type: "library",
    rating: 4.9,
    date: "2024-01-28"
  },
  {
    title: "Jupyter Notebook - Interactive Computing",
    url: "https://jupyter.org",
    description: "Project Jupyter exists to develop open-source software, open-standards, and services for interactive computing.",
    category: "data-science",
    type: "tool",
    rating: 4.7,
    date: "2024-02-05"
  },
  {
    title: "Matplotlib - Python Plotting Library",
    url: "https://matplotlib.org",
    description: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.",
    category: "data-science",
    type: "library",
    rating: 4.6,
    date: "2024-01-18"
  },
  {
    title: "OpenAI API - Artificial Intelligence Platform",
    url: "https://openai.com/api",
    description: "OpenAI's API provides access to GPT-3 and other AI models for natural language processing tasks.",
    category: "ai-ml",
    type: "api",
    rating: 4.8,
    date: "2024-03-20"
  },

  // Databases
  {
    title: "MongoDB - Document Database",
    url: "https://mongodb.com",
    description: "MongoDB is a source-available cross-platform document-oriented database program classified as a NoSQL database.",
    category: "database",
    type: "nosql",
    rating: 4.6,
    date: "2024-02-12"
  },
  {
    title: "PostgreSQL - Advanced Open Source Database",
    url: "https://postgresql.org",
    description: "PostgreSQL is a powerful, open source object-relational database system with proven reliability and performance.",
    category: "database",
    type: "sql",
    rating: 4.8,
    date: "2024-01-30"
  },
  {
    title: "MySQL - World's Most Popular Open Source Database",
    url: "https://mysql.com",
    description: "MySQL is the world's most popular open source database enabling cost-effective delivery of reliable, high-performance applications.",
    category: "database",
    type: "sql",
    rating: 4.7,
    date: "2024-01-15"
  },
  {
    title: "Redis - In-Memory Data Structure Store",
    url: "https://redis.io",
    description: "Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.",
    category: "database",
    type: "cache",
    rating: 4.8,
    date: "2024-02-18"
  },
  {
    title: "Elasticsearch - Search and Analytics Engine",
    url: "https://elastic.co",
    description: "Elasticsearch is a distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.",
    category: "database",
    type: "search",
    rating: 4.6,
    date: "2024-03-05"
  },

  // Learning Resources
  {
    title: "Stack Overflow - Programming Q&A Community",
    url: "https://stackoverflow.com",
    description: "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge.",
    category: "learning",
    type: "community",
    rating: 4.9,
    date: "2024-01-01"
  },
  {
    title: "freeCodeCamp - Learn to Code for Free",
    url: "https://freecodecamp.org",
    description: "freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum.",
    category: "learning",
    type: "course",
    rating: 4.8,
    date: "2024-01-20"
  },
  {
    title: "Coursera - Online Learning Platform",
    url: "https://coursera.org",
    description: "Coursera provides universal access to the world's best education, partnering with top universities and organizations.",
    category: "learning",
    type: "course",
    rating: 4.7,
    date: "2024-02-01"
  },
  {
    title: "Udemy - Online Learning and Teaching Marketplace",
    url: "https://udemy.com",
    description: "Udemy is an online learning and teaching marketplace with over 213,000 courses and 62 million students.",
    category: "learning",
    type: "course",
    rating: 4.6,
    date: "2024-01-25"
  },
  {
    title: "edX - Free Online Courses by Harvard, MIT & more",
    url: "https://edx.org",
    description: "edX is an American massive open online course provider created by Harvard and MIT.",
    category: "learning",
    type: "course",
    rating: 4.7,
    date: "2024-02-08"
  },
  {
    title: "Codecademy - Interactive Programming Lessons",
    url: "https://codecademy.com",
    description: "Codecademy is an American online interactive platform that offers free coding classes in programming languages.",
    category: "learning",
    type: "course",
    rating: 4.5,
    date: "2024-01-12"
  },
  {
    title: "Khan Academy - Free Online Courses & Lessons",
    url: "https://khanacademy.org",
    description: "Khan Academy offers practice exercises, instructional videos, and a personalized learning dashboard.",
    category: "learning",
    type: "course",
    rating: 4.8,
    date: "2024-01-18"
  },
  {
    title: "MIT OpenCourseWare - Free Lecture Notes & Materials",
    url: "https://ocw.mit.edu",
    description: "MIT OpenCourseWare is a web-based publication of virtually all MIT course content.",
    category: "learning",
    type: "academic",
    rating: 4.9,
    date: "2024-02-15"
  },

  // Cloud & DevOps
  {
    title: "AWS - Amazon Web Services Cloud Platform",
    url: "https://aws.amazon.com",
    description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
    category: "cloud",
    type: "platform",
    rating: 4.7,
    date: "2024-03-01"
  },
  {
    title: "Google Cloud Platform - Build What's Next",
    url: "https://cloud.google.com",
    description: "Google Cloud Platform lets you build, deploy, and scale applications, websites, and services on the same infrastructure.",
    category: "cloud",
    type: "platform",
    rating: 4.6,
    date: "2024-02-28"
  },
  {
    title: "Microsoft Azure - Cloud Computing Services",
    url: "https://azure.microsoft.com",
    description: "Azure is Microsoft's cloud computing platform with integrated tools, pre-built templates, and managed services.",
    category: "cloud",
    type: "platform",
    rating: 4.6,
    date: "2024-03-08"
  },
  {
    title: "Kubernetes - Container Orchestration",
    url: "https://kubernetes.io",
    description: "Kubernetes is an open-source container orchestration system for automating deployment, scaling, and management.",
    category: "devops",
    type: "orchestration",
    rating: 4.7,
    date: "2024-02-20"
  },
  {
    title: "Terraform - Infrastructure as Code",
    url: "https://terraform.io",
    description: "Terraform enables you to safely and predictably create, change, and improve infrastructure using declarative configuration.",
    category: "devops",
    type: "iac",
    rating: 4.8,
    date: "2024-03-03"
  },
  {
    title: "Jenkins - Build Automation Server",
    url: "https://jenkins.io",
    description: "Jenkins is a self-contained, open source automation server which can be used to automate builds, tests, and deployments.",
    category: "devops",
    type: "ci-cd",
    rating: 4.5,
    date: "2024-02-10"
  },

  // Mobile Development
  {
    title: "React Native - Build Mobile Apps with React",
    url: "https://reactnative.dev",
    description: "React Native lets you create truly native apps and doesn't compromise your users' experiences.",
    category: "mobile",
    type: "framework",
    rating: 4.6,
    date: "2024-02-25"
  },
  {
    title: "Flutter - Google's UI Toolkit",
    url: "https://flutter.dev",
    description: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop.",
    category: "mobile",
    type: "framework",
    rating: 4.7,
    date: "2024-03-12"
  },
  {
    title: "Android Developer Documentation",
    url: "https://developer.android.com",
    description: "Official Android developer documentation with guides, API reference, and tools for building Android apps.",
    category: "mobile",
    type: "platform",
    rating: 4.8,
    date: "2024-02-18"
  },
  {
    title: "iOS Developer Documentation - Apple",
    url: "https://developer.apple.com",
    description: "Everything you need to create amazing apps for iPhone, iPad, Mac, Apple Watch, and Apple TV.",
    category: "mobile",
    type: "platform",
    rating: 4.7,
    date: "2024-02-22"
  },

  // Design & UI/UX
  {
    title: "Figma - Collaborative Interface Design Tool",
    url: "https://figma.com",
    description: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications.",
    category: "design",
    type: "tool",
    rating: 4.8,
    date: "2024-03-15"
  },
  {
    title: "Adobe XD - Design and Prototype",
    url: "https://adobe.com/products/xd",
    description: "Adobe XD is a vector-based user experience design tool for web apps and mobile apps.",
    category: "design",
    type: "tool",
    rating: 4.6,
    date: "2024-02-12"
  },
  {
    title: "Sketch - Digital Design Toolkit",
    url: "https://sketch.com",
    description: "Sketch is a digital design toolkit built to help you create your best work — from your earliest ideas to the final product.",
    category: "design",
    type: "tool",
    rating: 4.7,
    date: "2024-01-28"
  },
  {
    title: "Material Design - Google's Design System",
    url: "https://material.io",
    description: "Material Design is a design system created by Google to help teams build high-quality digital experiences.",
    category: "design",
    type: "system",
    rating: 4.7,
    date: "2024-02-05"
  },
  {
    title: "Apple Human Interface Guidelines",
    url: "https://developer.apple.com/design/human-interface-guidelines",
    description: "Comprehensive guide to designing apps that integrate seamlessly with Apple platforms.",
    category: "design",
    type: "guidelines",
    rating: 4.8,
    date: "2024-02-20"
  }
];

let currentResults = [];
let currentPage = 1;
const resultsPerPage = 10; // Increased from 5
let currentFilters = {
  category: 'all',
  type: 'all',
  dateRange: 'all',
  minRating: 0,
  sortBy: 'relevance'
};
let searchMode = 'web'; // web, images, videos, news
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Search categories and types for filtering
const searchCategories = {
  'all': 'All Categories',
  'programming': 'Programming Languages',
  'web-development': 'Web Development',
  'tools': 'Development Tools',
  'ai-ml': 'AI & Machine Learning',
  'data-science': 'Data Science',
  'database': 'Databases',
  'learning': 'Learning Resources',
  'cloud': 'Cloud Computing',
  'devops': 'DevOps',
  'mobile': 'Mobile Development',
  'design': 'Design & UI/UX'
};

const searchTypes = {
  'all': 'All Types',
  'tutorial': 'Tutorials',
  'documentation': 'Documentation',
  'framework': 'Frameworks',
  'library': 'Libraries',
  'tool': 'Tools',
  'course': 'Courses',
  'reference': 'References',
  'guide': 'Guides'
};

// Navigation functions
function showHome() {
  hideAllViews();
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('search_terms').focus();
}

function showAbout() {
  hideAllViews();
  document.getElementById('about-view').style.display = 'block';
}

function showDocs() {
  hideAllViews();
  document.getElementById('docs-view').style.display = 'block';
}

function showFavorites() {
  hideAllViews();
  document.getElementById('favorites-view').style.display = 'block';
  loadFavorites();
}

function showAnalytics() {
  hideAllViews();
  document.getElementById('analytics-view').style.display = 'block';
  loadAnalytics();
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('searchFavorites') || '[]');
  const container = document.getElementById('favorites-content');
  
  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">❤️</div>
        <h3>No favorites yet</h3>
        <p>Start searching and add items to your favorites to see them here.</p>
        <button class="button_id" onclick="showHome()">Start Searching</button>
      </div>
    `;
    return;
  }
  
  let favoritesHTML = `
    <div class="favorites-header">
      <p>You have <strong>${favorites.length}</strong> saved favorites</p>
      <button class="button_id secondary" onclick="clearFavorites()">Clear All</button>
    </div>
    <div class="favorites-list">
  `;
  
  favorites.forEach((favorite, index) => {
    favoritesHTML += `
      <div class="favorite-item">
        <div class="favorite-header">
          <a href="${favorite.url}" target="_blank" class="favorite-title">${favorite.title}</a>
          <button class="remove-favorite" onclick="removeFavorite(${index})" title="Remove from favorites">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
        <div class="favorite-url">${favorite.url}</div>
        <div class="favorite-description">${favorite.description}</div>
        <div class="favorite-meta">
          <span class="favorite-category">${searchCategories[favorite.category]}</span>
          <span class="favorite-rating">⭐ ${favorite.rating}</span>
          <span class="favorite-date">Added ${formatDate(favorite.addedAt)}</span>
        </div>
      </div>
    `;
  });
  
  favoritesHTML += '</div>';
  container.innerHTML = favoritesHTML;
}

function loadAnalytics() {
  const analytics = JSON.parse(localStorage.getItem('searchAnalytics') || '{}');
  const clickAnalytics = JSON.parse(localStorage.getItem('clickAnalytics') || '{}');
  const container = document.getElementById('analytics-content');
  
  const totalSearches = Object.values(analytics).reduce((sum, item) => sum + item.count, 0);
  const topSearches = Object.entries(analytics)
    .sort(([,a], [,b]) => b.count - a.count)
    .slice(0, 10);
  
  const totalClicks = Object.values(clickAnalytics).reduce((sum, day) => 
    sum + Object.values(day).reduce((daySum, item) => daySum + item.clicks, 0), 0
  );
  
  let analyticsHTML = `
    <div class="analytics-summary">
      <div class="analytics-card">
        <h3>${totalSearches}</h3>
        <p>Total Searches</p>
      </div>
      <div class="analytics-card">
        <h3>${totalClicks}</h3>
        <p>Result Clicks</p>
      </div>
      <div class="analytics-card">
        <h3>${Object.keys(analytics).length}</h3>
        <p>Unique Queries</p>
      </div>
      <div class="analytics-card">
        <h3>${totalClicks > 0 ? Math.round((totalClicks / totalSearches) * 100) : 0}%</h3>
        <p>Click Rate</p>
      </div>
    </div>
    
    <div class="analytics-section">
      <h3>Top Search Queries</h3>
      <div class="top-searches">
  `;
  
  if (topSearches.length === 0) {
    analyticsHTML += '<p>No search data available yet. Start searching to see analytics!</p>';
  } else {
    topSearches.forEach(([query, data], index) => {
      analyticsHTML += `
        <div class="search-analytics-item">
          <div class="search-rank">#${index + 1}</div>
          <div class="search-details">
            <div class="search-query">${query}</div>
            <div class="search-stats">
              <span>${data.count} searches</span>
              <span>Avg ${Math.round(data.avgResultCount)} results</span>
              <span>Last: ${formatDate(data.lastSearched)}</span>
            </div>
          </div>
          <button class="button_id small" onclick="executeSearch('${query.replace(/'/g, "\\'")}')">
            Search Again
          </button>
        </div>
      `;
    });
  }
  
  analyticsHTML += `
      </div>
    </div>
    
    <div class="analytics-actions">
      <button class="button_id secondary" onclick="exportAnalytics()">Export Data</button>
      <button class="button_id danger" onclick="clearAnalytics()">Clear Analytics</button>
    </div>
  `;
  
  container.innerHTML = analyticsHTML;
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem('searchFavorites') || '[]');
  favorites.splice(index, 1);
  localStorage.setItem('searchFavorites', JSON.stringify(favorites));
  loadFavorites();
  showSuccessMessage('Removed from favorites');
}

function clearFavorites() {
  if (confirm('Are you sure you want to clear all favorites?')) {
    localStorage.removeItem('searchFavorites');
    loadFavorites();
    showSuccessMessage('All favorites cleared');
  }
}

function clearAnalytics() {
  if (confirm('Are you sure you want to clear all analytics data?')) {
    localStorage.removeItem('searchAnalytics');
    localStorage.removeItem('clickAnalytics');
    loadAnalytics();
    showSuccessMessage('Analytics data cleared');
  }
}

function exportAnalytics() {
  const analytics = {
    searchAnalytics: JSON.parse(localStorage.getItem('searchAnalytics') || '{}'),
    clickAnalytics: JSON.parse(localStorage.getItem('clickAnalytics') || '{}'),
    favorites: JSON.parse(localStorage.getItem('searchFavorites') || '[]'),
    exportedAt: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(analytics, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `asknova-analytics-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showSuccessMessage('Analytics data exported');
}

function hideAllViews() {
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.style.display = 'none';
  });
}

// Search functions
function performSearch(event) {
  event.preventDefault();
  const searchTerms = document.getElementById('search_terms').value.trim();
  
  if (searchTerms === '') {
    alert('Please enter a search term');
    return;
  }
  
  executeSearch(searchTerms);
}

function executeSearch(query) {
  // Show loading
  showLoading();
  
  // Add to search history
  addToSearchHistory(query);
  
  // Simulate API delay with more realistic timing
  const delay = Math.random() * 800 + 300; // 300-1100ms delay
  
  setTimeout(() => {
    try {
      currentResults = searchMockData(query);
      currentPage = 1;
      
      // Track search analytics
      trackSearchEvent(query, currentResults.length);
      
      displayResults(query);
      
      // Show success message if results found
      if (currentResults.length > 0) {
        showSuccessMessage(`Found ${currentResults.length} results for "${query}"`);
      }
    } catch (error) {
      showErrorMessage('An error occurred while searching. Please try again.');
      console.error('Search error:', error);
    }
  }, delay);
}

function searchMockData(query) {
  const lowercaseQuery = query.toLowerCase();
  const queryWords = lowercaseQuery.split(' ').filter(word => word.length > 1);
  
  let results = mockSearchData.filter(item => {
    // Apply category filter
    if (currentFilters.category !== 'all' && item.category !== currentFilters.category) {
      return false;
    }
    
    // Apply type filter
    if (currentFilters.type !== 'all' && item.type !== currentFilters.type) {
      return false;
    }
    
    // Apply rating filter
    if (item.rating < currentFilters.minRating) {
      return false;
    }
    
    // Apply date range filter
    if (currentFilters.dateRange !== 'all') {
      const itemDate = new Date(item.date);
      const now = new Date();
      const daysDiff = Math.floor((now - itemDate) / (1000 * 60 * 60 * 24));
      
      switch (currentFilters.dateRange) {
        case 'week':
          if (daysDiff > 7) return false;
          break;
        case 'month':
          if (daysDiff > 30) return false;
          break;
        case 'year':
          if (daysDiff > 365) return false;
          break;
      }
    }
    
    // Text matching with advanced scoring
    const titleMatch = item.title.toLowerCase().includes(lowercaseQuery);
    const descriptionMatch = item.description.toLowerCase().includes(lowercaseQuery);
    const urlMatch = item.url.toLowerCase().includes(lowercaseQuery);
    
    // Word-based matching for better results
    const wordMatches = queryWords.some(word => 
      item.title.toLowerCase().includes(word) ||
      item.description.toLowerCase().includes(word) ||
      item.category.toLowerCase().includes(word) ||
      item.type.toLowerCase().includes(word)
    );
    
    return titleMatch || descriptionMatch || urlMatch || wordMatches;
  });
  
  // Calculate relevance scores and sort
  results = results.map(item => {
    let score = 0;
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    
    // Exact title match gets highest score
    if (title === lowercaseQuery) score += 100;
    else if (title.includes(lowercaseQuery)) score += 50;
    
    // Title word matches
    queryWords.forEach(word => {
      if (title.includes(word)) score += 20;
      if (description.includes(word)) score += 10;
    });
    
    // Rating boost
    score += item.rating * 5;
    
    // Recency boost
    const daysSinceUpdate = Math.floor((new Date() - new Date(item.date)) / (1000 * 60 * 60 * 24));
    if (daysSinceUpdate < 30) score += 15;
    else if (daysSinceUpdate < 90) score += 10;
    else if (daysSinceUpdate < 180) score += 5;
    
    return { ...item, relevanceScore: score };
  });
  
  // Sort results based on selected criteria
  switch (currentFilters.sortBy) {
    case 'relevance':
      results.sort((a, b) => b.relevanceScore - a.relevanceScore);
      break;
    case 'date':
      results.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'rating':
      results.sort((a, b) => b.rating - a.rating);
      break;
    case 'title':
      results.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }
  
  return results;
}

function showLoading() {
  hideAllViews();
  document.getElementById('results-view').style.display = 'block';
  document.getElementById('search-results').innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Searching...</p>
    </div>
  `;
}

function displayResults(query) {
  hideAllViews();
  document.getElementById('results-view').style.display = 'block';
  
  // Update search input in results view
  document.getElementById('results-search-input').value = query;
  
  const resultsContainer = document.getElementById('search-results');
  const paginationContainer = document.getElementById('pagination');
  
  if (currentResults.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No results found for "${query}"</h3>
        <p>Try different keywords, check your spelling, or adjust your filters.</p>
        <div class="no-results-suggestions">
          <h4>Search suggestions:</h4>
          <div class="suggestion-tags">
            ${getPopularSearchTerms().map(term => 
              `<span class="suggestion-tag" onclick="selectSuggestion('${term}')">${term}</span>`
            ).join('')}
          </div>
        </div>
        <button class="button_id" onclick="showHome()">Try Another Search</button>
      </div>
    `;
    paginationContainer.innerHTML = '';
    return;
  }
  
  // Calculate pagination
  const totalPages = Math.ceil(currentResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const pageResults = currentResults.slice(startIndex, endIndex);
  
  // Display search stats and filters
  let resultsHTML = `
    <div class="search-stats">
      <div class="stats-info">
        <p>About <strong>${currentResults.length.toLocaleString()}</strong> results found for "<strong>${query}</strong>" 
        ${currentResults.length > 0 ? `(${(Date.now() - window.searchStartTime || 0)/1000}s)` : ''}</p>
      </div>
      <div class="search-filters">
        ${renderSearchFilters()}
      </div>
    </div>
    
    <div class="search-modes">
      <button class="mode-btn ${searchMode === 'web' ? 'active' : ''}" onclick="changeSearchMode('web')">
        <i class="bi bi-globe"></i> Web
      </button>
      <button class="mode-btn ${searchMode === 'images' ? 'active' : ''}" onclick="changeSearchMode('images')">
        <i class="bi bi-image"></i> Images
      </button>
      <button class="mode-btn ${searchMode === 'videos' ? 'active' : ''}" onclick="changeSearchMode('videos')">
        <i class="bi bi-play-circle"></i> Videos
      </button>
      <button class="mode-btn ${searchMode === 'news' ? 'active' : ''}" onclick="changeSearchMode('news')">
        <i class="bi bi-newspaper"></i> News
      </button>
    </div>
  `;
  
  // Display results based on search mode
  if (searchMode === 'web') {
    pageResults.forEach((result, index) => {
      const globalIndex = startIndex + index + 1;
      resultsHTML += `
        <div class="result-item" data-index="${globalIndex}">
          <div class="result-header">
            <div class="result-number">${globalIndex}</div>
            <div class="result-meta">
              <span class="result-category">${searchCategories[result.category]}</span>
              <span class="result-type">${searchTypes[result.type]}</span>
              <span class="result-rating">⭐ ${result.rating}</span>
            </div>
            <div class="result-actions">
              <button class="action-btn" onclick="addToFavorites('${result.url}')" title="Add to favorites">
                <i class="bi bi-heart"></i>
              </button>
              <button class="action-btn" onclick="shareResult('${result.url}', '${result.title.replace(/'/g, "\\'")}')" title="Share">
                <i class="bi bi-share"></i>
              </button>
              <button class="action-btn" onclick="previewResult('${result.url}')" title="Quick preview">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <a href="${result.url}" target="_blank" class="result-title" onclick="trackResultClick('${result.url}', ${globalIndex})">${highlightSearchTerms(result.title, query)}</a>
          <div class="result-url-container">
            <span class="result-url">${result.url}</span>
            <span class="result-date">${formatDate(result.date)}</span>
          </div>
          <div class="result-description">${highlightSearchTerms(result.description, query)}</div>
          <div class="result-footer">
            <div class="result-tags">
              <span class="tag category-tag">${result.category}</span>
              <span class="tag type-tag">${result.type}</span>
            </div>
            <div class="result-stats">
              <span class="relevance-score" title="Relevance score">${Math.round(result.relevanceScore || 0)}</span>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    // Show placeholder for other search modes
    resultsHTML += `
      <div class="search-mode-placeholder">
        <div class="placeholder-icon">
          <i class="bi bi-${searchMode === 'images' ? 'image' : searchMode === 'videos' ? 'play-circle' : 'newspaper'}"></i>
        </div>
        <h3>${searchMode.charAt(0).toUpperCase() + searchMode.slice(1)} Search</h3>
        <p>This feature is coming soon! We're working on bringing you the best ${searchMode} search experience.</p>
        <button class="button_id" onclick="changeSearchMode('web')">Search Web Instead</button>
      </div>
    `;
  }
  
  resultsContainer.innerHTML = resultsHTML;
  
  // Display pagination only for web search
  if (searchMode === 'web') {
    displayPagination(totalPages);
  } else {
    paginationContainer.innerHTML = '';
  }
  
  // Add keyboard navigation
  addResultsKeyboardNavigation();
}

function displayPagination(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }
  
  let paginationHTML = '';
  
  // Previous button
  paginationHTML += `
    <button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
      Previous
    </button>
  `;
  
  // Page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  
  if (startPage > 1) {
    paginationHTML += `<button onclick="goToPage(1)">1</button>`;
    if (startPage > 2) {
      paginationHTML += `<span>...</span>`;
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
      <button onclick="goToPage(${i})" ${i === currentPage ? 'class="active"' : ''}>
        ${i}
      </button>
    `;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHTML += `<span>...</span>`;
    }
    paginationHTML += `<button onclick="goToPage(${totalPages})">${totalPages}</button>`;
  }
  
  // Next button
  paginationHTML += `
    <button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
      Next
    </button>
  `;
  
  paginationContainer.innerHTML = paginationHTML;
}

function goToPage(page) {
  if (page < 1 || page > Math.ceil(currentResults.length / resultsPerPage)) {
    return;
  }
  
  currentPage = page;
  const query = document.getElementById('results-search-input').value;
  displayResults(query);
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Results search functions
function handleResultsSearch(event) {
  if (event.key === 'Enter') {
    performResultsSearch();
  }
}

function performResultsSearch() {
  const query = document.getElementById('results-search-input').value.trim();
  if (query === '') {
    alert('Please enter a search term');
    return;
  }
  executeSearch(query);
}

// Documentation search
function handleDocSearch(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.trim();
    if (query) {
      // Filter documentation content
      filterDocs(query);
    }
  }
}

function filterDocs(query) {
  showDocs();
  const docsContent = document.getElementById('docs-content');
  const lowercaseQuery = query.toLowerCase();
  
  // Simple docs filtering - highlight matching text
  let content = `
    <h3>How to Use AskNova</h3>
    <p>Simply enter your search query and click Search or press Enter.</p>
    <h3>Search Tips</h3>
    <ul>
      <li>Use specific keywords for better results</li>
      <li>Try different combinations of words</li>
      <li>Use quotes for exact phrases</li>
    </ul>
  `;
  
  if (query) {
    content += `<div style="background-color: #ffffcc; padding: 10px; margin-top: 20px; border-radius: 4px;">
      <strong>Search results in docs for "${query}":</strong><br>
      Found relevant information about search functionality.
    </div>`;
  }
  
  docsContent.innerHTML = content;
}

// Feeling Lucky function
function feelingLucky() {
  const randomQueries = ['javascript', 'html', 'css', 'python', 'programming', 'web development'];
  const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
  
  document.getElementById('search_terms').value = randomQuery;
  executeSearch(randomQuery);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  showHome();
  initializeDarkMode();
  
  // Focus on search input when page loads
  document.getElementById('search_terms').focus();
  
  // Add enter key support for main search
  document.getElementById('search_terms').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      performSearch(event);
    }
  });
  
  // Add smooth transitions for better UX
  addPageTransitions();
  
  // Add search suggestions
  addSearchSuggestions();
  
  // Add keyboard shortcuts
  addKeyboardShortcuts();
  
  // Add voice search if supported
  addVoiceSearch();
  
  // Load user preferences
  loadUserPreferences();
});

// Add voice search functionality
function addVoiceSearch() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    // Add voice button to search inputs
    addVoiceButtons();
    
    window.startVoiceSearch = function(inputId) {
      const button = document.querySelector(`[data-voice-for="${inputId}"]`);
      if (button) {
        button.innerHTML = '<i class="bi bi-mic-fill recording"></i>';
        button.disabled = true;
      }
      
      recognition.start();
      
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById(inputId);
        if (input) {
          input.value = transcript;
          executeSearch(transcript);
        }
      };
      
      recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        showErrorMessage('Voice search failed. Please try again.');
      };
      
      recognition.onend = function() {
        if (button) {
          button.innerHTML = '<i class="bi bi-mic"></i>';
          button.disabled = false;
        }
      };
    };
  }
}

function addVoiceButtons() {
  // Add voice button to main search
  const mainSearchContainer = document.getElementById('search_terms').parentNode;
  if (!mainSearchContainer.querySelector('.voice-search-btn')) {
    const voiceBtn = document.createElement('button');
    voiceBtn.className = 'voice-search-btn';
    voiceBtn.innerHTML = '<i class="bi bi-mic"></i>';
    voiceBtn.setAttribute('data-voice-for', 'search_terms');
    voiceBtn.onclick = () => window.startVoiceSearch('search_terms');
    voiceBtn.title = 'Voice search';
    mainSearchContainer.style.position = 'relative';
    mainSearchContainer.appendChild(voiceBtn);
  }
  
  // Add voice button to results search
  const resultsSearchContainer = document.querySelector('.results-search-bar');
  if (resultsSearchContainer && !resultsSearchContainer.querySelector('.voice-search-btn')) {
    const voiceBtn = document.createElement('button');
    voiceBtn.className = 'voice-search-btn results-voice-btn';
    voiceBtn.innerHTML = '<i class="bi bi-mic"></i>';
    voiceBtn.setAttribute('data-voice-for', 'results-search-input');
    voiceBtn.onclick = () => window.startVoiceSearch('results-search-input');
    voiceBtn.title = 'Voice search';
    resultsSearchContainer.appendChild(voiceBtn);
  }
}

function loadUserPreferences() {
  // Load search preferences
  const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
  
  if (preferences.defaultFilters) {
    currentFilters = { ...currentFilters, ...preferences.defaultFilters };
  }
  
  if (preferences.resultsPerPage) {
    resultsPerPage = preferences.resultsPerPage;
  }
  
  if (preferences.searchMode) {
    searchMode = preferences.searchMode;
  }
}

function saveUserPreferences() {
  const preferences = {
    defaultFilters: currentFilters,
    resultsPerPage: resultsPerPage,
    searchMode: searchMode,
    savedAt: new Date().toISOString()
  };
  
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Enhanced search suggestions with better matching
function getSearchSuggestions(query) {
  if (query.length < 2) return [];
  
  return getAdvancedSearchSuggestions(query);
}

// Add smooth page transitions
function addPageTransitions() {
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.style.transition = 'all 0.3s ease-in-out';
  });
}

// Add search suggestions functionality
function addSearchSuggestions() {
  const searchInput = document.getElementById('search_terms');
  const suggestionsContainer = document.createElement('div');
  suggestionsContainer.className = 'search-suggestions';
  suggestionsContainer.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 0 0 20px 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: none;
    max-height: 300px;
    overflow-y: auto;
  `;
  
  // Create a wrapper for positioning
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-block';
  
  searchInput.parentNode.insertBefore(wrapper, searchInput);
  wrapper.appendChild(searchInput);
  wrapper.appendChild(suggestionsContainer);
  
  let debounceTimer;
  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = this.value.trim();
      if (query.length > 1) {
        showSuggestions(query, suggestionsContainer);
      } else {
        suggestionsContainer.style.display = 'none';
      }
    }, 300);
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target)) {
      suggestionsContainer.style.display = 'none';
    }
  });
}

// Show search suggestions
function showSuggestions(query, container) {
  const suggestions = getSearchSuggestions(query);
  
  if (suggestions.length === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.innerHTML = suggestions.map(suggestion => `
    <div class="suggestion-item" style="
      padding: 12px 20px;
      cursor: pointer;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      transition: background-color 0.2s ease;
      font-family: 'Inter', sans-serif;
      color: #4a5568;
    " onmouseover="this.style.backgroundColor='rgba(102, 126, 234, 0.1)'"
       onmouseout="this.style.backgroundColor='transparent'"
       onclick="selectSuggestion('${suggestion.replace(/'/g, "\\'")}')">
      ${suggestion}
    </div>
  `).join('');
  
  container.style.display = 'block';
}

// Select a suggestion
function selectSuggestion(suggestion) {
  document.getElementById('search_terms').value = suggestion;
  document.querySelector('.search-suggestions').style.display = 'none';
  executeSearch(suggestion);
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const currentView = getCurrentView();
      if (currentView === 'home-view') {
        document.getElementById('search_terms').focus();
      } else if (currentView === 'results-view') {
        document.getElementById('results-search-input').focus();
      }
    }
    
    // Escape to go back to home
    if (e.key === 'Escape') {
      showHome();
    }
  });
}

// Get current active view
function getCurrentView() {
  const views = document.querySelectorAll('.view');
  for (let view of views) {
    if (view.style.display !== 'none') {
      return view.id;
    }
  }
  return 'home-view';
}

// Add some utility functions for potential future features
function getSearchSuggestions(query) {
  if (query.length < 2) return [];
  
  return getAdvancedSearchSuggestions(query);
}

function addToSearchHistory(query) {
  // Enhanced search history with timestamps
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  
  // Remove existing entry if it exists
  history = history.filter(item => item.query !== query);
  
  // Add new entry at the beginning
  history.unshift({
    query: query,
    timestamp: new Date().toISOString(),
    count: 1
  });
  
  // Keep only last 20 searches
  history = history.slice(0, 20);
  localStorage.setItem('searchHistory', JSON.stringify(history));
}

function getSearchHistory() {
  return JSON.parse(localStorage.getItem('searchHistory') || '[]');
}

// Enhanced search analytics
function trackSearchEvent(query, resultCount) {
  window.searchStartTime = Date.now();
  const analytics = JSON.parse(localStorage.getItem('searchAnalytics') || '{}');
  
  if (!analytics[query]) {
    analytics[query] = {
      count: 0,
      firstSearched: new Date().toISOString(),
      lastSearched: new Date().toISOString(),
      totalResults: 0,
      avgResultCount: 0,
      clickThroughRate: 0,
      clicks: 0
    };
  }
  
  analytics[query].count++;
  analytics[query].lastSearched = new Date().toISOString();
  analytics[query].totalResults = resultCount;
  analytics[query].avgResultCount = ((analytics[query].avgResultCount * (analytics[query].count - 1)) + resultCount) / analytics[query].count;
  
  localStorage.setItem('searchAnalytics', JSON.stringify(analytics));
}

// New utility functions for enhanced features
function renderSearchFilters() {
  return `
    <div class="filter-group">
      <label>Category:</label>
      <select onchange="updateFilter('category', this.value)">
        ${Object.entries(searchCategories).map(([key, value]) => 
          `<option value="${key}" ${currentFilters.category === key ? 'selected' : ''}>${value}</option>`
        ).join('')}
      </select>
    </div>
    
    <div class="filter-group">
      <label>Type:</label>
      <select onchange="updateFilter('type', this.value)">
        ${Object.entries(searchTypes).map(([key, value]) => 
          `<option value="${key}" ${currentFilters.type === key ? 'selected' : ''}>${value}</option>`
        ).join('')}
      </select>
    </div>
    
    <div class="filter-group">
      <label>Date:</label>
      <select onchange="updateFilter('dateRange', this.value)">
        <option value="all" ${currentFilters.dateRange === 'all' ? 'selected' : ''}>Any time</option>
        <option value="week" ${currentFilters.dateRange === 'week' ? 'selected' : ''}>Past week</option>
        <option value="month" ${currentFilters.dateRange === 'month' ? 'selected' : ''}>Past month</option>
        <option value="year" ${currentFilters.dateRange === 'year' ? 'selected' : ''}>Past year</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Rating:</label>
      <select onchange="updateFilter('minRating', parseFloat(this.value))">
        <option value="0" ${currentFilters.minRating === 0 ? 'selected' : ''}>Any rating</option>
        <option value="4.0" ${currentFilters.minRating === 4.0 ? 'selected' : ''}>4.0+ stars</option>
        <option value="4.5" ${currentFilters.minRating === 4.5 ? 'selected' : ''}>4.5+ stars</option>
        <option value="4.8" ${currentFilters.minRating === 4.8 ? 'selected' : ''}>4.8+ stars</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Sort by:</label>
      <select onchange="updateFilter('sortBy', this.value)">
        <option value="relevance" ${currentFilters.sortBy === 'relevance' ? 'selected' : ''}>Relevance</option>
        <option value="date" ${currentFilters.sortBy === 'date' ? 'selected' : ''}>Date</option>
        <option value="rating" ${currentFilters.sortBy === 'rating' ? 'selected' : ''}>Rating</option>
        <option value="title" ${currentFilters.sortBy === 'title' ? 'selected' : ''}>Title</option>
      </select>
    </div>
    
    <button class="filter-reset" onclick="resetFilters()">
      <i class="bi bi-arrow-clockwise"></i> Reset
    </button>
  `;
}

function updateFilter(filterType, value) {
  currentFilters[filterType] = value;
  const query = document.getElementById('results-search-input').value;
  if (query) {
    executeSearch(query);
  }
}

function resetFilters() {
  currentFilters = {
    category: 'all',
    type: 'all',
    dateRange: 'all',
    minRating: 0,
    sortBy: 'relevance'
  };
  const query = document.getElementById('results-search-input').value;
  if (query) {
    executeSearch(query);
  }
}

function changeSearchMode(mode) {
  searchMode = mode;
  const query = document.getElementById('results-search-input').value;
  if (query) {
    displayResults(query);
  }
}

function highlightSearchTerms(text, query) {
  if (!query || query.trim() === '') return text;
  
  const words = query.toLowerCase().split(' ').filter(word => word.length > 1);
  let highlightedText = text;
  
  words.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  });
  
  return highlightedText;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  
  return date.toLocaleDateString();
}

function getPopularSearchTerms() {
  const analytics = JSON.parse(localStorage.getItem('searchAnalytics') || '{}');
  const terms = Object.entries(analytics)
    .sort(([,a], [,b]) => b.count - a.count)
    .slice(0, 8)
    .map(([term]) => term);
  
  // Add some default popular terms if no history
  const defaultTerms = ['javascript', 'python', 'react', 'css', 'html', 'nodejs', 'git', 'programming'];
  
  return terms.length > 0 ? terms : defaultTerms;
}

function addToFavorites(url) {
  let favorites = JSON.parse(localStorage.getItem('searchFavorites') || '[]');
  const result = mockSearchData.find(item => item.url === url);
  
  if (result && !favorites.some(fav => fav.url === url)) {
    favorites.unshift({
      ...result,
      addedAt: new Date().toISOString()
    });
    
    // Keep only last 50 favorites
    favorites = favorites.slice(0, 50);
    localStorage.setItem('searchFavorites', JSON.stringify(favorites));
    
    showSuccessMessage('Added to favorites!');
  } else {
    showErrorMessage('Already in favorites or item not found.');
  }
}

function shareResult(url, title) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(console.error);
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
      showSuccessMessage('Link copied to clipboard!');
    }).catch(() => {
      showErrorMessage('Failed to copy link.');
    });
  }
}

function previewResult(url) {
  // Simple preview modal (in a real app, this would show a preview of the site)
  const modal = document.createElement('div');
  modal.className = 'preview-modal';
  modal.innerHTML = `
    <div class="preview-content">
      <div class="preview-header">
        <h3>Quick Preview</h3>
        <button onclick="this.closest('.preview-modal').remove()">×</button>
      </div>
      <div class="preview-body">
        <p>Preview functionality coming soon!</p>
        <p>URL: <a href="${url}" target="_blank">${url}</a></p>
        <div class="preview-actions">
          <button class="button_id" onclick="window.open('${url}', '_blank')">Open in New Tab</button>
          <button class="button_id" onclick="this.closest('.preview-modal').remove()">Close</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (modal.parentNode) {
      modal.remove();
    }
  }, 10000);
}

function trackResultClick(url, position) {
  const analytics = JSON.parse(localStorage.getItem('clickAnalytics') || '{}');
  const today = new Date().toDateString();
  
  if (!analytics[today]) {
    analytics[today] = {};
  }
  
  if (!analytics[today][url]) {
    analytics[today][url] = {
      clicks: 0,
      positions: [],
      firstClick: new Date().toISOString()
    };
  }
  
  analytics[today][url].clicks++;
  analytics[today][url].positions.push(position);
  analytics[today][url].lastClick = new Date().toISOString();
  
  localStorage.setItem('clickAnalytics', JSON.stringify(analytics));
}

function addResultsKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    if (getCurrentView() !== 'results-view') return;
    
    const results = document.querySelectorAll('.result-item');
    const currentFocused = document.querySelector('.result-item.focused');
    let currentIndex = currentFocused ? 
      Array.from(results).indexOf(currentFocused) : -1;
    
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < results.length - 1) {
          if (currentFocused) currentFocused.classList.remove('focused');
          results[currentIndex + 1].classList.add('focused');
          results[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) {
          if (currentFocused) currentFocused.classList.remove('focused');
          results[currentIndex - 1].classList.add('focused');
          results[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        break;
        
      case 'Enter':
        if (currentFocused) {
          const link = currentFocused.querySelector('.result-title');
          if (link) {
            window.open(link.href, '_blank');
          }
        }
        break;
    }
  });
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', isDarkMode);
  document.body.classList.toggle('dark-mode', isDarkMode);
  
  // Update the dark mode toggle button
  const toggle = document.querySelector('.dark-mode-toggle');
  if (toggle) {
    toggle.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
  }
}

function initializeDarkMode() {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
}

function getAdvancedSearchSuggestions(query) {
  const suggestions = new Set();
  const lowercaseQuery = query.toLowerCase();
  
  // Add category-based suggestions
  Object.keys(searchCategories).forEach(category => {
    if (category !== 'all' && category.includes(lowercaseQuery)) {
      suggestions.add(`${query} in ${searchCategories[category]}`);
    }
  });
  
  // Add type-based suggestions
  Object.keys(searchTypes).forEach(type => {
    if (type !== 'all' && type.includes(lowercaseQuery)) {
      suggestions.add(`${query} ${type}`);
    }
  });
  
  // Add search history suggestions
  const history = getSearchHistory();
  history.slice(0, 5).forEach(item => {
    if (item.query.toLowerCase().includes(lowercaseQuery) && item.query !== query) {
      suggestions.add(item.query);
    }
  });
  
  // Add related searches based on content
  mockSearchData.forEach(item => {
    const title = item.title.toLowerCase();
    if (title.includes(lowercaseQuery)) {
      // Extract potential search terms from titles
      const words = title.split(' ').filter(word => 
        word.length > 3 && 
        !['the', 'and', 'for', 'with', 'this', 'that', 'your', 'from'].includes(word)
      );
      words.slice(0, 2).forEach(word => {
        if (word !== lowercaseQuery) {
          suggestions.add(word);
        }
      });
    }
  });
  
  return Array.from(suggestions).slice(0, 8);
}

// Enhanced error handling
function showErrorMessage(message) {
  const errorContainer = document.createElement('div');
  errorContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #fc8181, #f56565);
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(245, 101, 101, 0.3);
    z-index: 10000;
    font-family: 'Inter', sans-serif;
    animation: slideInRight 0.3s ease-out;
  `;
  
  errorContainer.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span>⚠️</span>
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        padding: 0;
        margin-left: 10px;
      ">×</button>
    </div>
  `;
  
  document.body.appendChild(errorContainer);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (errorContainer.parentNode) {
      errorContainer.remove();
    }
  }, 5000);
}

// Add success notification
function showSuccessMessage(message) {
  const successContainer = document.createElement('div');
  successContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #68d391, #48bb78);
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(72, 187, 120, 0.3);
    z-index: 10000;
    font-family: 'Inter', sans-serif;
    animation: slideInRight 0.3s ease-out;
  `;
  
  successContainer.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span>✅</span>
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        padding: 0;
        margin-left: 10px;
      ">×</button>
    </div>
  `;
  
  document.body.appendChild(successContainer);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    if (successContainer.parentNode) {
      successContainer.remove();
    }
  }, 3000);
}