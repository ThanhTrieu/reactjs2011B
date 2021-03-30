import { Pagination, Row, Col } from 'antd';

const PaginationMovies = () => {
  return(
    <>
      <Row>
          <Col span={20} offset={2}>
            <div style={{ textAlign: 'center', margin: '30px 0px'}}>
              <Pagination
                pageSize={20}
                current={1}
                total={50}
                showSizeChanger={false}
              />
            </div>
          </Col>
        </Row>
    </>
  )
}
export default PaginationMovies;