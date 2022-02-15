import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    textfield: {
        "& .MuiInputBase-input.MuiAutocomplete-input": {
          color: "black",
        },
        "& .MuiSvgIcon-root": {
            color: 'black',
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: 'black',
            borderColor: 'black',
        },
        "& .MuiFormLabel-root": {
            color: 'black',
        },
    },
}));