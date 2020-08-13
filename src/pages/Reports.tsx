import React from 'react'
import { Layout, Breadcrumb, Descriptions, Badge } from 'antd';

const { Content } = Layout;

function Reports() {

    return (

        <section className="page">

            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '4rem 2rem' }}>
                    <Breadcrumb.Item><h3>Reports</h3></Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Descriptions title="" bordered>

                        <Descriptions.Item label="Account type">Cheque</Descriptions.Item>
                        <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                        <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                        <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                        <Descriptions.Item label="Usage Time" span={2}>
                            2019-04-24 18:00:00
                        </Descriptions.Item>
                        <Descriptions.Item label="Status" span={3}>
                            <Badge status="processing" text="Running" />
                        </Descriptions.Item>
                        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>

                    </Descriptions>
                </Content>
            </Layout>

        </section>

    )
}

export default Reports;