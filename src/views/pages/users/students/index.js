import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateUserDrawer from './drawer';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Delete from '@mui/icons-material/Delete'
import { useForm } from 'react-hook-form';
import Edit from '@mui/icons-material/Edit'

function createData(
  id,
  name,
  username,
  phone,
  day,
  teacher,
  kurs,
  time,
  coin,
) {
  return { id, name, username, phone, day, teacher, kurs, time, coin };
}


export default function Students() {
  const [opened, setOpened] = React.useState(false);
  const [rows, setRows] = React.useState([
    createData(1, 'Frozen', '****', "+998*********", "Juft", 'Otabek', "IT", "14:00-16:00", 0),
    createData(2, 'Ice', '***', "+998*********", "Toq", 'Sardor', "EN", "16:00-18:00", 0),
    createData(3, 'Eclair', '***', "+998*********", "Juft", 'Azamat', "IT", "14:00-16:00", 0),
    createData(4, 'Cupcake', '***', "+998*********", "Toq", 'Bekmirzo', "EN", "16:00-18:00", 0),
    createData(5, 'Gingerbread', '**', "+998*********", "Juft", 'Jahongir', "IT", "14:00-16:00", 0),])

  const { register, handleSubmit, reset, setValue } = useForm()


  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };
  const handleDelete = (item) => {
    setOpened(false)
    setRows(
      rows.filter((x) => {
        return x.id !== item.id;
      })
    );
  }

  const handleValue = (item) => {
    console.log(item.day);
    setValue('name', item.name)
    setValue('username', item.username)
    setValue('phone', item.phone)
    setOpen(!open)
  }

  return (
    <>
      <CreateUserDrawer createData={createData} rows={rows} setRows={setRows} register={register} handleSubmit={handleSubmit} reset={reset} open={open} setOpen={setOpen} />
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell align="right">Phone number</TableCell>
              <TableCell align="right">Day</TableCell>
              <TableCell align="right">Teacher</TableCell>
              <TableCell align="right">Kurs</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Coin</TableCell>
              <TableCell align="right">Buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name} {row.username}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.day}</TableCell>
                <TableCell align="right">{row.teacher}</TableCell>
                <TableCell align="right">{row.kurs}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.coin}</TableCell>
                <TableCell align='right'> <React.Fragment>
                  <Button variant="outlined" style={{ color: "red", border: "1px solid red" }} onClick={handleClickOpen}>
                    <Delete />
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    opened={opened}
                    onClose={handleClose}
                    aria-labelledby="responsive-title"
                    style={{ backgroundColor: "red" }}
                  >
                    <DialogTitle id="responsive-title">
                      <h2>{`Siz Shu  o'quvchini ochirmoqchisizmi`}</h2>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ad repellendus. Magnam quos officiis perspiciatis consequuntur neque dignissimos optio quidem!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button onClick={() => handleDelete(row)} autoFocus>
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button type='button' onClick={() => handleValue(row)} sx={{ marginLeft: "15px" }} variant='outlined'><Edit /></Button>
                </React.Fragment>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
