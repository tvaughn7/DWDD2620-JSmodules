// Simplified navigation module with blue background and white text
export function navbar(links) {
    // Get reference to the nav element that already exists in HTML
    const navElement = document.querySelector('nav');
    
    // Apply blue background to the nav element
    navElement.className = 'bg-slate-900 py-4';
    
    // Create unordered list for navigation items
    const ul = document.createElement('ul');
    ul.className = 'flex justify-center items-center space-x-8';
    
    // Get current page for wayfinding
    const currentPage = window.location.pathname.split('/').pop();
    
    // Loop through each link in the JSON data
    links.forEach((e) => {
        // Create list item
        const li = document.createElement('li');
        
        // Create anchor element
        const linkAnchor = document.createElement('a');
        linkAnchor.href = e.url;
        linkAnchor.textContent = e.name;
        
        // White text with hover effect, highlight current page
        const isCurrentPage = currentPage === e.url;
        linkAnchor.className = isCurrentPage 
            ? 'text-white font-bold py-2 px-4 border-b-2 border-white' 
            : 'text-white py-2 px-4 hover:text-blue-200 transition-colors duration-200';
        
        // Append anchor to list item
        li.appendChild(linkAnchor);
        
        // Add list item to unordered list
        ul.appendChild(li);
    });
    
    // Clear existing nav content and append new ul
    navElement.innerHTML = '';
    navElement.appendChild(ul);
}