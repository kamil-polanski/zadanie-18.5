class ContactForm extends React.Component{
    render() {
        return (
            <form className={ContactForm}>
                <input type={`text`} placeholder={`Imię`} value={this.props.contact.firstName}></input>
                <input type={`text`} placeholder={`Nazwisko`} value={this.props.contact.lastName}></input>
                <input type={`email`} placeholder={`Email`} value={this.props.contact.email}></input>
                <button type= {`submit` }>
                    Dodaj kontakt
                </button>
            </form>
       
        )
    };
    static propTypes =  {
        contact: React.PropTypes.object.isRequired
    };
}