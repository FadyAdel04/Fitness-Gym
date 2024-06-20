export const exerciseOptions = {
    method: 'GET',
    hostname: 'exercisedb.p.rapidapi.com',
    port: null,
    path: '/exercises/bodyPart/back?limit=10&offset=0',
    headers: {
        'x-rapidapi-key': '8887399421msh0d6d70328fb0fa5p1da174jsn2a02cf1627bc',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    hostname: 'youtube-search-and-download.p.rapidapi.com',
    port: null,
    path: '/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw',
    headers: {
        'x-rapidapi-key': '8887399421msh0d6d70328fb0fa5p1da174jsn2a02cf1627bc',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};