export default function validateInfo(values){
    let errors = {};

    console.log(values.images)

    if(!values.Name.trim()){
        errors.Name = "Name is required"
    }

    if(!values.place.trim()){
        errors.place = "Place is required"
    }

    if(!values.feedback.trim()){
        errors.feedback = "feedback is required"
    }

    return errors;
}