import {useCallback, useEffect, useState} from 'react';
import {Dropdown, Menu, Space} from 'antd';
import DownOutlined from '../../../asset/image/svg/down_out_lined.svg';
import UpOutlined from '../../../asset/image/svg/up_out_lined.svg';
import {MenuItem} from './MenuItem';
import styles from './header.module.scss';

export const DropdownItem = ({item}) => {
	const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
	const [icon, setIcon] = useState(<DownOutlined/>);
	
	const getMenu = useCallback((secondLevel, arr) => {
		return secondLevel && (
			<Menu items={arr.map(item => ({
				key: item.id,
				label: <MenuItem item={item}/>,
				children: item.menu_item_level.length > 0
					? item.menu_item_level.map(item => ({
						key: item.id,
						label: <MenuItem item={item}/>
					}))
					: ''
			}))}/>
		);
	}, []);
	
	const handleVisibleChange = useCallback((isVisible) => {
		setIsVisibleDropdown(isVisible)
	}, []);
	
	useEffect(() => {
		setIcon(isVisibleDropdown ? <UpOutlined/> : <DownOutlined/>)
	}, [isVisibleDropdown]);
	
	return (
		<Dropdown overlay={getMenu(item.second_level, item.menu_item)}
		          className={styles.dropdown}
		          onVisibleChange={(e) => setIsVisibleDropdown(e)}>
			<a onClick={e => e.preventDefault()}>
				<Space className={styles.dropdown_item}>
					{item.Title}
					{item.second_level && icon}
				</Space>
			</a>
		</Dropdown>
	);
};