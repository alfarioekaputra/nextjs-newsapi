export default async (req, res) => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=${process.env.API_KEY}`)
    const json = await data.json()
    
    res.json(json)
  }