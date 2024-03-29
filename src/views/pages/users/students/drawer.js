import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Cros from '@mui/icons-material/X';
import TextField from '@mui/material/TextField';
import Form from './Form';


export default function CreateUserDrawer({ rows, setRows, createData, register, handleSubmit, reset, open, setOpen }) {
    // const [open, setOpen] = React.useState(false);
    const [courses, setCourses] = React.useState([0]);
    const [time, setTime] = React.useState('')



    const onSubmit = (data) => {
        if (data.name == '' || data.username == '' || data.phone == '' || data.kunlar == '' || data.kurslar == '') {
            alert('hato')
        } else {
            setRows([...rows, createData(rows.length + 1, data.name, data.username, data.phone, data.kunlar, data.teacher, data.kurslar, time, 0)])
            reset({ name: '', username: '', phone: '', kunlar: '', teacher: '', kurslar: '' })
            setTime(' ')
            setOpen(!open)
            setCourses([0])
        }
    }
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



    const DrawerList = (
        <Box sx={{ width: 400, overflowX: "hidden" }} role="presentation" onSubmit={(e) => e.preventDefault()}>
            <Cros onClick={toggleDrawer(false)} sx={{ position: "relative", right: 0, cursor: "pointer" }} />
            <List fullWidth sx={{ textAlign: "center" }}>
                <Box fullWidth component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <TextField id="outlined-basic" {...register('name')} style={{ width: 300, marginTop: "20px" }} placeholder='Name' variant="outlined" />
                    <TextField id="outlined-basic" {...register('username')} style={{ width: 300, marginTop: "20px" }} placeholder='UserName' variant="outlined" />
                    <TextField id="outlined-basic" {...register('phone')} style={{ width: 300, marginTop: "20px" }} placeholder='Phone' variant="outlined" />
                    {/* Select kunlar */}
                    {courses.map(index => <Form index={index} key={index} register={register} setTime={setTime} />)}
                    <Button variant='outlined' sx={{ marginTop: "20px" }} onClick={() => setCourses(prev => [...prev, prev.length + 1])}>
                        &#43;
                    </Button><br />
                    <Button type='sumbit' variant='outlined' sx={{ marginTop: "20px", width: 200 }}>Qo`shish</Button>

                </Box>
            </List >
        </Box >
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Oquvchini qoshish</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}