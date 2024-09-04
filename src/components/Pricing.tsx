import {
    EuiButton,
    EuiButtonIcon,
    EuiFieldNumber,
    EuiFieldText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiFormHelpText,
    EuiFormRow,
    EuiHorizontalRule,
    EuiPage,
    EuiPageBody,
    EuiPanel,
    EuiRange,
    EuiSpacer,
    EuiText,
    EuiTitle,
    useGeneratedHtmlId,
} from '@elastic/eui';
import { Fragment, FunctionComponent, useEffect, useRef, useState } from 'react';
import styles from '../styles/PricingMobile.module.css';
import EnquiryModal from './EnquiryModal';
import CustomPricing, { CustomTech } from './CustomPricing';
import { useToastContext } from './toastContext';
import PriceRangeResponsive from './PriceRangeResponsive';
import { useCallusModalOpenedContext } from './callusModalContext';
import useModalOnScroll from './usModalOpenOnFooterReached';



type Technologies = {
    [mainCategory: string]: {
        [subCategory: string]: string[];
    };
};


export const technologies: Technologies = {
    'Development Technologies': {
        "Web": ['HTML5', 'CSS3', 'JavaScript', 'AngularJS'],
        "Mobile": ['Android', 'iOS', 'Xamarin'],
        '.NET': ['C#', 'ASP.NET', 'Entity Framework'],
        "J2EE": ['Java', 'Spring', 'Hibernate'],
        "LAMP": ['Linux', 'Apache', 'MySQL', 'PHP'],
    },
    'Data Management and Analytics': {
        "Database": ['Microsoft SQL Server', 'Oracle', 'SQLite', 'PL/SQL'],
        'Big Data': ['Hadoop', 'MongoDB'],
        "Analytics": ['Power BI', 'SSRS', 'Google Analytics'],
    },
    'Platforms and Systems': {
        "ERP": ['Microsoft Navison', 'SAP'],
        "CRM": ['Microsoft Dynamics CRM'],
        "CMS": ['Dot Net DNN', 'WordPress', 'Alfresco', 'Drupal', 'Joomla'],
        'Cloud Platforms': ['Azure', 'Amazon', 'AWS'],
    },
    'Architecture and Design': {
        "Architecture": ['Enterprise Architect', 'Rational Software Architect', 'No Magic', 'Modelio', 'Archi'],
        "UIDesigning": ['Infragistics', 'Telerik'],
    },
    'Business Solutions': {
        "eCommerce": ['Magento', 'VevoCart', 'Shopify'],
        'Enterprise Social': ['Microsoft Yammer'],
    },
    'Quality Assurance and Project Management': {
        "Testing": ['JMeter', 'JUnit', 'Mercury', 'Selenium', 'Regression Testing'],
        'Project Management': ['MS Project', 'SmartSheet'],
    },
};

export interface CuratedTechnologyData {
    [mainCategory: string]: {
        [subCategory: string]: number;
    };
}


const processSelectedTechnologies = (selectedTechnologies: { [key: string]: number }) => {
    const result: CuratedTechnologyData = {};

    Object.entries(selectedTechnologies).forEach(([tech, quantity]) => {
        if (quantity > 0) {
            Object.entries(technologies).forEach(([mainCategory, subCategories]) => {
                Object.entries(subCategories).forEach(([subCategory, techList]) => {
                    if (techList.includes(tech)) {
                        if (!result[mainCategory]) {
                            result[mainCategory] = {};
                        }
                        if (!result[mainCategory][subCategory]) {
                            result[mainCategory][subCategory] = 0;
                        }
                        result[mainCategory][subCategory] += quantity;
                    }
                });
            });
        }
    });

    return result;
};

let firstLoadForToast = true


