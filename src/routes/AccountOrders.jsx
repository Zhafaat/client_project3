import './AccountOrders.css'

import { Link } from 'react-router-dom'
import AccountEmptyList from '../components/AccountEmptyList'

export default function AccountOrders() {
    return(
        <div className="accountOrders">
            <AccountEmptyList innerHTML="No order has been made yet."></AccountEmptyList>
            <table className="accountOrdersTable heading-5">
                <tbody>
                <tr>
                    <th>ORDER NUMBER</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>TOTAL</th>
                    <th>ACTIONS</th>
                </tr>
                <tr>
                    <td>7643980998990</td>
                    <td>October 8,2021</td>
                    <td>Delivered</td>
                    <td>$ 105</td>
                    <td><Link className='link' style={{color: "#A18A68"}}>View Order</Link></td>
                </tr>
                <tr>
                    <td>7643980998990</td>
                    <td>October 8,2021</td>
                    <td>Delivered</td>
                    <td>$ 105</td>
                    <td><Link className='link' style={{color: "#A18A68"}}>View Order</Link></td>

                </tr>
                <tr>
                    <td>7643980998990</td>
                    <td>October 8,2021</td>
                    <td>Delivered</td>
                    <td>$ 105</td>
                    <td><Link className='link' style={{color: "#A18A68"}}>View Order</Link></td>

                </tr>
                </tbody>
            </table>
        </div>
    )
}