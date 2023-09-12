import styles from './footer.module.scss';

export const FooterMenu = ({menu, address, email}) => {
	return (<>
		{menu.map(item => {
			return (
				<div key={item.id} className={styles.menu_wrapper}>
					<span className={styles.menu_item_title}>{item.Title}</span>
					<ul className={styles.menu_item_list}>
						{item.menu_item.map((menuItem, index) => {
							return (
								<li key={index}>
									<a className={styles.menu_item_link} href={menuItem.href}>
										{menuItem.label}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			)
		})}
	</>)
}