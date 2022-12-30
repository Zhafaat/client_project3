import './BillList.css'

export default function BillList() {
    return (
        <div className="viewOrder-orderSummary-list">
            <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "18px"}}>
                <p className='heading-5'>PRODUCT</p>
                <p className='heading-5'>TOTAL</p>
            </div>
            <div className="viewOrder-orderSummary-item">
                <p className='heading-5' style={{color: "#707070"}}>Lira Earrings</p>
                <p className='heading-5' style={{color: "#707070"}}>$64</p>
            </div>
            <div className="viewOrder-orderSummary-item">
                <p className='heading-5' style={{color: "#707070"}}>Ollie Earrings</p>
                <p className='heading-5' style={{color: "#707070"}}>$10</p>
            </div>
            <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "12px"}}>
                <p className='heading-5' style={{color: "#707070"}}>Kaede Hair Pin</p>
                <p className='heading-5' style={{color: "#707070"}}>$10</p>
            </div>
            <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "10px"}}>
                <p className='heading-5'>SUBTOTAL</p>
                <p className='heading-5' style={{color: "#707070"}}>$85</p>
            </div>
            <div className="viewOrder-orderSummary-item" style={{borderBottom: "1px solid #D8D8D8", paddingBottom: "10px"}}>
                <p className='heading-5'>SHIPPING</p>
                <p className='heading-5' style={{color: "#707070"}}>Free shipping</p>
            </div>
            <div className="viewOrder-orderSummary-item">
                <p className='body-large'>TOTAL</p>
                <p className='body-large'>$85</p>
            </div>
        </div>
    )
}