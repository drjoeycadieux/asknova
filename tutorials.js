// Original Tutorial Content for AskNova Developer Hub
// This provides substantial, original educational content for AdSense approval

const originalTutorials = [
  {
    id: 'js-es2024',
    title: 'JavaScript ES2024 Features: Complete Guide',
    category: 'javascript',
    difficulty: 'intermediate',
    readTime: '15 min',
    publishDate: '2025-01-15',
    content: `
# JavaScript ES2024 Features: Complete Guide

## Introduction
JavaScript ES2024 (ES15) introduces several powerful features that enhance developer productivity and code maintainability. In this comprehensive guide, we'll explore the most significant additions to the language.

## 1. Array.fromAsync()

The \`Array.fromAsync()\` method allows you to create arrays from async iterables:

\`\`\`javascript
// Example: Converting async iterable to array
async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const array = await Array.fromAsync(asyncGenerator());
console.log(array); // [1, 2, 3]
\`\`\`

## 2. Decorator Support

Decorators provide a clean way to modify class behavior:

\`\`\`javascript
function logged(target, context) {
  return function(...args) {
    console.log(\`Calling \${context.name}\`);
    return target.apply(this, args);
  };
}

class Calculator {
  @logged
  add(a, b) {
    return a + b;
  }
}
\`\`\`

## 3. Promise.withResolvers()

This new method provides a cleaner way to create promises:

\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvers();

// Use resolve/reject as needed
setTimeout(() => resolve('Done!'), 1000);
\`\`\`

## Best Practices

1. **Use Array.fromAsync() for data processing pipelines**
2. **Apply decorators for cross-cutting concerns**
3. **Leverage Promise.withResolvers() for complex async patterns**

## Conclusion

These ES2024 features provide powerful tools for modern JavaScript development. Start incorporating them into your projects to write more efficient, maintainable code.
    `,
    codeExamples: [
      {
        title: 'Array.fromAsync() with API calls',
        code: `async function fetchMultipleUrls(urls) {
  async function* urlGenerator() {
    for (const url of urls) {
      const response = await fetch(url);
      yield response.json();
    }
  }
  
  return await Array.fromAsync(urlGenerator());
}`
      }
    ]
  },
  
  {
    id: 'css-grid-advanced',
    title: 'Advanced CSS Grid Layouts with Subgrid',
    category: 'css',
    difficulty: 'advanced',
    readTime: '20 min',
    publishDate: '2025-01-12',
    content: `
# Advanced CSS Grid Layouts with Subgrid

## Understanding CSS Subgrid

CSS Subgrid allows nested grids to participate in the sizing of their parent grid, creating more sophisticated and flexible layouts.

## Basic Subgrid Implementation

\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1rem;
}

.nested-grid {
  display: grid;
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
\`\`\`

## Real-World Example: Card Layout

\`\`\`css
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.card-header {
  padding: 1rem;
  background: #f5f5f5;
}

.card-body {
  padding: 1rem;
  display: grid;
  grid-template-columns: subgrid;
  align-content: start;
}

.card-footer {
  padding: 1rem;
  border-top: 1px solid #eee;
}
\`\`\`

## Container Queries Integration

\`\`\`css
@container (min-width: 400px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 600px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Performance Considerations

1. **Minimize nested subgrids** for better performance
2. **Use container queries sparingly** in complex layouts
3. **Test across different browsers** for compatibility

## Browser Support

Subgrid is supported in:
- Firefox 71+
- Safari 16+
- Chrome 117+

Always provide fallbacks for older browsers.
    `,
    codeExamples: [
      {
        title: 'Responsive Card Grid with Subgrid',
        code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  border: 1px solid #ccc;
  border-radius: 8px;
}`
      }
    ]
  },

  {
    id: 'python-performance',
    title: 'Python Performance Optimization: Advanced Techniques',
    category: 'python',
    difficulty: 'advanced',
    readTime: '25 min',
    publishDate: '2025-01-10',
    content: `
# Python Performance Optimization: Advanced Techniques

## Introduction

Python's simplicity often comes at a performance cost. However, with the right techniques, you can significantly improve your Python application's speed and efficiency.

## 1. Use Built-in Functions and Libraries

Built-in functions are implemented in C and are much faster than pure Python equivalents:

\`\`\`python
# Slow: Using loops
def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# Fast: Using built-in sum()
def sum_list_fast(numbers):
    return sum(numbers)

# Benchmark shows 3-5x improvement
\`\`\`

## 2. List Comprehensions vs Loops

List comprehensions are not just more readable—they're faster:

\`\`\`python
# Slow: Traditional loop
squares = []
for i in range(1000):
    squares.append(i * i)

# Fast: List comprehension
squares = [i * i for i in range(1000)]

# Even faster: Generator expression for large datasets
squares_gen = (i * i for i in range(1000))
\`\`\`

## 3. Use Local Variables

Accessing local variables is faster than global variables:

\`\`\`python
import math

# Slow: Global lookup
def calculate_circles(radii):
    areas = []
    for r in radii:
        areas.append(math.pi * r * r)
    return areas

# Fast: Local variable
def calculate_circles_fast(radii):
    pi = math.pi  # Local reference
    areas = []
    for r in radii:
        areas.append(pi * r * r)
    return areas
\`\`\`

## 4. Efficient Data Structures

Choose the right data structure for your use case:

\`\`\`python
from collections import deque, defaultdict, Counter

# Use deque for frequent insertions/deletions at both ends
queue = deque([1, 2, 3])
queue.appendleft(0)  # O(1)
queue.pop()          # O(1)

# Use defaultdict to avoid key checking
dd = defaultdict(list)
dd['key'].append(value)  # No KeyError risk

# Use Counter for counting operations
counts = Counter(['a', 'b', 'a', 'c', 'b', 'a'])
print(counts['a'])  # 3
\`\`\`

## 5. NumPy for Numerical Operations

For numerical computations, NumPy provides significant speedups:

\`\`\`python
import numpy as np

# Slow: Pure Python
def python_sum(arr):
    return sum(x * x for x in arr)

# Fast: NumPy
def numpy_sum(arr):
    np_arr = np.array(arr)
    return np.sum(np_arr * np_arr)

# NumPy is 10-100x faster for numerical operations
\`\`\`

## 6. Caching and Memoization

Use caching for expensive function calls:

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# First call calculates, subsequent calls use cache
print(fibonacci(30))  # Calculated
print(fibonacci(30))  # Cached - much faster
\`\`\`

## 7. String Operations

Efficient string handling techniques:

\`\`\`python
# Slow: String concatenation in loop
result = ""
for item in items:
    result += str(item)

# Fast: Join method
result = "".join(str(item) for item in items)

# Fast: f-strings for formatting
name = "World"
greeting = f"Hello, {name}!"  # Faster than .format()
\`\`\`

## 8. Profile Your Code

Use profiling tools to identify bottlenecks:

\`\`\`python
import cProfile
import pstats

def profile_function():
    # Your code here
    pass

# Profile the function
cProfile.run('profile_function()', 'profile_stats')
stats = pstats.Stats('profile_stats')
stats.sort_stats('cumulative').print_stats(10)
\`\`\`

## 9. Multiprocessing for CPU-bound Tasks

Use multiprocessing for CPU-intensive operations:

\`\`\`python
from multiprocessing import Pool
import math

def cpu_intensive_task(n):
    return sum(math.sqrt(i) for i in range(n))

# Sequential processing
results = [cpu_intensive_task(1000000) for _ in range(4)]

# Parallel processing
with Pool() as pool:
    results = pool.map(cpu_intensive_task, [1000000] * 4)
\`\`\`

## 10. Async/Await for I/O-bound Tasks

Use asyncio for I/O-bound operations:

\`\`\`python
import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_multiple_urls(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        return await asyncio.gather(*tasks)

# This is much faster than sequential requests
\`\`\`

## Performance Testing Tools

1. **timeit**: For micro-benchmarks
2. **cProfile**: Built-in profiler
3. **line_profiler**: Line-by-line profiling
4. **memory_profiler**: Memory usage analysis
5. **py-spy**: Sampling profiler

## Best Practices Summary

1. **Profile first, optimize second**
2. **Use built-in functions when possible**
3. **Choose appropriate data structures**
4. **Cache expensive computations**
5. **Use NumPy for numerical work**
6. **Consider multiprocessing/asyncio for concurrency**
7. **Optimize string operations**
8. **Avoid premature optimization**

## Conclusion

Python performance optimization is about understanding your bottlenecks and applying the right techniques. Always measure before and after optimization to ensure you're making meaningful improvements.
    `,
    codeExamples: [
      {
        title: 'Performance Comparison: List vs NumPy',
        code: `import numpy as np
import time

# Python list approach
def python_approach(size):
    data = list(range(size))
    return [x * x for x in data]

# NumPy approach
def numpy_approach(size):
    data = np.arange(size)
    return data * data

# Benchmark
size = 1000000
start = time.time()
result1 = python_approach(size)
python_time = time.time() - start

start = time.time()
result2 = numpy_approach(size)
numpy_time = time.time() - start

print(f"Python: {python_time:.4f}s")
print(f"NumPy: {numpy_time:.4f}s")
print(f"Speedup: {python_time/numpy_time:.2f}x")`
      }
    ]
  }
];

// Tutorial loading and display functions
function loadTutorials() {
  return originalTutorials;
}

function getTutorialById(id) {
  return originalTutorials.find(tutorial => tutorial.id === id);
}

function getTutorialsByCategory(category) {
  if (category === 'all') return originalTutorials;
  return originalTutorials.filter(tutorial => tutorial.category === category);
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { originalTutorials, loadTutorials, getTutorialById, getTutorialsByCategory };
}
