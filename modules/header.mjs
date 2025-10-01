// Simplified header module
export function header() {
    const headerElement = document.querySelector('header');
    
    // Set header background
    headerElement.className = 'bg-slate-900 text-white py-4';
    
    // Create simplified header structure with template literal
    headerElement.innerHTML = `
        <div class="container mx-auto px-4 flex items-center justify-between">
            <a href="index.html" class="flex items-center space-x-2 text-white hover:opacity-80">
                <img src="./images/logo.svg" alt="Logo" class="w-10 h-10">
                <span class="text-xl font-bold">Taylor's Website</span>
            </a>
            <div class="flex items-center space-x-4">
                <a href="#" class=" p-2">
                    <img src="./images/profile.svg" alt="Profile" class="w-6 h-6">
                </a>
                <a href="#" class=" p-2">
                    <img src="./images/cart.svg" alt="Cart" class="w-6 h-6">
                </a>
            </div>
        </div>
    `;
}