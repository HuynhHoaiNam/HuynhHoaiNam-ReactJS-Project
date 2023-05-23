import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import faceMaskService from "./FaceMaskService";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'


function CreateFaceMask() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [faceMask, setFaceMask] = useState({})
    const [layerList, setlayerList] = useState([]);
    const showListLayer = async () => {
        const rs = await faceMaskService.showListLayer();
        setlayerList(rs);
    }
    useEffect(() => {
        showListLayer();
    }, []);

    const registerOptions = {
        name: { required: "Không được để trống" },
        manufacture: { required: "Không được để trống" },
        color: {
            required: "Không được để trống",
            minLength: {
                value: 3,
                message: "Ít nhất phải 8 kí tự"
            }
        },
        note: { required: "Không được để trống" }
    }



    const addFaceMask = async (data) => {
        await faceMaskService.addFaceMask(data)
            .then(Swal.fire('Thêm mới thành công', '', 'success'));
        navigate('/');
    }


    return (

        <form onSubmit={handleSubmit(addFaceMask)} style={{ marginTop: '15px' }}>
            <div className="mb-3">
                <h1 style={{ textAlign: 'center' }} >Trang thêm mới sản phẩm</h1>
                <img width="43" height="43" onClick={() => navigate('/')} src="https://img.icons8.com/ios-filled/50/reply-arrow.png" alt="reply-arrow" style={{ marginLeft: '200px', cursor: 'pointer' }} />
            </div>
            <div className="col-lg-6 container" style={{ position: 'relative', fontWeight:'bold' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" style={{fontWeight:'bold' }} className="form-label">Tên</label>
                    <input type="text" name="name" id="exampleInputEmail1" {...register('name', registerOptions.name)} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.name && errors.name.message}</span>
                </div>
                <div className="mb-3" style={{ marginTop: '25px', fontWeight:'bold' }}>
                    <label htmlFor="exampleInputPassword1" className="form-label">Sản xuất</label>
                    <input type="text" name="manufacture" id="exampleInputPassword1" {...register('manufacture', registerOptions.manufacture)} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.manufacture && errors.manufacture.message}</span>
                </div>
                <div className="mb-3" style={{ marginTop: '25px', fontWeight:'bold' }}>
                    <label htmlFor="exampleInputPassword2" className="form-label">Màu sắc</label>
                    <input type="text" name="color" id="exampleInputPassword2" {...register('color', registerOptions.color)} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.color && errors.color.message}</span>
                </div>
                {/* <div className="mb-3" style={{ marginTop: '25px', fontWeight:'bold' }}>
                    <label htmlFor="exampleInputPassword3" className="form-label">Lưu ý</label>
                    <input type="text" name="note" id="exampleInputPassword3" {...register('note', registerOptions.note)} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.note && errors.note.message}</span>
                </div> */}

                <div className="mb-3" style={{ marginTop: '25px', fontWeight:'bold' }}>
                    <label htmlFor="exampleInputPassword3" className="form-label">Số lớp</label>
                    <select className="form-select" {...register('note', registerOptions.note)}>
                        {layerList.map((item, index) =>
                            <option key={index}>{item.name}</option>
                        )}
                    </select>
                </div>
                <button style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '250px'
                }} className="btn btn-primary" type="submit">Thêm mới</button>
            </div>
        </form>
    )
} export default CreateFaceMask;