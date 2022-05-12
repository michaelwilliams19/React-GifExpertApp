import React from 'react'


export const getGifs = async(category) => {
    const apiKey = 'pRwptk8y8yX5WOxjkrwrJQ3O4zruWbQT';
    const limit = 5;

    const url = `https://api.giphy.com/v1/gifs/search?&q=${encodeURI(category)}&limit=${limit}&apiKey=${apiKey}`;
    const respuesta = await fetch(url);
    
    const { data } = await respuesta.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}