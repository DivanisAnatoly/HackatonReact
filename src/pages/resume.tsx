import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import { Loader } from "../components/common/loader";
import { CandidateDTO, ResumeDTO, SendResumeRequest } from "../contracts/resume";
import { ResumeService } from "../services/resume/resume-service";
import { Navigate, useNavigate } from "react-router-dom";

export function ResumePage() {
    const resumeService = new ResumeService();

    const [experience, setExperience] = useState('l1y');
    const [devops, setDevops] = useState('devyes');
    const [design, setDesign] = useState('designyes');
    const [serverLang, setServerLang] = useState('csharp');
    const [framework, setFramework] = useState('react');

    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");

    const [position, setPosition] = useState('0');

    const [toMain, setToMain] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePositionChange = (event: SelectChangeEvent) => {
        setPosition(event.target.value);
    };

    const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExperience((event.target as HTMLInputElement).value);
    };

    const handleDevopsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDevops((event.target as HTMLInputElement).value);
    };

    const handleDesignChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesign((event.target as HTMLInputElement).value);
    };

    const handleServerLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServerLang((event.target as HTMLInputElement).value);
    };

    const handleFrameworkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFramework((event.target as HTMLInputElement).value);
    };

    const handleChangeFio = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFio(e.target.value);
    };

    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPhone(e.target.value);
    };

    const sendResume = () => {
        let candidate: CandidateDTO = {
            name: fio,
            phone: phone
        }
        let backSkillsInfo = { ["experience"]: experience, ["devops-skills"]: devops, ["server-lang"]: serverLang };
        let frontSkillsInfo = { ["experience"]: experience, ["design-skills"]: design, ["framework"]: framework };
        let resume: ResumeDTO = {
            position: (position == "0") ? 1 : 0,
            skillsInfo: (position == "0") ? backSkillsInfo : frontSkillsInfo
        }
        let request: SendResumeRequest = {
            candidate: candidate,
            resume: resume
        }
        console.log(request);
        setLoading(true);
        resumeService.sendResume(request)
            .then((value) => {
                console.log(value.data);
                setToMain(true);
            })
            .catch(error => {
                setLoading(false);
                console.error('There was an error!', error);
            })
    };

    if (toMain) {
        return <Navigate to="/" replace={true} />
    }

    if (loading) {
        return <>
            <Loader />
        </>
    }

    const backendForm = (
        <><Grid item>
            <Box sx={{ width: "fit-content", marginX: "15px" }}>
                <FormControl>
                    <FormLabel id="experience-radio-buttons-group">Ваш опыт</FormLabel>
                    <RadioGroup
                        aria-labelledby="experience-radio-buttons-group"
                        name="experience"
                        value={experience}
                        onChange={handleExperienceChange}
                    >
                        <FormControlLabel value="l1y" control={<Radio />} label="Менее одного года" />
                        <FormControlLabel value="m1y" control={<Radio />} label="Год и более" />
                        <FormControlLabel value="2-5y" control={<Radio />} label="От 2 до 5 лет" />
                        <FormControlLabel value="6-10y" control={<Radio />} label="От 6 до 10 лет" />
                        <FormControlLabel value="m10y" control={<Radio />} label="Более 10 лет" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Grid>

            <Grid item>
                <Box sx={{ width: "fit-content", marginX: "15px" }}>
                    <FormControl>
                        <FormLabel id="devops-radio-buttons-group">Владеете ли вы навыками DevOps-а?</FormLabel>
                        <RadioGroup
                            aria-labelledby="devops-radio-buttons-group"
                            name="devops-skills"
                            value={devops}
                            onChange={handleDevopsChange}
                        >
                            <FormControlLabel value="devyes" control={<Radio />} label="Да" />
                            <FormControlLabel value="devno" control={<Radio />} label="Нет" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{ width: "fit-content", marginX: "15px" }}>
                    <FormControl>
                        <FormLabel id="server-lang-radio-buttons-group">Ваш основной серверный язык</FormLabel>
                        <RadioGroup
                            aria-labelledby="server-lang-radio-buttons-group"
                            name="server-lang"
                            value={serverLang}
                            onChange={handleServerLangChange}
                        >
                            <FormControlLabel value="csharp" control={<Radio />} label="C#" />
                            <FormControlLabel value="ruby" control={<Radio />} label="Ruby" />
                            <FormControlLabel value="go" control={<Radio />} label="Go" />
                            <FormControlLabel value="other" control={<Radio />} label="Другой" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
        </>

    );

    const frontendForm = (
        <><Grid item>
            <Box sx={{ width: "fit-content", marginX: "15px" }}>
                <FormControl>
                    <FormLabel id="experience-radio-buttons-group">Ваш опыт</FormLabel>
                    <RadioGroup
                        aria-labelledby="experience-radio-buttons-group"
                        name="experience"
                        value={experience}
                        onChange={handleExperienceChange}
                    >
                        <FormControlLabel value="l1y" control={<Radio />} label="Менее одного года" />
                        <FormControlLabel value="m1y" control={<Radio />} label="Год и более" />
                        <FormControlLabel value="2-5y" control={<Radio />} label="От 2 до 5 лет" />
                        <FormControlLabel value="6-10y" control={<Radio />} label="От 6 до 10 лет" />
                        <FormControlLabel value="m10y" control={<Radio />} label="Более 10 лет" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Grid>

            <Grid item>
                <Box sx={{ width: "fit-content", marginX: "15px" }}>
                    <FormControl>
                        <FormLabel id="design-radio-buttons-group">Владеете ли вы навыками дизайнера?</FormLabel>
                        <RadioGroup
                            aria-labelledby="design-radio-buttons-group"
                            name="design-skills"
                            value={design}
                            onChange={handleDesignChange}
                        >
                            <FormControlLabel value="designyes" control={<Radio />} label="Да" />
                            <FormControlLabel value="designno" control={<Radio />} label="Нет" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{ width: "fit-content", marginX: "15px" }}>
                    <FormControl>
                        <FormLabel id="framework-radio-buttons-group">Ваш основной framework</FormLabel>
                        <RadioGroup
                            aria-labelledby="framework-radio-buttons-group"
                            name="framework"
                            value={framework}
                            onChange={handleFrameworkChange}
                        >
                            <FormControlLabel value="react" control={<Radio />} label="React" />
                            <FormControlLabel value="angular" control={<Radio />} label="Angular" />
                            <FormControlLabel value="vue" control={<Radio />} label="Vue" />
                            <FormControlLabel value="other" control={<Radio />} label="Другой" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
        </>
    );

    return <>
        <h1>Форма отправки резюме</h1>
        <Grid container
            spacing={2}
            direction={"column"}
        >
            <Grid item>
                <Box sx={{ width: "fit-content", marginX: "15px" }}>
                    <TextField
                        id="outlined-name"
                        label="ФИО"
                        variant="outlined"
                        size={"small"}
                        onChange={handleChangeFio} />
                    <br />
                    <TextField
                        id="outlined-phone"
                        label="Телефон"
                        variant="outlined"
                        size={"small"}
                        onChange={handleChangePhone} />
                    <br />
                </Box>
                <br/>
                <Box sx={{ width: "fit-content", marginX: "15px" }}>
                    <FormControl sx={{maxWidth:"300px"}}>
                        <InputLabel id="demo-simple-select-label">Должность</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={position}
                            size={"small"}
                            label="Age"
                            onChange={handlePositionChange}
                        >
                            <MenuItem value={'0'}>Backend-разработчик</MenuItem>
                            <MenuItem value={'1'}>Frontend-разработчик</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>


            {position == "0" && <>{backendForm}</>}
            {position == "1" && <>{frontendForm}</>}

            <Grid item>
                <Button
                    type='submit'
                    variant="contained"
                    size="medium"
                    sx={{ maxWidth: "200px" }}
                    onClick={sendResume}
                >Отправить</Button>
            </Grid>
        </Grid>
    </>
}