import './Folder.component.css';
import { Button } from '../Button/Button.component';
import { TYPE_BUTTON_ENUM } from '../../../common/enums/typeButton.enum';


export function Folder() {
    return (
        <section className="folder-section">
            <div className="container-folder">
                <h3>
                    <span>Big Summer</span> Sale
                </h3>

                <p className="text-folder">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>

                <Button type={TYPE_BUTTON_ENUM.light} text="Shop Now" />
            </div>

            <img className="img-folder-section-1"
                src="assets/images/image-random-1.svg"
                alt="" />

            <img className="img-folder-section-4"
                src="assets/images/image-random-4.svg"
                alt="" />

            <img className="img-folder-section-5"
                src="assets/images/image-random-5.svg"
                alt="" />

            <img className="img-folder-section-2"
                src="assets/images/image-random-2.svg"
                alt="" />

            <img className="img-folder-section-3"
                src="assets/images/image-random-3.svg"
                alt="" />
        </section>
    );
}