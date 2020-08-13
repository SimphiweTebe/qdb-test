import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext, IUser } from '../context/context';

import { Layout, Menu } from 'antd';
import {
    BarChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function Sidebar(): JSX.Element {

    const { user } = useContext<IUser | any>(AppContext);

    return (

        <Sider theme="light">
            <div className="profile">
                <img className="profile__photo" src='https://i.pravatar.cc/150?img=12' alt="User Profile" />
                <h4 className="profile__greeting">Hello</h4>
                <h4 className="profile__username">{user && user.name}</h4>
            </div>
            <Menu defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<TeamOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<BarChartOutlined />}>
                    <Link to="/reports">Reports</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;