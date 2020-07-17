import Layout from '../../components/layout';
import NewsList from '../../components/NewsList';
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());
export default function Business() {
  const { data, error } = useSWR(
    "/api/news/sports",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <NewsList data={data.articles} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
