import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import "../css/TextField.css"
import icon1 from "../icons/phone.svg"
import icon2 from "../icons/user.svg"

const UserInfo = () => {
    return (
        <Form>
            <Form.Label className="reBorder" ></Form.Label>
            <Form.Label className="recoverPass" >Хэрэглэгчийн мэдээлэл</Form.Label>
            <Form.Group className="mb-2">
                <InputGroup className="mb-2" >
                    <Form.Control className="userSize ps-5" type="userName" aria-label=" Name" placeholder="Хэрэглэгчийн нэр" />
                    {/* <Form.Control className="formSize ps-5" type="password" controlId="formPassword" placeholder="Утасны дугаар" /> */}
                    <InputGroup.Text className="leftIcons userBack"><a href=""><img src={icon2} alt="" /></a></InputGroup.Text>
                    <InputGroup.Text className="rightIcons"><a href=""></a></InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-2 "  >
                <InputGroup className="mb-2" >
                    <Form.Control className="userSize ps-5" type="phoneNumber" placeholder="Утасны дугаар" />
                    <InputGroup.Text className="leftIcons userBack"><a href=""><img src={icon1} alt="" /></a></InputGroup.Text>
                    <InputGroup.Text className="rightIcons"><a href=""></a></InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </Form >
    )
}



export default UserInfo;