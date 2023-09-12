import {
    Header,
    Hero,
    HeroNew,
    SmallCards,
    Cards,
    Clients,
    General,
    Code,
    ImageBlock,
    CTABlock,
    NewCTABlock,
    Footer,
    RowList,
    BlogHero,
    BlogList,
    HeroWide,
    PriceBlock,
    CareersHero,
    AccordionPage,
    ScrollCards,
    ImageColumn,
    Description,
    TeamAlbum,
    CoverageTable,
    ImageGrid,
    ImageRowBlock,
    PageMenu,
    HubspotBlock,
    CaseStudies,
    FaqBlock,
    TextBlock
} from '../../blocks';

const getBlockComponent = ({ __component, ...rest }, index) => {
    let Block;

    switch (__component) {
        case 'blocks.header':
            Block = Header;
            break;
        case 'blocks.hero':
            Block = Hero;
            break;
        case 'blocks.hero-new':
            Block = HeroNew;
            break;
        case 'blocks.small-cards':
            Block = SmallCards;
            break;
        case 'blocks.row-list':
            Block = RowList;
            break;
        case 'blocks.cards':
            Block = Cards;
            break;
        case 'blocks.clients':
            Block = Clients;
            break;
        case 'blocks.general':
            Block = General;
            break;
        case 'blocks.code':
            Block = Code;
            break;
        case 'blocks.image-block':
            Block = ImageBlock;
            break;
        case 'blocks.cta':
            Block = CTABlock;
            break;
        case 'blocks.new-cta':
            Block = NewCTABlock;
            break;
        case 'blocks.footer':
            Block = Footer;
            break;
        case 'blocks.blog-hero':
            Block = BlogHero;
            break;
        case 'blocks.featured-blog':
            Block = BlogList;
            break;
        case 'blocks.hero-wide':
            Block = HeroWide;
            break;
        case 'blocks.price-block':
            Block = PriceBlock;
            break;
        case 'blocks.careers-hero':
            Block = CareersHero;
            break;
        case 'blocks.page-accordion':
            Block = AccordionPage;
            break;
        case 'blocks.scroll-slider':
            Block = ScrollCards;
            break;
        case 'blocks.image-column':
            Block = ImageColumn;
            break;
        case 'blocks.text-block':
            Block = Description;
            break;
        case 'blocks.team-block':
            Block = TeamAlbum;
            break;
        case 'blocks.coverage-table':
            Block = CoverageTable;
            break;
        case 'blocks.image-grid':
            Block = ImageGrid;
            break;
        case 'blocks.image-row-block':
            Block = ImageRowBlock;
            break;
        case 'blocks.page-menu':
            Block = PageMenu;
            break;
        case 'blocks.hubspot-block':
            Block = HubspotBlock;
            break;
        case 'blocks.case-studies':
            Block = CaseStudies;
            break;
        case 'blocks.faq-block':
            Block = FaqBlock;
            break;
        case 'blocks.text':
            Block = TextBlock;
            break;
    }

    return Block ? <Block key={ `index-${ index }` } { ...rest }/> : null;
};

const BlockManager = ({ blocks }) => {

    return <div className="block-manager">
        { blocks.map(getBlockComponent) }
    </div>;
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;