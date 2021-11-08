const Contact = () => {
    return (<>
        <h1 className="contact-title">Contact Us </h1>
        <div className="contact-container">
            <form >
                <div className="form-group">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"></input>

                    </div>
                    <div>
                        <textarea name="message" placeholder="message"></textarea>
                    </div>

                    <button>Submit</button>
                </div>
            </form>
        </div>

    </>);
}

export default Contact;