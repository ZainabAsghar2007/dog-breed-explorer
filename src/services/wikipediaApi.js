export async function getWikipediaSummary(countryName) 
{
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`);

    if(!response.ok)
    {
        throw new Error('Failed to fetch wikipedia summary');
    }

    const data = await response.json();
    return data;
}