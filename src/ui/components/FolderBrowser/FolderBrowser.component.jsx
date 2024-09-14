import { SECTIONS_BROWSER } from "../../../common/helpers/constants.helper";
import { Card } from "../Card/Card.component";
import "./FolderBrowser.component.css";

export function FolderBrowser() {
    return (
        <section className="folder-browser-section">
            <h3 className="title-folder-browser-section">
                Browse By Category
            </h3>

            <div className="container-folder-browser-section">
                {
                    SECTIONS_BROWSER.map(section => {
                        return (
                            <Card key={section.section + "folder-browser"}>
                                <img className="icon-folder-browser-section"
                                    key={section.section + "folder-browser"}
                                    src={section.urlDark}
                                    alt={section.alt} />
                            </Card>
                        );
                    })
                }
            </div>
        </section>
    );
}