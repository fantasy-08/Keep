import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

function Take({ handleSubmit }) {
    
    const [info, setInfo] = useState({
        title:"",
        body:""
    })

    function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        const V = getCurrentDate('/');
        setInfo((prevDate) => {
            return {
                ...prevDate,
                [name]: value,
                time_e : V 
            };
        });
    };

    const add_a_note = () => {
        handleSubmit(info);
        setInfo({
            title: "",
            body: ""
        })
    }

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    return (
        <div className="jumbotron container pt" style={{marginTop : '1em'}}>
            <h1 className="display-4">Redifined Note Taking!</h1>
            <hr />
            <form >
                <div class="form-row align-items-center">
                    <div class="col-sm-4 my-1"></div>
                    <div class="col-sm-4 my-1">
                        <input
                            type="text"
                            className="form-control container"
                            placeholder="Title"
                            name="title"
                            value={info.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col-sm-3 my-1"></div>
                </div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Note"
                    multiline
                    rowsMax={10}
                    variant="outlined"
                    name="body"
                    value={info.body}
                    onChange={handleChange}
                />
                <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={add_a_note}
                >
                    <CreateIcon fontSize="large" />
                </IconButton>
            </form>
        </div>
    )
}

export default Take
