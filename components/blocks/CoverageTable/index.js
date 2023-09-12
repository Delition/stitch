import styles from './coverageTable.module.scss';
import { Table } from 'antd';
import { columns } from './constants';
import ImageComponent from 'next/image';
import CheckCircleIcon from '../../../asset/image/svg/checkCircle_icon.svg';
import WrongCircleIcon from '../../../asset/image/svg/wrongCircle_icon.svg';

const getIcon = (isIt) => {
    if(isIt) {
        return <CheckCircleIcon/>
    }
    return <WrongCircleIcon/>
}


const CoverageTable = ({ CoverageItem, BlockId }) => {

    const data = CoverageItem.map(item => {
        return {
            key: item.id,
            bank: <><ImageComponent
                src={item.Logo.data.attributes.url}
                alt={item.Logo.data.attributes.name}
                width={40}
                height={40}
            />{ item.CompanyTitle }</>,
            linkPay: getIcon(item.LinkPay),
            instantPay: getIcon(item.InstantPay),
            payouts: getIcon(item.Payouts),
            financialData: getIcon(item.FinancialData),
            accountsSuport: <span>{ item.AccountsSupported }</span>
        }
    })

    return <div className={ styles.wrapper } id={BlockId}>
        <div className={ `${styles.table_wrapper} coverage_table` }>
            <Table columns={ columns } dataSource={ data }/>
        </div>
    </div>;
};

export default CoverageTable;