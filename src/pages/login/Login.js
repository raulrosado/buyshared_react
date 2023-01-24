import React from "react";
import {
  Button,
  Input,
  Grid,
  Image,
  Loading,
  Text
} from "@nextui-org/react";
import { Mail } from "../../icons/Mail";
import "./Login.css";
import { UnLockIcon } from "../../icons/UnLockIcon";
import { LockIcon } from "../../icons/LockIcon";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { setUser } from "../../actions";
import { useDispatch,useSelector } from "react-redux";


function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();


  const login = () => {
    if (!loading) {
      setLoading(true)
      axios({
        method: "POST",
        url: "http://localhost:5000/v1/api/login",
        data: {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        },
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
        .then(function (response) {
          console.log(response);
          setLoading(false)
          dispatch(setUser(response.data))
          navigate('/main');
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false)
        });
    }
  };

  let button;
  if (loading) {
    button = <Loading type="points" color="currentColor" size="sm" />
  } else {
    button = <Text color="white">Entrar</Text>
  }

  return (
    <div className="centro">
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
            <Image
                width={320}
                height={180}  
                src="/images/list.jpg"
                alt="Default Image"
                objectFit="cover"
                />
        </Grid>
        <Grid xs={12}>
            <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
                <Input
                  id="email"
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  type="email"
                  placeholder="Email"
                  contentRight={<Mail fill="currentColor" />}
                />
            </Grid>
            <Grid xs={12}>
                <Input.Password
                  id="password"
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  type="password"
                  placeholder="Contraseña"
                  visibleIcon={<UnLockIcon fill="currentColor" />}
                  hiddenIcon={<LockIcon fill="currentColor" />}
                />
            </Grid>
            <Grid xs={6}>
                <Link to="/registro">No tengo cuenta!</Link>
            </Grid>
            <Grid xs={6} justify="flex-end">
                <Button auto onPress={login}>
                    {button}
                </Button>
            </Grid>
            </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Login;
