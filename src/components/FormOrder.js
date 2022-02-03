import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function FormPropsTextFields({handleInformation}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography>
            Shipping Information
        </Typography>
        <TextField 
          required
          id="outlined-required"
          label="First Name"
          name="first_name"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          name="last_name"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          required
          id="outlined-required"
          label="Address 1"
          name="address_1"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          label="Address 2"
          name="address_2"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          label="City"
          name="city"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          label="State"
          name="state"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          label="Postcode"
          name="postcode"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          label="Country"
          name="country"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          type="email"
          label="Email"
          name="email"
          defaultValue=""
          onChange={handleInformation}
        />
        <TextField
          id="outlined-required"
          type="tel"
          label="Phone"
          name="phone"
          defaultValue=""
          onChange={handleInformation}
        />
      </div>
    </Box>
  );
}
