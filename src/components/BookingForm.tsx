import { clientApiService, ClientRequestData } from '@/api/userApi';
import { EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiIcon, EuiPanel, EuiSkeletonCircle, EuiSkeletonLoading, EuiSkeletonRectangle, EuiSkeletonText, EuiSkeletonTitle, EuiSpacer, EuiText } from '@elastic/eui';
import Image from 'next/image';
import { Fragment, FunctionComponent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../styles/BookingForm.module.css';
import { CustomTech } from './CustomPricing';
import { CuratedTechnologyData, technologies } from './Pricing';
import SuccessModal from './SuccessModal';
import emailJs from '@emailjs/browser';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'


export interface PredefinedTechReqData {
  mainCategory: string;
  subcategories: {
    subcategory: string;
    items: any;
  }[];
}

//this interface for writing on to the mail
export interface CustomTechMailReqData {
  item: any;
}

//this interface for sending custom techniques to the db
interface CustomTechApiReqData {
  techName: string;
  quantity: number
}

export interface TechnologyReqData {
  predefinedTechData: { [key: string]: number },
  customTechsData: CustomTechApiReqData[]
}

const flattenTechnologyData = (curatedData: any, selectedData: any): PredefinedTechReqData[] => {
  const result = [];

  for (const mainCategory in curatedData) {
    const subcategories = [];

    for (const subCategory in curatedData[mainCategory]) {
      const items = curatedData[mainCategory][subCategory].filter((item: any) => selectedData[item] !== undefined);

      if (items.length > 0) {
        subcategories.push({
          subcategory: subCategory,
          items: items.map((item: any) => `${item} (${selectedData[item]})`).join(', '),
        });
      }
    }

    if (subcategories.length > 0) {
      result.push({
        mainCategory,
        subcategories,
      });
    }
  }
  return result;
};
export interface EnquiryForm {
  industry: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  requirements: string;
  nda: boolean;
}

export interface BookingFormProps {
  selectedTechnologies?: CuratedTechnologyData;
  selectedRawTechData: { [key: string]: number }
  customTechs?: CustomTech[]
}

const BookingForm: FunctionComponent<BookingFormProps> = ({
  selectedTechnologies,
  selectedRawTechData,
  customTechs
}) => {
  const { register, handleSubmit, formState: { errors }, watch, setValue,setError,clearErrors } = useForm<EnquiryForm>();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [isSuccess, setSuccess] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleCategory = (mainCategory: string) => {
    if (expandedCategories.includes(mainCategory)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== mainCategory));
    } else {
      setExpandedCategories([...expandedCategories, mainCategory]);
    }
  };

  const onSubmit: SubmitHandler<EnquiryForm> = async (data: EnquiryForm) => {
    const publicKey = "28Jy3xAgZVdVfJM4A";
    const serviceId = "service_w3n2h6s";
    const templateIdWithGreet = "template_l6jxhcz";
    const templateIdWithTechnologies = "template_fzbseij";

    const formDataEmail = {
      industry: data.industry,
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      requirements: data.requirements,
      nda: data.nda ? 'Yes' : 'No',
    };

    const enquiryData: ClientRequestData = {
      industry: data.industry,
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      requirements: data.requirements,
      nda: data.nda
    };

    try {
      let emailSent = false;

      if (selectedRawTechData || (customTechs && customTechs.length > 0)) {
        const technologyArray: PredefinedTechReqData[] = flattenTechnologyData(technologies, selectedRawTechData);
        let customTechsData: CustomTechMailReqData[] = [];
        const customTechApiReqData: CustomTechApiReqData[] = customTechs?.map(item => ({
          techName: item.tech,
          quantity: parseInt(item.quantity)
        })) || [];

        const enquiryDataWithTech: ClientRequestData = {
          ...enquiryData,
          skillsets: {
            predefinedTechData: selectedRawTechData,
            customTechsData: customTechApiReqData
          }
        };

        if (!!customTechs) {
          customTechsData = customTechs.map(item => ({
            item: `${item.tech} (${item.quantity})`
          }));
        }

        const templateParams = {
          ...formDataEmail,
          technologies: technologyArray,
          customTechnologies: customTechsData
        };

        setIsLoading(true);

        try {
          await emailJs.send(serviceId, templateIdWithTechnologies, templateParams, publicKey);
          emailSent = true;
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          setIsLoading(false);
          setIsFailed(true);
          return;
        }

        if (emailSent) {
          try {
            await clientApiService.createClient(enquiryDataWithTech);
            setSuccess(true);
          } catch (apiError) {
            console.error("Error creating client:", apiError);
          }
        }
      } else {
        setIsLoading(true);

        try {
          await emailJs.send(serviceId, templateIdWithGreet, formDataEmail, publicKey);
          emailSent = true;
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          setIsLoading(false);
          setIsFailed(true);
          return;
        }

        if (emailSent) {
          try {
            await clientApiService.createClient(enquiryData);
            setSuccess(true);
          } catch (apiError) {
            console.error("Error creating client:", apiError);
          }
        }
      }

      setIsLoading(false);
    } catch (e: any) {
      console.log("Unexpected error: ", e);
      setIsLoading(false);
      setIsFailed(true);
    }
  };


  const closeModal = () => {
    setSuccess(false);
    setIsFailed(false)
  };


  const brandLogos = [
    { brandUrl: "/al_rajhi_bank.png", alt: "al_rajhi" },
    { brandUrl: "/alinma.png", alt: "alinma" },
    { brandUrl: "/bank_albilad.png", alt: "bank_albilad" },
  ]

  const phone = watch('phone')
  const email = watch('email')

  return (

    <EuiSkeletonLoading
      isLoading={isLoading}
      contentAriaLabel="Demo loading section"
      loadingContent={
        <EuiPanel>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiSkeletonCircle size="s" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonTitle size="l" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiSkeletonText lines={5} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonRectangle width="100%" height={148} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiSkeletonCircle size="s" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonTitle size="l" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiSkeletonText lines={5} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonRectangle width="100%" height={148} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiSkeletonCircle size="s" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonTitle size="l" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiSkeletonText lines={5} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonRectangle width="100%" height={148} />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      }
      loadedContent={
        <div className={styles.container}>
          <div className={styles.formSection}>
            <h2 style={{ fontSize: '35px', fontWeight: 'bold' }}>
              <span style={{ color: 'orange' }}>Book</span> a Call
            </h2>
            <p style={{ fontWeight: 'bold' }}>
              Coffee Break with DataSack? Schedule a Call About Your Tech Needs!
            </p>

            {isSuccess && <SuccessModal isSuccess={true} onClose={closeModal} />}
            {isFailed && <SuccessModal isSuccess={false} onClose={closeModal} />}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="industry">Select your industry</label>
                <select id="industry" {...register('industry', { required: 'Industry is required' })}>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
                {errors.industry && <label className={styles.error}  style={{fontSize:'15px'}}>{errors.industry.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <label className={styles.error}  style={{fontSize:'15px'}}>{errors.name.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Corporate E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email?.toLowerCase()}
                  {...register('email', { required: 'Email is required', pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid email address' } })}
                />
                {errors.email && <label className={styles.error}  style={{fontSize:'15px'}}>{errors.email.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <PhoneInput
                  country={'sa'}
                  value={phone}
                  onChange={(phone,data:CountryData) => {
                    const countryCodeLength = data.dialCode.length
                    if (phone=='' || phone.length==countryCodeLength){
                      setError('phone',{
                        message:'Phone Number required'
                      })
                    }else{
                      clearErrors('phone')
                    }
                    setValue('phone', phone)
                  }}
                  inputStyle={{
                    width:'100%'
                  }}
                />
                {errors.phone && <label className={styles.error} style={{fontSize:'15px'}}>{errors.phone.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Schedule Date & time</label>
                <input
                  type="datetime-local"
                  id="date"
                  {...register('date', { required: 'Date and time are required' })}
                />
                {errors.date && <label className={styles.error}  style={{fontSize:'15px'}}>{errors.date.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="requirements">Please describe your project requirements</label>
                <textarea
                  id="requirements"
                  {...register('requirements', { required: 'Project requirements are required' })}
                ></textarea>
                {errors.requirements && <label className={styles.error}  style={{fontSize:'15px'}}>{errors.requirements.message}</label>}
              </div>

              <div className={`${styles.formGroup} ${styles.formgroup_protect}`}>
                <div >
                  <input
                    type="checkbox"
                    id="nda"
                    {...register('nda')}
                  />
                  <label htmlFor="nda" style={{ marginLeft: '10px' }}>I want to protect my data by signing an NDA.</label>
                  <span className='tooltip' style={{ marginBottom: '5px', marginLeft: '5px' }} title="A Non-Disclosure Agreement (NDA) is a confidentiality agreement.">&#x1F6C8;</span>
                </div>
                <style>{`
        @media (max-width: 720px) {
          .tooltip {
            display: none;
          }
        }
      `}</style>
              </div>

              <div className={styles.buttonContainer}>
                <button type="submit">Book Now</button>
              </div>
            </form>
          </div>
          <div className={styles.contactSection}>
            <div style={{ marginLeft: '0px' }}>
              <h3 >
                <span style={{ fontWeight: 'bold', fontSize: '25px', lineHeight: '1.5' }}>Free Consultation</span> - Level Up Your IT with DataSack Experts!
              </h3>

              {selectedTechnologies && <Fragment>
                <h3>Selected Technologies:</h3>
                {Object.entries(selectedTechnologies).map(([mainCategory, subCategories]) => (
                  <div key={mainCategory} className={styles.categoryWrapper}>
                    <div onClick={() => toggleCategory(mainCategory)} className={styles.mainCategory}>
                      <h2>{mainCategory}</h2>
                      <EuiButtonIcon
                        aria-label={`Toggle ${mainCategory}`}
                        iconType={expandedCategories.includes(mainCategory) ? 'arrowDown' : 'arrowRight'}
                      />
                    </div>

                    {expandedCategories.includes(mainCategory) && (
                      <div className={''}>
                        {Object.entries(subCategories).map(([subCategory, count], index) => (
                          <div key={index} className={styles.subCategory}>
                            <EuiText size='xs'>{subCategory}: {count}</EuiText>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {customTechs != undefined && customTechs.length > 0 && <Fragment>
                  <div className={styles.categoryWrapper}>
                    <div onClick={() => toggleCategory('CustomTech')} className={styles.mainCategory}>
                      <h2>Custom Techs</h2>
                      <EuiButtonIcon
                        aria-label={`Toggle CustomTech`}
                        iconType={expandedCategories.includes('CustomTech') ? 'arrowDown' : 'arrowRight'}
                      />
                    </div>
                    {customTechs.map((tech, idx) => <>
                      {expandedCategories.includes('CustomTech') && <div key={idx} className={styles.subCategory}>
                        <EuiText size='xs'>{tech.tech}: {tech.quantity}</EuiText>
                      </div>}
                    </>
                    )}
                  </div>
                </Fragment>}
              </Fragment>}
              <EuiHorizontalRule size='half' />
              <h3 className='contact-us'>Contact us</h3>
              <EuiIcon type="mobile" color='orange' />
              <a href='tel:+966560858596'>+966-560858596</a>
              <br />
              <EuiIcon type="email" color='orange' />
              <a className='email-link' href='mailto:sales@datasack.in'>sales@datasack.in</a>

              <div style={{ height: '20px' }}></div>
              <h4>Customers who trust us</h4>

              {brandLogos.map((logo, idx) => (
                <Image width={100} height={80} src={logo.brandUrl} alt={logo.alt} key={idx} style={{ width: '100px', height: 'auto', padding: '10px', cursor: 'pointer' }} />
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default BookingForm;
