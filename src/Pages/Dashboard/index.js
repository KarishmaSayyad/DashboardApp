import { Card, Space, Statistic, Table, Typography } from "antd";
import { ShoppingCartOutlined, UserOutlined, DollarCircleOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react";
import { getOrders } from "../../API";
const Dashboard = () => {
    return (
        <Space size={12} direction="vertical">
            <Typography.Title level={4} >Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashBoardCard icon={<ShoppingCartOutlined
                    style={
                        {
                            color: "green",
                            backgroundColor: "rgba(0,255,0,0.5)",
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }}
                />}
                    title={'Order'}
                    values={1234}
                />
                <DashBoardCard icon={<ShoppingOutlined
                    style={
                        {
                            color: "blue",
                            backgroundColor: "rgb(0,255,255,0.25)",
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }}
                />}
                    title={'Inventory'}
                    values={5647}
                />
                <DashBoardCard
                    icon={<UserOutlined
                        style={
                            {
                                color: "purple",
                                backgroundColor: "rgba(0,0,255,0.5)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8
                            }}
                    />}
                    title={'Customer'}
                    values={1234} />

                <DashBoardCard
                    icon={<DollarCircleOutlined
                        style={
                            {
                                color: "red",
                                backgroundColor: "rgba(255,0,0,0.5)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8
                            }}
                    />}
                    title={'Review'}
                    values={1234} />
            </Space>
            <Space>
                <RecentOrders />
            </Space>
        </Space>

    );
}
const DashBoardCard = ({ title, values, icon }) => {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={values} />
            </Space>
        </Card>
    )
}

function RecentOrders() {
    
    const [dataSource,setDataSource]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        getOrders().then(res=>{
            setDataSource(res.products.splice(0,3));
            console.log(res.products)
            setLoading(false);
        });
    },[]);

    return<>
    <Typography.Text>Recent Order</Typography.Text>
     <Table
        columns={[
            {
                title: 'Title',
                dataIndex: "title"
            },
            {
                title: 'Quntity',
                dataIndex: "quntity"
            },
            {
                title: 'Price',
                dataIndex: "discountedPrice"
            }
        ]}
        dataSource={dataSource}
        loading={loading}
        pagination={false}
        >

    </Table>
    </>
}
export default Dashboard;