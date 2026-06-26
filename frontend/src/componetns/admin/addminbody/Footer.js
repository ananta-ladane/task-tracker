
import mysttyle from './Footer.module.css';

const Footer = () => {
    return (
        <div className={mysttyle.main}>
            <div className={mysttyle.sub1}>
                <div className={mysttyle.di1}>
                    <p><i class="bi bi-c-circle"></i> nexttask admin v4.2.0-stable</p>
                    <p><i>0</i> node: us-e1-0a</p>
                </div>
                <div className={mysttyle.di2}>
                    <p>security center</p>
                    <p>asmin apl</p>
                    <p>emergency support</p>
                </div>
            </div>
        </div>


    )
}

export default Footer;