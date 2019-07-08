class Contacts extends React.Component{
    render () {
        const contacts = this.props.items.map((contact) => 
             <Contact item={contact} key={contact.id}/>
        );

        return (
            <ul className={`contactsList`} >{contacts}</ul>
        );
    };
    static propTypes = {
        items: React.PropTypes.array.isRequired,
    };
};