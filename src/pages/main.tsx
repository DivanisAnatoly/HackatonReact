import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MainPage() {
    const navigate = useNavigate();

    return <>
        <h1>Joy Dev Hackaton</h1>
        <h2>Оценка резюме</h2>
        <h3>Толик(т.е. я) был очень уставшим, когда это писал. Надеемся на ваше понимание.</h3>

        <Button
            variant="contained"
            size="medium"
            sx={{ maxWidth: "200px" }}
            onClick={()=>navigate("/resume")}
        >Заполнить форму</Button>
    </>
}