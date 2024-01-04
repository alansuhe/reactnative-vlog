// https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn

export const getMovies = async () => {
    return fetch('https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        return(json)})
    .catch(e => console.warn(e))
}