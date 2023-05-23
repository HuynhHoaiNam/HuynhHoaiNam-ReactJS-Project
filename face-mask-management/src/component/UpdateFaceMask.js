import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import faceMaskService from "./FaceMaskService";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


function UpdateFaceMask() {
    const { id } = useParams()
    const [faceMask, setFaceMask] = useState({})
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const setValue = event => {
    //     setFaceMask({ ...faceMask, [event.target.name]: event.target.value })
    // }

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

    const handleError = (errors) => { }

    const setValue = event => {
        setFaceMask({ ...faceMask, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const getFaceMask = async () => {
            const next = await faceMaskService.getFaceMaskById(id)
            setFaceMask(next)
            // .catch(Swal.fire('Thông báo', 'Không tìm thấy sản phẩm', 'error'));;
        }
        getFaceMask();
    }, [faceMask.id])

    const updateCustomer = async () => {
        // console.log(faceMask);
        await faceMaskService.updateFaceMask(faceMask)
            .then(Swal.fire('Cập nhật thành công', '', 'success'));
        navigate('/');
    }

    return (
        // <form onSubmit={handleSubmit(updateCustomer, handleError)}>
        //     <div className="container">
        //         <div className="mb-3">
        //             <label htmlFor="exampleInputEmail1" className="form-label">Tên</label>
        //             <input type="text" name="name" {...register('name', registerOptions.name)} value={faceMask.name} onChange={setValue} className="form-control" />
        //             <span style={{ color: 'red' }}>{errors?.name && errors.name.message}</span>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="exampleInputPassword1" className="form-label">Sản xuất</label>
        //             <input type="text" name="manufacture" {...register('manufacture', registerOptions.manufacture)} value={faceMask.manufacture} onChange={setValue} className="form-control" />
        //             <span style={{ color: 'red' }}>{errors?.manufacture && errors.manufacture.message}</span>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="exampleInputPassword1" className="form-label">Màu sắc</label>
        //             <input type="text" name="color" {...register('color', registerOptions.color)} value={faceMask.color} onChange={setValue} className="form-control" />
        //             <span style={{ color: 'red' }}>{errors?.color && errors.color.message}</span>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="exampleInputPassword1" className="form-label">Lưu ý</label>
        //             <input type="text" name="note" {...register('note', registerOptions.note)} value={faceMask.note} onChange={setValue} className="form-control" />
        //             <span style={{ color: 'red' }}>{errors?.note && errors.note.message}</span>
        //         </div>
        //         <button className="btn btn-primary" type="submit">Click</button>
        //     </div>
        // </form>


        <form onSubmit={handleSubmit(updateCustomer, handleError)} style={{ marginTop: '15px' }}>
            <div className="mb-3">
                <h1 style={{ textAlign: 'center' }} >Trang chỉnh sửa sản phẩm</h1>
                <img width="43" height="43" onClick={() => navigate('/')} src="https://img.icons8.com/ios-filled/50/reply-arrow.png" alt="reply-arrow" style={{ marginLeft: '200px', cursor: 'pointer' }} />
            </div>
            <div className="col-lg-6 container" style={{ position: 'relative' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên</label>
                    <input type="text" name="name" {...register('name', registerOptions.name)} value={faceMask.name} onChange={setValue} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.name && errors.name.message}</span>
                </div>
                <div className="mb-3" style={{ marginTop: '25px' }}>
                    <label htmlFor="exampleInputPassword1" className="form-label">Sản xuất</label>
                    <input type="text" name="manufacture" {...register('manufacture', registerOptions.manufacture)} value={faceMask.manufacture} onChange={setValue} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.manufacture && errors.manufacture.message}</span>
                </div>
                <div className="mb-3" style={{ marginTop: '25px' }}>
                    <label htmlFor="exampleInputPassword2" className="form-label">Màu sắc</label>
                    <input type="text" name="color" {...register('color', registerOptions.color)} value={faceMask.color} onChange={setValue} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.color && errors.color.message}</span>
                </div>
                <div className="mb-3" style={{ marginTop: '25px' }}>
                    <label htmlFor="exampleInputPassword3" className="form-label">Lưu ý</label>
                    <input type="text" name="note" {...register('note', registerOptions.note)} value={faceMask.note} onChange={setValue} className="form-control" />
                    <span style={{ color: 'red' }}>{errors?.note && errors.note.message}</span>
                </div>
                <button style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '250px'
                }} className="btn btn-primary" type="submit">Cập nhật</button>
            </div>
        </form>

        // <div className="container">
        //     <div class="mb-3">
        //         <label for="exampleInputEmail1" class="form-label">Tên</label>
        //         <input type="text" name="name" onChange={setValue} class="form-control" value={faceMask.name || ''} />
        //     </div>
        //     <div class="mb-3">
        //         <label for="exampleInputPassword1" class="form-label">Tuổi</label>
        //         <input type="text" name="age" onChange={setValue} class="form-control" value={faceMask.age || ''} />
        //     </div>
        //     <div class="mb-3">
        //         <label for="exampleInputPassword1" class="form-label">Địa chỉ</label>
        //         <input type="text" name="address" onChange={setValue} class="form-control" value={faceMask.address || ''} />
        //     </div>
        //     <button className="btn btn-primary" style={{textAlign:'center'}} type="submit" onClick={() => updateCustomer()}>Click</button>
        // </div>
    )
} export default UpdateFaceMask;