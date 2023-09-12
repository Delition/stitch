import LinkPayIcon from '../../../asset/image/svg/linkPay_icon.svg';
import InstantPayIcon from '../../../asset/image/svg/instanPay_icon.svg';
import PayoutsIcon from '../../../asset/image/svg/payouts_icon.svg';
import FinancialDataIcon from '../../../asset/image/svg/financialData_icon.svg';

export const columns = [
    {
        title: 'Bank',
        dataIndex: 'bank',
        key: 'bank',
    },
    {
        title: <><LinkPayIcon/>LinkPay</>,
        dataIndex: 'linkPay',
        key: 'linkPay',
        align: 'center',
    },
    {
        title: <><InstantPayIcon/>InstantPay</>,
        dataIndex: 'instantPay',
        key: 'instantPay',
        align: 'center',
    },
    {
        title: <><PayoutsIcon/>Payouts</>,
        dataIndex: 'payouts',
        key: 'payouts',
        align: 'center',
    },
    {
        title: <><FinancialDataIcon/>Financial Data</>,
        dataIndex: 'financialData',
        key: 'financialData',
        align: 'center',
    },
    {
        title: 'Accounts Supported',
        dataIndex: 'accountsSuport',
        key: 'accountsSuport',
    },
    ]