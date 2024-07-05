import { SECTIONS_HEADER_SUV_NAV } from '../../../../common/constants.helper';
import './HeaderSubNav.component.css';

export function HeaderSubNav() {
    function sectionsTech() {
        return SECTIONS_HEADER_SUV_NAV.map((item, index) => {
            if (index === 0) {
                return (
                    <div className="type-section">
                        <img className="image-setion-sub-nav"
                            src={item.url}
                            alt={item.alt} />
                        {item.section}
                    </div>
                );
            } else {
                return (
                    <>
                        <div className="separation"></div>
                        <div className="type-section">
                            <img className="image-setion-sub-nav"
                                src={item.url}
                                alt={item.alt} />
                            {item.section}
                        </div>
                    </>
                );
            }
        });
    }

    return (
        <section className="header-suv-nav">
            <div className="container-header-suv-nav">
                {sectionsTech()}
            </div>
        </section>
    );
}