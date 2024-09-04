import { TYPE_BUTTON_ENUM } from '../../../common/enums/typeButton.enum';
import { Button } from '../Button/Button.component';
import './Apresentation.component.css';

export function Apresentation() {
    return (
        <section className="apresentation-section">
            <div className="container-apresentation">
                <div className="text-apresentation">
                    <p className="before-title">
                        Pro.Beyond.
                    </p>

                    <h3>
                        <span>Iphone 14</span> Pro
                    </h3>

                    <p className="after-title">
                        Created to change everything for the better. For everyone
                    </p>

                    <Button type={TYPE_BUTTON_ENUM.light} text="Shop Now" />
                </div>

                <div className="image-apresentation">
                    <img className="image-illustration" src="assets/images/iphone-14-pro.svg"
                        alt="Imagem ilustrativa" />
                </div>
            </div>
        </section>
    );
}