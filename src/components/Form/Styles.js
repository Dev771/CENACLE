import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    textfield: {
        "& .MuiInputBase-input.MuiAutocomplete-input": {
          color: "white",
        },
        "& .MuiSvgIcon-root": {
            color: 'white',
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: 'white',
            borderColor: 'white',
        },
        "& .MuiFormLabel-root": {
            color: 'white',
        },
    },
}));