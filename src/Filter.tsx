import React, { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Checkbox, Col, Form, Radio, Row, Select, Table, Tag } from 'antd';

interface Car {
  brand: string;
  model: string;
  location: string;
  fuel: string;
  owners: number;
  transmission: string;
  kms: number;
}

const columns = [
  {
    title: 'Brand',
    dataIndex: 'brand',
  },
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Location',
    dataIndex: 'location',
  },
  {
    title: 'Fuel Type',
    dataIndex: 'fuel',
  },
  {
    title: 'Owners',
    dataIndex: 'owners',
  },
  {
    title: 'Transmission',
    dataIndex: 'transmission',
  },
  {
    title: 'Kms',
    dataIndex: 'kms',
  },
];

const Filter: FC = () => {
  const [filteredData, setFilteredData] = useState<Car[]>([]);
  const ref = useRef();
  const cars = useSelector((state: any) => state.cars);

  const handleSearch = () => {
    const filters = ref.current?.getFieldsValue();
    const response = cars.filter(
      (item : any) =>
        (filters.model ? item.model === filters.model : true) &&
        (filters.fuel ? item.fuel === filters.fuel : true) &&
        (filters.location ? item.location === filters.location : true) &&
        (filters.owners ? item.owners === filters.owners : true) &&
        (filters.brand.includes(item.brand))
    );
    setFilteredData(response);
  };

  const resetForm = () => {
    ref.current?.resetFields();
    setFilteredData([]);
  };

  const removeDuplicates = (key: keyof Car) => {
    return [...new Set(cars.map((car:any) => car[key]))];
  };

  return (
    <>
      <Form ref={ref}>
        <Row>
          <Col span={12}>
            <Form.Item label="Location" name="location">
              <Select>
                {removeDuplicates('location').map((car, i) => (
                  <Select.Option key={i} value={car}>
                    {car}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="Body Type" name="model">
              <Select showSearch>
                {removeDuplicates('model').map((car, i) => (
                  <Select.Option key={i} value={car}>
                    {car}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item label="Brand" name="brand">
              <Checkbox.Group options={removeDuplicates('brand')} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item label="Owner" name="owners">
              <Radio.Group options={removeDuplicates('owners')} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item label="Budget" name="budget">
              <Tag>Less than 2L</Tag>
              <Tag>2L - 4L</Tag>
              <Tag>4L - 6L</Tag>
              <Tag>More than 6L</Tag>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item label="Fuel Type" name="fuel">
              <Radio.Group options={removeDuplicates('fuel')} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item label="Transmission" name="transmission">
              <Radio.Group options={removeDuplicates('transmission')} />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button onClick={resetForm}>Clear filter</Button>
        <Table dataSource={filteredData} columns={columns} />
      </Form>
    </>
  );
};

export default Filter;