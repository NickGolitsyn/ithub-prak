import Header from "../components/Header";
import NewsComp from "../components/NewsComp";

export default function News() {
    return (
        <div>
            <Header />
            <h1 className="title">Новости</h1>
            <NewsComp />
        </div>
    );
  }