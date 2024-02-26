import React, { FC, useRef } from 'react';
import './App.css';
import { brands } from './Brands';
import { Modal } from 'antd';
import ModalForm from './Modal';
import { useState } from 'react';
import { addCar } from './redux_store/carSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface Car {
  brand: string;
}

const App: FC = () => {
  const [open, isOpen] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const dispatch = useDispatch();

  const childRef = useRef<any>();

  const cars = useSelector((state: { cars: Car[] }) => state.cars);
  const handleOk = () => {
    const formValues = childRef.current.getFieldsValue();
    dispatch(addCar({ brand: selectedBrand, ...formValues }));
    isOpen(false);
  };

  return (
    <div className='container'>
      <h2>Select a brand</h2>
      <div className="brand-section">
        {brands.map((item) => {
          return (
            <div onClick={() => { isOpen(true); setSelectedBrand(item.name) }} className="brand-card">
              <img style={{ height: "150px", width: "150px" }} src={item.image} alt={item.name} />
            </div>
          )
        })}
      </div>
      <hr />
      <h4>Car Details</h4><Link to="/filter">Click here to filter</Link> <br />
      {cars.length ? cars.map(car => JSON.stringify(car)) : ""}

      <Modal destroyOnClose okText="Add" onCancel={() => isOpen(false)} onOk={handleOk} title="Add car" width={800} open={open}>
        <ModalForm reference={childRef} selectedBrand={selectedBrand} />
      </Modal>
    </div>
  )
}

export default App;