import React, { useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
const { RangePicker } = DatePicker;

const UpcomingMoviePage = () => {
  const [page, setPage] = useState(1);
  const [tdate , setToDate] = useState('');
  const [fdate, setFromDate] = useState('');
  const [comingMovies, setComingMovies] = useState({});

  const getChooseDate = async (t1, t2) => {
    let fromdate = t2[0];
    let todate = t2[1];
    let movies = await api.getDataUpcomingMovie(fromdate, todate, page);
    if(movies.hasOwnProperty('results')){
      setComingMovies(movies.results);
    }
  }
  console.log(comingMovies);
  return(
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <RangePicker
            onChange={(d1,d2) => getChooseDate(d1,d2)}
          />
        </Col>
      </Row>
    </MasterLayoutMovie>
  )
}
export default React.memo(UpcomingMoviePage);