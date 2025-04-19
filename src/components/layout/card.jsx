import {Card, Col, Row} from 'antd';

const cardStyle ={
    padding: '10px',
    cursor: 'pointer'
}


const CardApp = () => (
    <Row gutter={16} style={cardStyle}>
        <Col span={8}>
            <Card title="Card title" variant="borderless">
                <img src="src/assets/coin.svg" alt=""/>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" variant="borderless">
                <img src="src/assets/coin.svg" alt=""/>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" variant="borderless">
                <img src="src/assets/coin.svg" alt=""/>
            </Card>
        </Col>
    </Row>
);
export default CardApp;
