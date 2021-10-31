import React from 'react';

const Manage = (props) => {
    const { createdAt, _id, name, email, address, phone, key } = props.order;
    const { handleDelete } = props;
    return (

        <tr className='text-white'>
            <th className='text-white' scope="row">{_id}</th>
            <td className='text-white'>{createdAt}</td>
            <td className='text-white'>{name}</td>
            <td className='text-white'>{email}</td>
            <td className='text-white'>{phone}</td>
            <td className='text-white'>{address}</td>
            <button className='text-white'  ><i class="fas fa-edit"></i></button>
            <button onClick={() => handleDelete(_id)} className='ms-3 text-white'><i class="fas fa-trash-alt"></i></button>
        </tr>


    );
};

export default Manage;