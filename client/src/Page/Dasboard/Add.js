import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setdate] = useState('');
    const [bio, setbio] = useState('')
    const [position, setPosition] = useState('');
    const [contact, setContact] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !bio || !date || !position || !contact) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            bio,
            date,
            position,
            contact
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" ref={textInput}
                    name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />


                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />


                <label htmlFor="bio">Bio</label>
                <input
                    id="bio"
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={e => setbio(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="contact">Contact</label>
                <input
                    id="contact"
                    type="text"
                    name="contact"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                />
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    type="text"
                    name="position"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                />

                <label htmlFor="date">date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setdate(e.target.value)}
                />


                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add