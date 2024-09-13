import { SECTIONS_BROWSER } from "../../../common/helpers/constants.helper";
import { Card } from "../Card/Card.component";
import "./FolderBrowser.component.css"

export function FolderBrowser() {
    return (
        <section className="folder-browser-section">
            {
                SECTIONS_BROWSER.map(section => {
                    return (
                        <Card>
                            <img key={section.section + "folder-browser"} src={section.url} alt={section.alt} />
                        </Card>
                    );
                })
            }
        </section>
    );
}