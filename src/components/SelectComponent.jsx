
export default function SelectComponent({width, height}) {
    return (

    <select className="form-select form-select-sm" aria-label=".form-select-sm example" style={{
        width, height,
        display: 'flex'
    }}>
        <option >Shop By</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    )
}