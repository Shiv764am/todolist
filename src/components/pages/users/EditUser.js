import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";// to redirect the page
import axios from "axios";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: " ",
        username: " ",
        email: " ",
        phone: " ",
        website: " "
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: [e.target.value] });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();  // To stop the default behaviour of the page
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    return (

        <div className="container-sm">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit a User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <p>Enter Your name</p>
                        <input type="text" className="form-control" name="name" value={name} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <p>Enter Your Username</p>
                        <input type="text" className="form-control" name="username" value={username} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <p>Enter Your E-mail Address</p>
                        <input type="email" className="form-control" name="email" value={email} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <p>Enter Your Phone Number</p>
                        <input type="tel" className="form-control" name="phone" value={phone} onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <p>Enter Your Website Name</p>
                        <input type="text" className="form-control" name="website" value={website} onChange={e => onInputChange(e)} />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>

    );
};

export default EditUser;