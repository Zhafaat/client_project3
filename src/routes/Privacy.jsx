import './Privacy.css'

export default function Privacy() {
    return (
        <div className="privacy">
            <div className="privacy-top">
                <p className="heading-1">Privacy Policy</p>
                <p className="heading-5">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            </div>
            <div className="privacy-bottom">
                <div className="privacy-security">
                    <p className="privacyContentStyle">Security</p>
                    <p className="heading-5">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.</p>
                </div>
                <div className="privacy-cookies">
                    <p className="privacyContentStyle">Cookies</p>
                    <ul className="heading-5">
                        <li>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
                        <li>Nam fringilla molestie velit, eget pellentesque risus scelerisque a</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}