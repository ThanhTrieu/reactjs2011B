import { useState } from 'react';
import InputSearch from './components/input';
import ListMovies from './components/list-movie';
import { Pagination, Row, Col } from 'antd';
import { searchMovies } from './services/api';

const AppMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");

  const searchMovieByKey = async (nameMovie, page = 1) => {
    if(nameMovie !== ''){
      await setKeyword(nameMovie);
      // call api tim kiem phim 
      await setLoading(true);
      const dataMovie = await searchMovies(nameMovie, page);
      await setMovies(dataMovie);
      await setLoading(false);
    }
  }

  //console.log(movies);

  return(
    <>
      <InputSearch
        search={searchMovieByKey}
        loading={loading}
      />
      <ListMovies
        listMovies={movies}
        loading={loading}
      />
      <Row>
        <Col span={20} offset={2}>
          <div style={{ textAlign: 'center', marginTop: '30px'}}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </Col>
      </Row>
    </>
  )
}
export default AppMovie;