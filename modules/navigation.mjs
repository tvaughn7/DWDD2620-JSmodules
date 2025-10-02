// Clean navigation module with CSS-based responsive styling
export function navbar(links) {
    // Get reference to the nav element that already exists in HTML
    const navElement = document.querySelector('nav');
    
    // Apply basic styling to the nav element
    navElement.className = '';
    
    // Create unordered list for navigation items
    const ul = document.createElement('ul');
    ul.className = 'nav-list';
    
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
        
        // Apply CSS classes based on current page
        const isCurrentPage = currentPage === e.url;
        linkAnchor.className = isCurrentPage 
            ? 'nav-link current' 
            : 'nav-link';
        
        // Append anchor to list item
        li.appendChild(linkAnchor);
        
        // Add list item to unordered list
        ul.appendChild(li);
    });
    
    // Clear existing nav content and append new ul
    navElement.innerHTML = '';
    navElement.appendChild(ul);
}