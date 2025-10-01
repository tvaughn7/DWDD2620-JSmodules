// Footer module that accepts the current year as parameter
export function footer(y) {
    // Get reference to the footer element that already exists in HTML
    const footerElement = document.querySelector('footer');
    
    // Set the innerHTML using template literals
    footerElement.innerHTML = `
        <div class="bg-slate-800 text-white py-8">
            <div class="container mx-auto px-4 text-center">
                <p class="text-gray-300 text-sm">
                    &copy; ${y} My Website. Created by Taylor Vaughn. All rights reserved.
                </p>
            </div>
        </div>
    `;
}