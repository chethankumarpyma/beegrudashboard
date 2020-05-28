import React from 'react';
import { Menu } from 'antd';
import {
	DashboardOutlined,
	ProfileOutlined,
	SettingOutlined,
	SnippetsOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

function SideMenu(props) {
	function handleClick(content) {
		props.clicked(content);
	}

	return (
		<Menu defaultSelectedKeys={['Dashboard']} theme="dark" mode="inline">
			<Menu.Item onClick={() => handleClick('Dashboard')} key="Dashboard" icon={<DashboardOutlined />}>
				Dashboard
			</Menu.Item>

			<SubMenu key="Profile" icon={<ProfileOutlined />} title="Profile">
				<Menu.Item onClick={() => handleClick('Settings')} key="Settings" icon={<SettingOutlined />}>
					Settings
				</Menu.Item>
			</SubMenu>

			<Menu.Item onClick={() => handleClick('SaveProperty')} key="SaveProperty " icon={<DashboardOutlined />}>
				Save Properties
			</Menu.Item>

			<Menu.Item
				onClick={() => handleClick('SuggestedProperty')}
				key="SuggestedProperty"
				icon={<DashboardOutlined />}
			>
				Suggested Properties
			</Menu.Item>

			<Menu.Item onClick={() => handleClick('ViewHistory')} key="ViewHistory" icon={<DashboardOutlined />}>
				View History
			</Menu.Item>

			<Menu.Item onClick={() => handleClick('SearchHistory')} key="SearchHistory" 
			icon={<DashboardOutlined />}>
				Search History
			</Menu.Item>
		</Menu>
	);
}

export default SideMenu;
