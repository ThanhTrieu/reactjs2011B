import { Input, Row, Col } from 'antd';

const { Search } = Input;

const InputSearchMovie = () => {
  return (
    <>
      <Row style={{ marginTop: '5px'}}>
        <Col span={12} offset={6}>
          <Search
            placeholder=" name's movie... " enterButton="Search"
            size="large"
            loading
            onSearch={val => console.log(val)}
          />
        </Col>
      </Row>
    </>
  )
}
export default InputSearchMovie;