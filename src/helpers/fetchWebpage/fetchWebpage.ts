import fetch from 'node-fetch';

// Purpose: Helper function to fetch a webpage and return the HTML as a string.
export const fetchWebpage = async (url: string): Promise<string> => {
    const response = await fetch(url);
    return await response.text();
}
