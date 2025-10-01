// Import the header and footer functions from the modules
import { header } from './modules/header.mjs';
import { footer } from './modules/footer.mjs';
import { navbar } from './modules/navigation.mjs';

// Import the navigation links data from the data folder
import { links } from './data/links.js';

// Execute the header function to build the header
header();

// Execute the footer function and send along 2025
footer(2025);

// Execute the navbar function and send along the links data
navbar(links);