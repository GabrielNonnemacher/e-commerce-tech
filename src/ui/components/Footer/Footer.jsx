import { INFOS_FOOTER, SERVICES_FOOTER } from '../../../common/constants.helper';
import './Footer.component.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="logo-footer">
                    <img className="img-logo-footer"
                        src={INFOS_FOOTER.infos.image.url}
                        alt={INFOS_FOOTER.infos.image.alt} />

                    <p>
                        {INFOS_FOOTER.infos.text}
                    </p>
                </div>

                {
                    SERVICES_FOOTER.map(service => {
                        return (
                            <div key={service}
                                className="services-footer">
                                <h4>{service.title}</h4>

                                <ul>
                                    {
                                        service.sections.map((section) => {
                                            return (
                                                <li key={section}>
                                                    {section}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>);
                    })
                }

                <div className="social-medias-footer">
                    {
                        INFOS_FOOTER.socialMedias.map(info => {
                            return (
                                <a key={info.name}
                                    href={info.link}>
                                    <img className="logo-social-media-footer"
                                        src={info.image.url}
                                        alt={info.image.alt} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    );
}
