import LinkPayIcon from '../../../asset/image/svg/linkPay_icon.svg';
import InstantPayIcon from '../../../asset/image/svg/instanPay_icon.svg';
import PayoutsIcon from '../../../asset/image/svg/payouts_icon.svg';
import FinancialDataIcon from '../../../asset/image/svg/financialData_icon.svg';

export const getLinksIcon = (linkName) => {
    switch (linkName) {
        case 'LinkPay':
            return <LinkPayIcon/>;
        case 'InstantPay':
            return <InstantPayIcon/>;
        case 'Payouts':
            return <PayoutsIcon/>;
        case 'Financial Data':
            return <FinancialDataIcon/>;
    }
}