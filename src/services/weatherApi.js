export async function getWeather(lat, lon) 
{
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);

    if(!response.ok)
    {
        throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
}