const Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className={`contactItem`}>
                <img className={`contactImage`} src={`https://via.placeholder.com/85`}/>
                <p className={`contactLabel`}>Imię: {this.props.item.firstName}</p>
                <p className={`contactLabel`}>Nzwisko: {this.props.item.lastName}</p>
                <a className={`contactEmail`} href= {`mailto: ${this.props.item.email}` }>{this.props.item.email}</a>
            </div>
        )
    },
});