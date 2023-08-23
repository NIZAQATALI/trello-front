import { MenuItem, TextField ,Box} from '@mui/material';
import React, { useState } from 'react'

export default function MuiSelect() {
    const [workSpace, setworkSpace] = useState('');
    const handleChange = (event) => {
        setworkSpace(event.target.value);
      };
  return (
    <>
      <Box sx={{width:"120px"}}>
<TextField
label="options"
select
value={workSpace}
onChange={handleChange}
fullWidth
>
<MenuItem  value="p">Pak</MenuItem>
<MenuItem  value="i">ind</MenuItem>
<MenuItem  value="s">sril</MenuItem>

</TextField>
      </Box>
 </>
  )
}
