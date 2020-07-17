export default function NewsList(props) {
    const datas = props.data;
    return (
        datas.map((article, index) => (
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
        ))
    )
}