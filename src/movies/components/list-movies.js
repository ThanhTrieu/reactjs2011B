import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { Row, Col, Card, Skeleton } from 'antd';
import { helpers } from '../helpers/common';

const { Meta } = Card;

const ListMovies = (props) => {
  if(props.loading || helpers.isEmptyObject(props.movies)){
    return (<Skeleton active />)
  }
  return (
    <Row style={{ margin: "30px 0px"}}>
      {props.movies.map((item, index) => (
        <Col span={6} key={index}>
          <Link to={`/movie-detail/${slugify(item.title)}~${item.id}`}>
            <Card
              hoverable
              style={{ width: 240, marginTop: '20px' }}
              cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
            >
              <Meta title={item.title} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
ListMovies.propTypes = {
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired
}
export default React.memo(ListMovies);