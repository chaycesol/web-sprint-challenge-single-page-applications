import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least two characters.')
    .required("Please provide your name."),
  size: yup
    .string()
    .required('You must provide a size.'),
  specialInstructions: yup
    .string()
})

export default formSchema