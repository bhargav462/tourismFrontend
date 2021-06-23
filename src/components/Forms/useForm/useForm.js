import React,{useState,useEffect} from 'react';
import swal from 'sweetalert'
import axios from 'axios'

const useForm = (callback,validate,EnableButton,DisableButton) => {
    const [values,setValues] = useState({
        Name: "",
        place: "",
        feedback: ""
    })

    const [disabled,setDisabled] = useState(false)
    
    const [errors,setError] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e => {
      const {name} = e.target
      const {value} = e.target;
      setValues({
        ...values,
        [name] : value
      })
        // console.log(value)
    }

    const handleSubmit = e => {

        console.log(values);

        e.preventDefault();

        setError(validate(values))
        setIsSubmitting(true);

    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){

          setDisabled(true)     

          console.log('env',process.env)
          console.log("values",values)
  
          fetch(`https://major-project-back-end.herokuapp.com/feedback/form`,{
            method: 'post',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              name: values.Name,
              place: values.place,
              feedback: values.feedback
            })
          }).then(ress => {
            return ress.json()
          })
          .then((response) => {
                if(response.error){
                  return swal(response.error)
                }
                swal(`Your feedback is added successfully`)
                setValues({
                  Name: "",
                  place: "",
                  feedback: ""
                })
                setIsSubmitting(false)
          }).catch((error) => {
            console.log("error",error)
          }).finally(() => {
            setDisabled(false)
          });

        }
    },[errors])

    return {handleChange,values,handleSubmit,errors,disabled};
}

export default useForm;