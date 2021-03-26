import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const ListMovies = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Row style={{ marginTop: '30px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default ListMovies;