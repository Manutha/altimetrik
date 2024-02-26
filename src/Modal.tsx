import { Button, Col, Form, FormInstance, Input, Row, Upload } from "antd";
import { FC, Ref, RefObject, useEffect } from "react";

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

interface IProps {
    selectedBrand: String,
    reference: RefObject<FormInstance<any>>

}

const Modal: FC<IProps> = ({ selectedBrand, reference }: IProps) => {

    return (
        <Form ref={reference} {...layout}>
            <Row >
                <Col span={11}>
                    <Form.Item label="Model" name="model">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item label="Location" name="location">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11}>
                    <Form.Item label="Color" name="color">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item label="No of owners" name="owners">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11}>
                    <Form.Item label="Year of manufacture" name="mfd_year">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item label="Transmission" name="transmission">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11}>
                    <Form.Item label="Insurance valid upto" name="insurance_validity">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item label="Fuel Type" name="fuel">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11}>
                    <Form.Item label="Kms" name="kms">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={11} offset={1}>
                    <Form.Item label="Photo" name="photo">
                        <Upload >
                            <Button >Click to Upload</Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>

        </Form >
    )
}

export default Modal;