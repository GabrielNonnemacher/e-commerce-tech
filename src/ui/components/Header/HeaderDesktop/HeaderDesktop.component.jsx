import { HeaderSubNav } from '../HeaderSubNav/HeaderSubNav.component';
import { HeaderTop } from '../HeaderTop/HeaderTop.component';
import './HeaderDesktop.component.css';

export function HeaderDesktop() {
    return (
        <section className="header-desktop">
            <HeaderTop />
            <HeaderSubNav />
        </section>
    );
}
