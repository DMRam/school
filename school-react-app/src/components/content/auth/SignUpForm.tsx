import React from 'react'
import { Form } from 'react-bootstrap'
import { UserInterface } from '../../../interfaces/UserInterface'
interface SignUpForm {
    nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    lastNameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    user: UserInterface;
}
export const SignUpForm = ({ emailHandler, lastNameHandler, nameHandler, user }: SignUpForm) => {
    return (
        <>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="email"
                    type="string"
                    placeholder="Enter name"
                    value={user.name}
                    onChange={nameHandler}
                />
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    name="email"
                    type="string"
                    placeholder="Enter email"
                    value={user.lastName}
                    onChange={lastNameHandler}
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={user.email}
                    onChange={emailHandler}
                />
            </Form.Group>
        </>
    )
}
