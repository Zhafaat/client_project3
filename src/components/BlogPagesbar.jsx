import './BlogPagesbar.css'

export default function BlogPagesbar(props) {
    return(
        <div className="blogPagesbar" style={{backgroundColor: props.background, borderColor: props.border, color: props.color}}>
            <p className="body-medium">{props.inner}</p>
        </div>
    )
}