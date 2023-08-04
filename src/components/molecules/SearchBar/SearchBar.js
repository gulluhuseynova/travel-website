import React from 'react'
import { Card, Col, Row } from 'antd'
const SearchBar = () => {
    return (
        <Row gutter={16} style={{margin:0}}>
            <Col span={8}>
                <Card bordered={true}>Card content</Card>
            </Col>
        </Row>
    )
}

export default SearchBar
