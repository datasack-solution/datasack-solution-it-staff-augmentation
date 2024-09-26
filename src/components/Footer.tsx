import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink,
    EuiSpacer,
    EuiText,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <EuiFlexGroup id='footer-section' responsive wrap alignItems="center" justifyContent="spaceBetween">
                <EuiFlexItem grow={false} >
                    <div className={styles.footer_logo_item}>
                    <Link href={"https://www.datasack.in"}>
                        <Image width={150} height={150} src="/Icons/logo.webp" alt="Company Logo" className={styles.footer_logo} />
                    </Link>
                    <EuiFlexItem  grow={false} className={styles.footer_contact}>
                    <EuiText style={{marginTop:'-50px'}}>
                        <strong >ISO/IEC 27001:2022</strong>
                        <br />
                    </EuiText>
                    <strong style={{textAlign:'center'}}>CERTIFIED</strong>
                </EuiFlexItem>
                    </div>
                </EuiFlexItem>

                <EuiFlexItem grow={false} className={styles.footer_nav}>
                    <EuiText >
                        <p onClick={() => {
                            document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                        }} className={styles.footer_links} style={{ color: 'orange' }}>Our Offices</p>
                    </EuiText>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={false}>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_linkd} style={{ fontWeight: 'bold' }}>SAUDI ARABIA</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Building No. 2345, Ahmed Al Tamimi Al</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Malaz, Riyadh 12831, Saudi Arabia.</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>
                                <a style={{color:'#6B6A6A'}} href='tel:+966560858596'>Ph: +966-560858596</a>
                                </p>
                            </EuiText>
                        </EuiFlexItem>

                        <EuiFlexItem grow={false}>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_linkd} style={{ fontWeight: 'bold' }}>INDIA</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>No-23, Kamarajapuram-East Karur,</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Tamilnadu 639002, India.</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={() => {
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}><a style={{color:'#6B6A6A'}} href='tel:+918838885683'>Ph: +91 88388 85683</a></p>
                            </EuiText>
                        </EuiFlexItem>

                    </EuiFlexGroup>
                </EuiFlexItem>

                <EuiFlexItem  grow={false} className={styles.footer_contact}>
                    <EuiText >
                        <strong id='contact-us'>Contact Us:</strong>
                        <br />
                        <EuiLink href="mailto:sales@datasack.in" className={styles.footer_link}>sales@datasack.in</EuiLink>
                        <br />
                        <EuiLink href="tel:+966560858596" className={styles.footer_link}>+966-560858596</EuiLink>
                    </EuiText>
                </EuiFlexItem>

            </EuiFlexGroup>
            <EuiSpacer size='l' />
        </div>
    );
};

export default Footer;
