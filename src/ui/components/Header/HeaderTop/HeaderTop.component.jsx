
import { IMAGES_ICONS_HEADER, LINK_SECTION_HEADER } from '../../../../common/helpers/constants.helper';
import { InputSearchField } from '../../Input/InputSearchField/InputSearchField.component';
import './HeaderTop.component.css';

export function HeaderTop() {
    function actionsUser() {
        return IMAGES_ICONS_HEADER.map((item, index) => {
            return <div className="action-user" key={item.alt + index}>
                <img src={`assets/images/${item.url}`} alt={item.alt} />
            </div>
        });
    }

    function linksSections() {
        return LINK_SECTION_HEADER.map((item, index) => {
            return <div className="link-section" key={item + index}>{item}</div>
        })
    }

    return (
        <section className="header-top">
            <div className="container-header-top">
                <div className="logo">
                    <img src="assets/images/logo-dark.svg" alt="E-commerce logo" />
                </div>

                <div className="search">
                    <InputSearchField />
                </div>

                <div className="links-sections">
                    {linksSections()}
                </div>

                <div className="actions-user">
                    {actionsUser()}
                </div>
            </div>
        </section>
    );
}
