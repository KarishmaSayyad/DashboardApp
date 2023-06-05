import { Card, Space, Statistic, Typography } from "antd";
import { ShoppingCartOutlined, UserOutlined, DollarCircleOutlined, ShoppingOutlined } from '@ant-design/icons'
const Dashboard = () => {
    return (
        <div>
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
                            color: "purple",
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
                                color: "blue",
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
        </div>

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

export default Dashboard;