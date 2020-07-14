import Layout from '../../components/layout'
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());
export default function Business() {
  const { data, error } = useSWR(
    "/api/news/business",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.articles.map((article, index) => (
              <div key={index} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={article.urlToImage} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title">{article.title}</p>

                    <div className="content">
                      {article.description}.
                      <a href={article.url} target="_blank">Lanjut Baca yuk</a>
                      
                      <br />
                      <time dateTime={article.publishedAt}>{article.publishedAt}</time>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
