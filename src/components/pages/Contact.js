import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact page</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="user_email">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_password">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"  placeholder="Password" autoComplete="off"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;