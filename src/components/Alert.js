import swal from "sweetalert";

export const Alert = (title, text, icon)=>{
    swal({
        title,
        text,
        icon,
        button: "Ok",
    });
}

export const Confirm = (title, text)=>{
    return swal({
        title,
        text,
        icon:"warning",
        buttons: ["No", "Yes"],
        dangerMode: true
    })
}