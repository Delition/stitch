export const getTicketClass = (theme) => {
	switch (theme){
		case 'green':
			return 'ticket_green';
			break;
		case 'violet':
			return 'ticket_violet';
			break;
	}
}