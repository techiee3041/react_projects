import { useMutation } from "@tanstack/react-query"
import { Grid, Header, Form, Segment, Button } from "semantic-ui-react"
import { mutationLogin } from "./mutationLogin"
import { useNavigate } from "react-router-dom"

const Auth = () => {
    // mutates data from the api. mutation involves adding datat to the server
    const { data, mutate } = useMutation({
        mutationKey: ['login'],
        mutationFn: mutationLogin
    });

    const navigate = useNavigate();
    // handles login as a guest
    const handleLogin = async () => {
        await mutate(data);
        //storing session in the local storage
        console.log(data)
        localStorage.setItem("guest_session_id", data?.guest_session_id);
        navigate("/"); //navigate to the home page
    }
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450}}>
            <Header as='h2' color="violet" textAlign="center" >
                Welcome! Login by Registering as a Guest Below.
            </Header>
            <Form size="large">
                <Segment stacked>
                    <Button color='violet' fluid size='large' onClick={handleLogin}>Login</Button>
                </Segment>
            </Form>
        </Grid.Column>
    </Grid>
  )
}

export default Auth