import { SECTIONS_HEADER_SUV_NAV } from '../../../../common/helpers/constants.helper';
import './HeaderSubNav.component.css';

export function HeaderSubNav() {
    function sectionsTech() {
        return SECTIONS_HEADER_SUV_NAV.map((item, index) => {
            if (index === 0) {
                return (
                    <div className="type-section"
                        key={item.url + index + "w3"}>
                        <img className="image-setion-sub-nav"
                            src={item.url}
                            alt={item.alt} />
                        {item.section}
                    </div>
                );
            } else {
                return (
                    <div key={item.url + index}
                    className="container-sections-sub-nav">
                        <div className="separation"></div>
                        <div className="type-section">
                            <img className="image-setion-sub-nav"
                                src={item.url}
                                alt={item.alt} />
                            {item.section}
                        </div>
                    </div>
                );
            }
        });
    }

    return (
        <section className="header-suv-nav">
            <div className="container-header-suv-nav"
                key="e">
                {sectionsTech()}
            </div>
        </section>
    );
}