import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Cros from '@mui/icons-material/X';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';

const data = [
  {
    id: 1,
    title: 'EN',
    times: [
      { id: 1, from: '08:00', to: '10:00' },
      { id: 2, from: '16:00', to: '18:00' }
    ],
    teachers: [{ teacher: 'Otabek' }, { teacher: 'Sardor' }]
  },
  {
    id: 2,
    title: 'IT',
    times: [
      { id: 1, from: '14:00', to: '16:00' },
      { id: 2, from: '16:00', to: '18:00' }
    ],
    teachers: [{ teacher: 'Otabek' }, { teacher: 'Sardor' }]
  }
];

export default function CreateUserDrawer() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const record = React.useMemo(() => data.find((f) => f.title.includes(age)), [age]);

  console.log({ record });

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <Cros onClick={toggleDrawer(false)} />
      <List fullWidth>
        <Box fullWidth component="form" noValidate autoComplete="off">
          <TextField id="outlined-basic" style={{ width: 300 }} label="Name" variant="outlined" />
          <TextField id="outlined-basic" style={{ width: 300 }} label="UserName" variant="outlined" />
          <TextField id="outlined-basic" style={{ width: 300 }} label="Phone" variant="outlined" />
          <FormControl fullWidth sx={{ width: 300 }}>
            <InputLabel id="demo-simple-select-label">Kurslar</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value={'EN'}>EN</MenuItem>
            </Select>
          </FormControl>
          <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
            {record?.id
              ? record?.times?.map((time) => (
                  <Button key={time?.id} variant={time?.id === selected ? 'contained' : 'outlined'} onClick={() => setSelected(time?.id)}>
                    {time?.from}-{time?.to}
                  </Button>
                ))
              : null}
          </Stack>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
