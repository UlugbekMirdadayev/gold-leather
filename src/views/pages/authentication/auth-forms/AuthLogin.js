import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';

// third party
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SET_USER } from 'store/actions';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = (values) => {
    dispatch({ type: SET_USER, payload: { auth: true, ...values } });
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Kirish</Typography>
          </Box>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth error={Boolean(errors.phone)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="phone">Telefon raqamingizni kiriting</InputLabel>
          <OutlinedInput
            id="phone"
            type="phone"
            label="Telefon raqamingizni kiriting"
            inputProps={{}}
            {...register('phone', { required: true, pattern: { value: /^\+[0-9]{12}$/ } })}
          />
          {errors.phone && <FormHelperText error>{"Telefon raqami to'liq kiritilmagan"}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="password">Parol</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Parol"
            inputProps={{}}
            {...register('password', { required: true })}
          />
          {errors.password && <FormHelperText error>Parol kiritilishi shart!</FormHelperText>}
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
              Kirish
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default FirebaseLogin;
