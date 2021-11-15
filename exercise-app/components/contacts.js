const Contact = () => {
    return (<>
        <div className="contact-container">
            <h1 className="contact-title">Contact Us </h1>
            <form >
                <div className="form-group">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name"></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"></input>

                    </div>
                    <div>
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>

                    <button className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        </div>

    </>);
}

export default Contact;