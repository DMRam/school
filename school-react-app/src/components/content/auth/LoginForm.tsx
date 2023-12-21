import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { UserInterface } from '../../../interfaces/UserInterface';
import { SignUpForm } from './SignUpForm'
import { TextAlerts } from './TextAlerts'
interface ILoginForm {
    isLogin: boolean;
    email: string;
    password: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onSetEmailFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSetPasswordFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSetIsLoginFunction: (isLogin: boolean) => void;
    nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    lastNameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    user: UserInterface;
    onNewUserSignUp: () => void;


}
export const LoginForm = ({ email,
    emailHandler,
    handleSubmit,
    isLogin,
    lastNameHandler,
    nameHandler,
    onNewUserSignUp,
    onSetEmailFunction,
    onSetPasswordFunction,
    onSetIsLoginFunction,
    password, user }: ILoginForm) => {
    return (
        <Container>
            <div className="auth-form">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <Form onSubmit={handleSubmit}>
                    {isLogin && (
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetEmailFunction(e)}
                            />
                        </Form.Group>
                    )}
                    {!isLogin && (
                        <SignUpForm nameHandler={nameHandler}
                            lastNameHandler={lastNameHandler} emailHandler={emailHandler} user={user} />
                    )}

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetPasswordFunction(e)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Button>

                    {isLogin ? (
                        <p onClick={() => { onNewUserSignUp() }}>
                            New user? Sign Up

                        </p>
                    ) : (
                        <p onClick={() => onSetIsLoginFunction(!isLogin)}>
                            Already a user? Login
                        </p>
                    )}
                    <TextAlerts />
                </Form>
            </div>
        </Container>
    )
}
