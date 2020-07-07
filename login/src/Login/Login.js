import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoaderButton from "../LoaderButton";
import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";
import { Auth } from "aws-amplify";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userHasAuthenticated } = useAppContext;
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            onError(e);
        }
    }
    setIsLoading(true);
    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bssize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bssize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bssize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Login
</LoaderButton>
            </form>
        </div>
    );
}