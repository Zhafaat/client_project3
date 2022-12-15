import './AditionalInformation.css'

export default function AditionalInformation() {
    return (
        <div className="aditionalInformation">
            <div className="aditionalInformation-container">
                <p className="aditionalInformationName heading-5">Weight:</p>
                <p className="aditionalInformationValue heading-5">0.3 kg</p>
            </div>
            <div className="aditionalInformation-container">
                <p className="aditionalInformationName heading-5">Dimentions:</p>
                <p className="aditionalInformationValue heading-5">15 x 10 x 1 cm</p>
            </div>
            <div className="aditionalInformation-container">
                <p className="aditionalInformationName heading-5">Colours:</p>
                <p className="aditionalInformationValue heading-5">Black, Browns, White</p>
            </div>
            <div className="aditionalInformation-container">
                <p className="aditionalInformationName heading-5">Material:</p>
                <p className="aditionalInformationValue heading-5">Metal</p>
            </div>
        </div>
    )
}