import React from 'react'
class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { span: 0 }
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = () => {
        const height = console.log(this.imageRef.current.clientHeight);
        const spans = Math.ceil(height / 150);
        this.setState({ spans })
    }
    render() {
        const { alt_description, urls } = this.props.data;
        return (
            <div style={{ gridRowEnd: `${this.span}` }}>
                <img
                    alt={alt_description}
                    src={urls.full}
                />
            </div>
        );
    }
}
export default ImageCard;