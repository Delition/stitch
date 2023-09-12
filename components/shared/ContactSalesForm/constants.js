export const FormFields = {
    FIRST_NAME: 'First name',
    LAST_NAME: 'Last name',
    WORK_EMAIL: 'Work email',
    WATS_UP: 'WhatsApp no. (including country code)',
    COMPANY_NAME: 'Company name',
    COUNTRY: 'Country of operation',
    BUISNES: 'Business segment',
    LOKING_FOR: 'What are you looking to build with Stitch?',
    WANT_TO_KNOW: 'Anything else you want us to know?',
};

export const initialFormState = {
    [FormFields.FIRST_NAME]: {
        error: null,
        value: null,
    },
    [FormFields.LAST_NAME]: {
        error: null,
        value: null,
    },
    [FormFields.WORK_EMAIL]: {
        error: null,
        value: null,
    },
    [FormFields.WATS_UP]: {
        error: null,
        value: null,
    },
    [FormFields.COMPANY_NAME]: {
        error: null,
        value: null,
    },
    [FormFields.COUNTRY]: {
        error: null,
        value: null,
    },
    [FormFields.BUISNES]: {
        error: null,
        value: null,
    },
    [FormFields.LOKING_FOR]: {
        error: null,
        value: null,
    },
    [FormFields.WANT_TO_KNOW]: {
        error: null,
        value: null,
    },
};

export const ITEMS_LABELS = {
    FIRST_NAME: <>
        First Name
        <span>*</span>
    </>,
    LAST_NAME: <>
        Last Name
        <span>*</span>
    </>,
    WORK_EMAIL: <>
        Work email
        <span>*</span>
    </>,
    WATS_UP: <>
        WhatsApp no. (incl. country code)
    </>,
    COMPANY_NAME: <>
        Company name
        <span>*</span>
    </>,
    COUNTRY: <>
        Country of operation
        <span>*</span>
    </>,
    BUISNES: <>
        Business segment
        <span>*</span>
    </>,
    LOKING_FOR: <>
        What are you looking to build with Stitch?
        <span>*</span>
    </>,
    WANT_TO_KNOW: <>
        Anything else you want us to know?
    </>,
    CHECKBOX_TEXT: <p>Please add me to the Stitch mailing list</p>,
    TERMS_TEXT: 'By clicking submit, you’re agreeing to our',
    TERMS_LINK: <a>
        Terms of Service
    </a>,
};

export const countryOptions = [
    {
        value: 'Nigeria',
        key: 'Nigeria',
    },
    {
        value: 'South Africa',
        key: 'South Africa',
    }
]

export const buisnesOptions = [
    {
        value: 'Fintech or fintech-enabled',
        key: 'Fintech or fintech-enabled',
    },
    {
        value: 'Payments aggregator or payments service provider (PSP)',
        key: 'Payments aggregator or payments service provider (PSP)',
    },
    {
        value: 'E-commerce business (retail or digital services)',
        key: 'E-commerce business (retail or digital services)',
    },
    {
        value: 'Marketplace or platform',
        key: 'Marketplace or platform',
    },
    {
        value: 'Other',
        key: 'Other',
    }
]

export const emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
export const namePatern = /^[a-zA-Z][a-zA-Z_\.]{1,20}$/

export const zapierWebHook = 'https://hooks.zapier.com/hooks/catch/11747778/bfmeew1/'