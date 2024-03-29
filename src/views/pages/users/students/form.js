import * as React from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import data from './data.json'


export default function Form({ index, register, setTime }) {
    const [selected, setSelected] = React.useState(null);
    const [date, setDate] = React.useState(' ')
    const record = React.useMemo(() => data.find((f) => f.title.includes(date)), [date]);
    const handleChange = (data) => {
        setDate(data)
    }

    return (
        <>
            <div key={index}>

                <FormControl fullWidth sx={{ width: 120, marginTop: "20px" }} >
                    <InputLabel  >Kunlar</InputLabel>
                    <Select  {...register(`kunlar[${index}]`)}>
                        <MenuItem value="Juft">Juft</MenuItem>
                        <MenuItem value="Toq">Toq</MenuItem>
                    </Select>
                </FormControl>
                {/* Select kurslar */}
                <FormControl fullWidth sx={{ width: 120, marginTop: "20px", marginLeft: "20px" }}   >
                    <InputLabel >Kurslar</InputLabel>
                    <Select   {...register(`kurslar[${index}]`)}>
                        {
                            data.map((x) => {
                                return (
                                    <MenuItem onClick={() => handleChange(x.title)} key={x.id} value={x.title}>{x.title}</MenuItem>)
                            })
                        }
                    </Select>
                </FormControl>

                {/* Selecto`qtuvchilar */}
                <FormControl fullWidth sx={{ width: 120, marginTop: "20px", marginLeft: "20px" }}>
                    <InputLabel >O`qtuvchilar</InputLabel>
                    <Select {...register(`teacher[${index}]`)}>
                        {
                            record?.teachers?.map((x) => (<MenuItem key={x?.id} value={x?.teacher}>{x?.teacher}</MenuItem>)
                            )
                        }
                    </Select>
                </FormControl>
                <Stack direction="row" spacing={1} sx={{ width: '100%', marginTop: "20px", marginLeft: "100px" }}>
                    {record?.id
                        ? record?.times?.map((time) => (
                            <Button type='button' key={time?.id} variant={time?.id === selected ? 'contained' : 'outlined'} onClick={() => {
                                setSelected(time?.id)
                                setTime(`${time?.from}-${time?.to}`)
                            }}>
                                {time?.from}-{time?.to}
                            </Button>
                        ))
                        : null}
                </Stack>

            </div >
        </>
    )
}
