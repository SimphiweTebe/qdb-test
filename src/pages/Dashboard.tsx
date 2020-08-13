import React, { useContext } from 'react'
import { AppContext } from '../context/context';
import { Layout, Breadcrumb, Card, Col, Row } from 'antd';

const { Content } = Layout;

interface AppState { }

const Dashboard = (): JSX.Element => {

    const { user, loading } = useContext(AppContext);

    const { name, email, website, company, address } = user;

    //DATA PERSIST


    return (

        <section className="page">
            {
                loading ? <h1>loading...</h1> :

                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '4rem 2rem' }}>
                            <Breadcrumb.Item><h3>Dashboard</h3></Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >

                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card title="Profile" bordered={false}>
                                            <ul>
                                                <li>User: {name}</li>
                                                <li>Email: {email}</li>
                                                <li>Website: {website}</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Company Details" bordered={false}>
                                            <ul>
                                                <li>Name: {company.name}</li>
                                                <li>Tagline: {company.catchPhrase}</li>
                                                <li>Slogan: {company.bs}</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Address" bordered={false}>
                                            <ul>
                                                <li>Street: {address.suite},  {address.street}</li>
                                                <li>City: {address.city}</li>
                                                <li>Zip: {address.zipcode}</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                    </Layout>


            }
        </section>

    )
}

export default Dashboard;