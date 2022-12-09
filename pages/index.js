import { getFeaturedBooks } from "../api-helpers/frontend/utils";
import BookList from "../components/BookList";

const Home = ({books}) => {
  return (
    <BookList featuredPage data={books} />
  )
}

export default Home;

export const getStaticProps = async () => {
  const books = await getFeaturedBooks();

  return{
    props:{
      books,
    },
  };
};