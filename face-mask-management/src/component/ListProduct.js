import React, { useEffect, useState } from "react";
import faceMaskService from "./FaceMaskService";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function ListProduct() {
    const navigate = useNavigate();

    const [faceMaskList, setFaceMaskList] = useState([]);
    const [faceMaskUpdate, setFaceMask] = useState([]);

    const showListFaceMask = async () => {
        const rs = await faceMaskService.showList();
        setFaceMaskList(rs);
    }

    const deleteFaceMask = async () => {
        // console.log(faceMaskUpdate);
        await faceMaskService.deleteFaceMask(faceMaskUpdate.id).then(
            Swal.fire('Xoá sản phẩm thành công', '', 'success')
        );
        showListFaceMask();
    }

    useEffect(() => {
        showListFaceMask();
    }, []);
    return (
        <div>
            <h1 style={{textAlign:'center', marginTop: '20px'}}>Trang danh sách sản phẩm</h1>
            <button type="button" className="btn btn-success"style={{borderRadius:'20px 0  20px 0 '  }} onClick={() => navigate('/creatFaceMask')}>Thêm mới</button>
            <table className="table" style={{marginTop: '15px'}}>
                <thead style={{ textAlign: 'center' }} className="table-success">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Sản xuất</th>
                        <th scope="col">Màu sắc</th>
                        <th scope="col">Lưu ý</th>
                        <th scope="col">Chức năng</th>
                        {/* <th scope="col">Số lượng</th>
                        <th scope="col">Cách dùng</th> */}
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {faceMaskList.map((faceMask, index) =>
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{faceMask.name}</td>
                            <td>{faceMask.manufacture}</td>
                            <td>{faceMask.color}</td>
                            <td>{faceMask.note}</td>
                            {/* <td>{faceMask.quantity}</td>
                            <td>{faceMask.recomendUsing}</td> */}
                            <td>
                                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{borderRadius:'20px 0 20px 0'}} onClick={() => setFaceMask(faceMask)}>Xoá</button>
                                <button className="btn btn-warning" onClick={() => navigate('/updateFaceMask/' + faceMask.id)} style={{ marginLeft: '15px', borderRadius:'20px 0 20px 0'}}>Sửa</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Yêu Cầu Xoá Sản Phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn xoá sản phẩm <span style={{ color: 'red' }}>{faceMaskUpdate.name}?</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteFaceMask()} data-bs-dismiss="modal">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} export default ListProduct;