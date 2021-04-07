import React, { useEffect } from "react"
import {
Card,
CardHeader,
CardTitle,
CardBody,
FormGroup,
Row,
Col,
Input,
Form,
Button,
Label,
Spinner,
} from "reactstrap"
import { useFormik } from 'formik';
import * as yup from 'yup';
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { states } from './states';
import Select from "react-select";
import { toast, Zoom, Bounce } from "react-toastify"
import { useDispatch, useSelector } from "react-redux";
import { sendApplicationRequest } from "../../redux";
import { Redirect } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
  

const ApplicationForm = ({ location: { state } }) => {
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => {
    const { sendApplication: loading } = state.loadingIndicators;
    const { success: { sendApplication: success }, errors: { sendApplication: error } } = state.ajaxStatuses;
    return{ success, error, loading }
  })
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      email_address: "",
      business_name: "",
      mobile_number: "",
      cac: "",
      rc: "",
      state: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().required('Required'),
      surname: yup.string().required('Required'),
      email_address: yup.string().email('Invalid email address').required('Required'),
      business_name: yup.string().required('Required'),
      mobile_number: yup.string().required('Required'),
      cac: yup.number().required('Required'),
      rc: yup.number().required('Required'),
      state: yup.string().required('Required'),
    }),
    onSubmit: (props) => {
      let data = {};
      data.GRAND = state.grand.name;
      Object.keys(props).forEach((key) => {
        data[`${key.replace('_', ' ').toUpperCase()}`] = props[key];
      });
      console.log('I got clicked')
      dispatch(sendApplicationRequest(data));
    }
  });
  useEffect(() => {
    if(success && state) {
      toast.success(success, { transition: Zoom, position: toast.POSITION.TOP_RIGHT });
      setTimeout(() => window.open(state.grand.link, "_blank"), 3000)
    }
    if(error) {
      toast.error(error, { transition: Bounce })
    }
  }, [error, state, success])
  const formatStates = states.map((state) => ({ value: state, label: state }));

  const { errors, touched } = formik;
  if(!state) return <Redirect to="/" />
  return (
    <Card>
      <CardHeader>
        <CardTitle>Let's Get You Started</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="12 mb-1">
            <p>Answer a few questions below to help us find the right grant for your business!</p>
          </Col>
        </Row>
        <Form className="mt-2">
          <Row>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  {...formik.getFieldProps('firstname')}
                  id="nameMulti"
                  placeholder="First Name"
                  className={`form-control ${errors.firstname &&
                    touched.firstname &&
                    "is-invalid"}`}
                />
                {formik.errors.firstname && touched.firstname ? (
                  <div className="invalid-tooltip mt-25">{errors.firstname}</div>
                ) : null}
                <Label for="nameMulti">First Name</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  {...formik.getFieldProps('surname')}
                  id="lastNameMulti"
                  placeholder="Surname"
                  className={`form-control ${errors.surname &&
                    touched.surname &&
                    "is-invalid"}`}
                />
                {formik.errors.surname && touched.surname ? (
                  <div className="invalid-tooltip mt-25">{errors.surname}</div>
                ) : null}
                <Label for="lastNameMulti">Surname</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="email"
                  {...formik.getFieldProps('email_address')}
                  id="cityMulti"
                  placeholder="Email Address"
                  className={`form-control ${errors.email_address &&
                    touched.email_address &&
                    "is-invalid"}`}
                />
                {formik.errors.email_address && touched.email_address ? (
                  <div className="invalid-tooltip mt-25">{errors.email_address}</div>
                ) : null}
                <Label for="cityMulti">Email Address</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  {...formik.getFieldProps('business_name')}
                  id="CompanyMulti"
                  placeholder="Business Name"
                  className={`form-control ${errors.business_name &&
                    touched.business_name &&
                    "is-invalid"}`}
                />
                {formik.errors.business_name && touched.business_name ? (
                  <div className="invalid-tooltip mt-25">{errors.business_name}</div>
                ) : null}
                <Label for="CompanyMulti">Business Name</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="number"
                  {...formik.getFieldProps('rc')}
                  id="rc"
                  placeholder="RC Number"
                  className={`form-control ${errors.rc &&
                    touched.rc &&
                    "is-invalid"}`}
                />
                {formik.errors.rc && touched.rc ? (
                  <div className="invalid-tooltip mt-25">{errors.surcrname}</div>
                ) : null}
                <Label for="rc">RC Number</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="number"
                  {...formik.getFieldProps('cac')}
                  id="cac"
                  placeholder="CAC Number"
                  className={`form-control ${errors.cac &&
                    touched.cac &&
                    "is-invalid"}`}
                />
                {formik.errors.cac && touched.cac ? (
                  <div className="invalid-tooltip mt-25">{errors.cac}</div>
                ) : null}
                <Label for="cac">CAC Number</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="number"
                  {...formik.getFieldProps('mobile_number')}
                  id="mobile"
                  placeholder="Mobile Number"
                  className={`form-control ${errors.mobile_number &&
                    touched.mobile_number &&
                    "is-invalid"}`}
                />
                {formik.errors.mobile_number && touched.mobile_number ? (
                  <div className="invalid-tooltip mt-25">{errors.mobile_number}</div>
                ) : null}
                <Label for="mobile">Mobile Number</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
              <Select
                className="React"
                classNamePrefix="select"
                name="color"
                options={formatStates}
                value={formatStates.find((state) => state === formik.values.state)}
                onChange={(e) => formik.setFieldValue('state', e.value)}
              />
                {formik.errors.state && touched.state ? (
                  <div className="invalid-tooltip mt-25">{errors.state}</div>
                ) : null}
                <Label for="state">State</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="form-label-group">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1 d-flex align-items-center"
                  onClick={formik.handleSubmit}
                >
                  {loading && <Spinner color="white" size="sm" />}
                  <span className="ml-1">Next</span>
                </Button.Ripple>
                <Button.Ripple
                  outline
                  color="warning"
                  type="reset"
                  className="mb-1"
                  onClick={formik.resetForm}
                >
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default ApplicationForm
