import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
// Styles
import './Home.css';

function Home() {
    const {
        data: articles,
        isPending,
        error,
    } = useFetch('http://localhost:3000/articles'); // DB for dev

    return (
        <div className="home">
            <h1>Articles</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {articles &&
                articles.map((article) => (
                    <div key={article.id} className="card">
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>

                        <Link to={`/articles/${article.id}`}>Read More</Link>
                    </div>
                ))}
        </div>
    );
}

export default Home;
