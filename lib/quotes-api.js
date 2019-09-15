import fetch from 'isomorphic-fetch'

export const getQuote = async (req, path) => {
    const rest = await fetch ('https://api.kanye.rest')
    const data = await rest.json ();
    return { quote: data.quote };

}