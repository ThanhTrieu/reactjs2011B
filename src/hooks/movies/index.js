import { useState } from 'react';
import InputSearch from './components/input';
import ListMovies from './components/list-movie';
import { Pagination, Row, Col } from 'antd';

const AppMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  
  return(
    <>
      <InputSearch />
      <ListMovies />
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