const PricingPage: FunctionComponent = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<{ [key: string]: number }>({});
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { isModelOpened, setModalOpened } = useCallusModalOpenedContext()

    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
    const [isClient, setClient] = useState(false)
    const [paddingTop, setPaddingTop] = useState<number>(0);
    const slidingPanelRef = useRef<HTMLDivElement>(null);
    const [customTechs, setCustomTechs] = useState<CustomTech[]>([])
    const { setToasts } = useToastContext()
    const [duration, setDuration] = useState<number | number[]>(6);
    useModalOnScroll(setIsModalOpen)

    const hasSelectedTechnologies = Object.values(selectedTechnologies).some((quantity) => quantity > 0);



    useEffect(() => {
        setClient(true)
    }, [])

    useEffect(() => {
        console.log("is modal opened:", isModelOpened)
    }, [isModelOpened])

    useEffect(() => {
        let showToastTimeout: NodeJS.Timeout | undefined;

        if (hasSelectedTechnologies || customTechs.length > 0) {
            firstLoadForToast = false;
            setToasts([]);
        }

        if (firstLoadForToast) {
            showToastTimeout = setTimeout(() => {
                if (!hasSelectedTechnologies && customTechs.length === 0 && firstLoadForToast) {
                    firstLoadForToast = false;
                    setToasts([{
                        id: 'pricing-toast',
                        title: 'Do you want to know pricing?',
                        text: <EuiButton style={{ backgroundColor: 'orange', color: 'white' }} onClick={() => document.getElementById('window-pricing')?.scrollIntoView({ behavior: 'smooth' })}>Get Pricing</EuiButton>
                    }]);
                }
            }, 10000);
        }

        return () => {
            if (showToastTimeout) {
                clearTimeout(showToastTimeout);
            }
        };

    }, [selectedTechnologies, customTechs, hasSelectedTechnologies, setToasts, isModelOpened, setModalOpened]);


    const techs = [...customTechs]

    const toggleCategory = (category: string) => {
        setOpenCategory((prev) => (prev === category ? null : category));
        setOpenSubCategory(null);
    };

    const toggleSubCategory = (subcategory: string) => {
        setOpenSubCategory((prev) => (prev === subcategory ? null : subcategory));
    };

    const incrementQuantity = (tech: string) => {
        setSelectedTechnologies((prev) => ({
            ...prev,
            [tech]: (prev[tech] || 0) + 1,
        }));
    };

    const decrementQuantity = (tech: string) => {
        setSelectedTechnologies((prev) => ({
            ...prev,
            [tech]: Math.max((prev[tech] || 0) - 1, 0),
        }));
    };

    const removeTechnology = (tech: string) => {
        setSelectedTechnologies((prev) => {
            const newSelectedTechnologies = { ...prev };
            delete newSelectedTechnologies[tech];
            return newSelectedTechnologies;
        });
    };

    const triggerEnquiryModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalOpened(true)
    };

    const onSelect = (customTechs: CustomTech[]) => {
        setCustomTechs(customTechs)
    }

    const removeCustomTech = (index: number) => {
        const newCustomTechs = customTechs.filter((tech, idx) => idx !== index)
        setCustomTechs(newCustomTechs)
    }

    useEffect(() => {
        if (slidingPanelRef.current) {
            setPaddingTop(slidingPanelRef.current.clientHeight);
        }
    }, [hasSelectedTechnologies]);

    const processedData = processSelectedTechnologies(selectedTechnologies)

    const groupedCategories = [
        {
            mainCategories: ['Data Management and Analytics', 'Architecture and Design'],
            subCategories: ['Database', 'Analytics', 'Architecture', 'UIDesigning']
        },
        {
            mainCategories: ['Business Solutions', 'Quality Assurance and Project Management'],
            subCategories: ['eCommerce', 'Enterprise Social', 'Testing', 'Project Management']
        }
    ];

    return (
        <EuiPage style={{ background: 'transparent' }}>
            <EuiPageBody>
                <div className={styles.showBigTitle}>
                    <div className="benefit-left-section" style={{ paddingTop: '50px', marginBottom: '-50px' }}>
                        <h2>Craft your own<span style={{ color: 'orange' }}> pricing</span></h2>
                    </div>
                    <EuiText>
                        <p style={{ textAlign: 'center', fontSize: '20px' }}>
                            Customize your plan with chosen technologies, with pricing calculated
                            <b> monthly</b> to fit your needs.
                        </p>
                    </EuiText>
                </div>
                <EuiSpacer size='l' />

                <div className={styles.pricing_web_view}>
                    {isClient && <EnquiryModal closeModal={triggerEnquiryModal} isOpen={isModalOpen}
                        selectedTechnologies={processedData}
                        customTechs={techs}
                        selectedRawTechData={selectedTechnologies}
                        duration={duration}
                        hasEnquiryWithSkillsets={hasSelectedTechnologies || customTechs.length > 0}
                    />}
                    <div style={{ alignItems: 'center' }}>
                        {Object.entries(technologies).map(([mainCategory, subCategories], index) => (
                            <Fragment key={index}>
                                {!groupedCategories.some(group => group.mainCategories.includes(mainCategory)) && (
                                    <Fragment >
                                        <EuiTitle size="m" ><h2 style={{ color: '#FFA500' }}>{mainCategory}</h2></EuiTitle>
                                        <EuiSpacer size="l" />
                                        <EuiFlexGroup responsive wrap key={mainCategory}>
                                            {Object.entries(subCategories).map(([category, techList]) => (
                                                <EuiFlexGroup responsive key={category} direction="column" gutterSize="m" className={styles.category_group}>
                                                    <EuiFlexItem>
                                                        <EuiTitle size="s" ><h2 style={{ margin: '0 auto', color: '#909090' }}>{category}</h2></EuiTitle>
                                                    </EuiFlexItem>
                                                    <EuiFlexItem>
                                                        <EuiPanel id={styles.pricingPanel} className="nft">
                                                            {techList.map((tech, idx) => (
                                                                <EuiFlexGroup wrap={false} responsive={false} key={idx} alignItems="center" className={styles.tech_item}>
                                                                    <EuiFlexItem>
                                                                        <EuiText color='black' style={{ fontWeight: 'bold', width: '80px' }}>{tech}</EuiText>
                                                                    </EuiFlexItem>
                                                                    <EuiFlexItem>
                                                                        <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                                                                            <EuiButtonIcon aria-label='decrement' iconType={'minus'} size='s' onClick={() => decrementQuantity(tech)} />
                                                                            <EuiText className="quantity-display">{selectedTechnologies[tech] || 0}</EuiText>
                                                                            <EuiButtonIcon aria-label='increment' iconType={'plus'} onClick={() => incrementQuantity(tech)} />
                                                                        </div>
                                                                    </EuiFlexItem>
                                                                </EuiFlexGroup>
                                                            ))}
                                                        </EuiPanel>
                                                    </EuiFlexItem>
                                                    <EuiSpacer size="m" />
                                                </EuiFlexGroup>
                                            ))}
                                        </EuiFlexGroup>
                                    </Fragment>
                                )}
                            </Fragment>
                        ))}
                        {groupedCategories.map((group, groupIndex) => (
                            <Fragment key={groupIndex}>
                                <EuiFlexGroup responsive wrap>
                                    {group.mainCategories.map((mainCategory, mainIndex) => (
                                        <EuiFlexItem key={mainIndex}>
                                            <EuiTitle size="m"><h2 style={{ color: '#FFA500' }}>{mainCategory}</h2></EuiTitle>
                                        </EuiFlexItem>
                                    ))}
                                </EuiFlexGroup>
                                <EuiSpacer size="l" />
                                <EuiFlexGroup responsive wrap>
                                    {group.subCategories.map((category, catIndex) => {
                                        const [mainCategory] = Object.entries(technologies).find(([key, value]) => Object.keys(value).includes(category)) || [];
                                        const techList = mainCategory ? technologies[mainCategory][category] : [];

                                        return (
                                            <EuiFlexGroup responsive key={catIndex} direction="column" gutterSize="m" className={styles.category_group}>
                                                <EuiFlexItem>
                                                    <EuiTitle size="s"><h2 style={{ margin: '0 auto', color: '#909090' }}>{category}</h2></EuiTitle>
                                                </EuiFlexItem>
                                                <EuiFlexItem>
                                                    <EuiPanel id={styles.pricingPanel}>
                                                        {techList.map((tech, idx) => (
                                                            <EuiFlexGroup wrap={false} responsive={false} key={idx} alignItems="center" className={styles.tech_item}>
                                                                <EuiFlexItem>
                                                                    <EuiText color='black' style={{ fontWeight: 'bold', width: '80px' }}>{tech}</EuiText>
                                                                </EuiFlexItem>
                                                                <EuiFlexItem>
                                                                    <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                                                                        <EuiButtonIcon aria-label='decrement' iconType={'minus'} size='s' onClick={() => decrementQuantity(tech)} />
                                                                        <EuiText className="quantity-display">{selectedTechnologies[tech] || 0}</EuiText>
                                                                        <EuiButtonIcon aria-label='increment' iconType={'plus'} onClick={() => incrementQuantity(tech)} />
                                                                    </div>
                                                                </EuiFlexItem>
                                                            </EuiFlexGroup>
                                                        ))}
                                                    </EuiPanel>
                                                </EuiFlexItem>
                                                <EuiSpacer size="m" />
                                            </EuiFlexGroup>
                                        );
                                    })}
                                </EuiFlexGroup>
                            </Fragment>
                        ))}
                    </div>
                </div>


                <div className={styles.pricing_mobile_view}>
                    {isModalOpen &&
                        <EnquiryModal closeModal={triggerEnquiryModal} isOpen={isModalOpen} selectedTechnologies={processedData}
                            selectedRawTechData={selectedTechnologies} customTechs={techs} duration={duration}
                            hasEnquiryWithSkillsets={hasSelectedTechnologies || customTechs.length > 0}
                        />}
                    <div className={styles.pricingContainer}>
                        {Object.entries(technologies).map(([mainCategory, subCategories], idx) => (
                            <div key={idx} className={styles.mainCategory}>
                                <div
                                    className={`${styles.categoryHeader} ${openCategory === mainCategory ? styles.active : ''}`}
                                    onClick={() => toggleCategory(mainCategory)}
                                >
                                    <p style={{ fontWeight: '500' }}>{mainCategory}</p>
                                    <EuiButtonIcon
                                        aria-label={`toggle-${mainCategory}`}
                                        iconType={openCategory === mainCategory ? 'arrowDown' : 'arrowRight'}
                                        className={styles.downIcon}
                                    />
                                </div>
                                {openCategory === mainCategory && (
                                    <div className={styles.subCategory}>
                                        {Object.entries(subCategories).map(([category, techList], idx) => (
                                            <div key={idx} className={styles.subCategoryWrapper}>
                                                <div
                                                    className={`${styles.subCategoryHeader} ${openSubCategory === category ? styles.active : ''
                                                        }`}
                                                    onClick={() => toggleSubCategory(category)}
                                                >
                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#5C3C00' }}>{category}</p>

                                                    <EuiButtonIcon
                                                        aria-label={`toggle-${category}`}
                                                        iconType={openSubCategory === category ? 'arrowDown' : 'arrowRight'}
                                                        className={styles.downIcon}
                                                    />
                                                </div>
                                                {openSubCategory === category && (
                                                    <div className={styles.techList}>
                                                        {techList.map((tech, techIdx) => (
                                                            <div key={techIdx} className={styles.techItem}>
                                                                <EuiText style={{ fontWeight: 'normal', color: '#5C3C00', fontSize: '14px' }}>
                                                                    {tech}
                                                                </EuiText>
                                                                <div className={styles.quantityControls}>
                                                                    <EuiButtonIcon
                                                                        aria-label={`decrement-${tech}`}
                                                                        iconType={'minus'}
                                                                        size="s"
                                                                        onClick={() => decrementQuantity(tech)}
                                                                    />
                                                                    <EuiText className={styles.quantityDisplay}>
                                                                        {selectedTechnologies[tech] || 0}
                                                                    </EuiText>
                                                                    <EuiButtonIcon
                                                                        aria-label={`increment-${tech}`}
                                                                        iconType={'plus'}
                                                                        onClick={() => incrementQuantity(tech)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                <EuiHorizontalRule size='full' />
                <div>
                    <CustomPricing onSelect={onSelect} customTechsOnReset={customTechs} />
                </div>

                <div>
                    <div className={styles.pricing_mobile_view}>
                        <p style={{ color: '#FFA500', fontSize: '20px' }}>Project Duration ?</p>
                        <EuiSpacer size='m' />
                    </div>
                    <div className={styles.pricing_web_view}>
                        <EuiTitle>
                            <h3 style={{ color: '#FFA500' }}>Project Duration ?</h3>
                        </EuiTitle>
                        <EuiSpacer size="m" />
                    </div>
                    <PriceRangeResponsive onDurationChange={(d) => { setDuration(d) }} />
                </div>

                <div style={{ paddingTop: `${paddingTop * 1.25}px` }}>
                    <div ref={slidingPanelRef} className={`${styles.slidingPanel} ${(hasSelectedTechnologies || customTechs.length > 0) ? styles.show : ''}`}>
                        <div className={styles.slidingPanelHeader}>
                            <EuiText><h4>You have selected these items:</h4></EuiText>
                            <EuiButtonIcon aria-label='selectedTechs' iconType="cross" onClick={() => {
                                setSelectedTechnologies({});
                                setCustomTechs([])
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexGrow: 'inherit', flexWrap: 'wrap', maxHeight: '200px', overflow: 'auto' }}>
                            {Object.entries(selectedTechnologies).map(
                                ([tech, quantity], idx) => quantity > 0 && (
                                    <div key={idx} className={styles.selectedItem}>
                                        <p style={{ padding: '10px' }}>{tech}: {quantity}</p>
                                        <EuiButtonIcon aria-label='removeTech' iconType="cross" onClick={() => removeTechnology(tech)} />
                                    </div>
                                )
                            )}
                            {customTechs.length !== 0 &&
                                <Fragment>
                                    {customTechs.map((tech, idx) => (
                                        <div key={idx} className={styles.selectedItem}>
                                            {(!isNaN(parseInt(tech.quantity)) || tech.quantity != '') &&
                                                <>
                                                    <p style={{ padding: '10px' }}>{tech.tech}:{tech.quantity}</p>
                                                    <EuiButtonIcon aria-label='removeTech' iconType="cross" onClick={() => removeCustomTech(idx)} />
                                                </>
                                            }
                                        </div>
                                    ))}
                                </Fragment>
                            }
                        </div>
                        <EuiButton aria-label='getPricing' color="warning" onClick={triggerEnquiryModal} >Get Pricing</EuiButton>
                    </div>
                </div>

            </EuiPageBody>
        </EuiPage>

    );
};

export default PricingPage;






