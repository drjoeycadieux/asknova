// Mock search data - In a real application, this would come from a backend API
const mockSearchData = [
  {
    title: "JavaScript Tutorial - Learn JavaScript Programming",
    url: "https://javascript.info",
    description: "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more."
  },
  {
    title: "HTML & CSS - Web Development Basics",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    description: "Learn web development with HTML, CSS, and JavaScript. Start with the basics and advance to complex web applications."
  },
  {
    title: "Node.js Documentation",
    url: "https://nodejs.org/en/docs/",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model."
  },
  {
    title: "React - A JavaScript Library for Building User Interfaces",
    url: "https://reactjs.org",
    description: "React makes it painless to create interactive UIs. Design simple views for each state in your application."
  },
  {
    title: "Python Programming Language",
    url: "https://python.org",
    description: "Python is a programming language that lets you work quickly and integrate systems more effectively."
  },
  {
    title: "Git Version Control",
    url: "https://git-scm.com",
    description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects."
  },
  {
    title: "Stack Overflow - Programming Q&A",
    url: "https://stackoverflow.com",
    description: "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge."
  },
  {
    title: "GitHub - Code Hosting Platform",
    url: "https://github.com",
    description: "GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code."
  },
  {
    title: "VS Code - Code Editor",
    url: "https://code.visualstudio.com",
    description: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux."
  },
  {
    title: "Bootstrap - CSS Framework",
    url: "https://getbootstrap.com",
    description: "Bootstrap is the world's most popular CSS framework for building responsive, mobile-first sites."
  }
];

let currentResults = [];
let currentPage = 1;
const resultsPerPage = 5;

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
  return mockSearchData.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.url.toLowerCase().includes(lowercaseQuery)
  );
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
      <div style="text-align: center; color: white; padding: 40px;">
        <h3>No results found for "${query}"</h3>
        <p>Try different keywords or check your spelling.</p>
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
  
  // Display results
  let resultsHTML = `
    <div style="color: white; margin-bottom: 20px;">
      <p>About ${currentResults.length} results found for "${query}"</p>
    </div>
  `;
  
  pageResults.forEach(result => {
    resultsHTML += `
      <div class="result-item">
        <a href="${result.url}" target="_blank" class="result-title">${result.title}</a>
        <div class="result-url">${result.url}</div>
        <div class="result-description">${result.description}</div>
      </div>
    `;
  });
  
  resultsContainer.innerHTML = resultsHTML;
  
  // Display pagination
  displayPagination(totalPages);
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
});

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
  // Enhanced search suggestions with better matching
  const lowercaseQuery = query.toLowerCase();
  const suggestions = new Set();
  
  // Add exact matches first
  mockSearchData.forEach(item => {
    const title = item.title.toLowerCase();
    if (title.includes(lowercaseQuery)) {
      suggestions.add(item.title);
    }
  });
  
  // Add keyword suggestions
  const keywords = ['javascript', 'html', 'css', 'python', 'react', 'node.js', 'git', 'github', 'programming', 'tutorial', 'documentation', 'web development', 'frontend', 'backend'];
  keywords.forEach(keyword => {
    if (keyword.toLowerCase().includes(lowercaseQuery) && suggestions.size < 8) {
      suggestions.add(keyword);
    }
  });
  
  return Array.from(suggestions).slice(0, 6);
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

// Add search analytics
function trackSearchEvent(query, resultCount) {
  const analytics = JSON.parse(localStorage.getItem('searchAnalytics') || '{}');
  
  if (!analytics[query]) {
    analytics[query] = {
      count: 0,
      firstSearched: new Date().toISOString(),
      lastSearched: new Date().toISOString(),
      totalResults: 0
    };
  }
  
  analytics[query].count++;
  analytics[query].lastSearched = new Date().toISOString();
  analytics[query].totalResults = resultCount;
  
  localStorage.setItem('searchAnalytics', JSON.stringify(analytics));
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