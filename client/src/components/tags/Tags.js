import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {createTag} from '../../actions/Tag';

const Tags = () => {
    const [tagData, setTagData] = useState({ name: '', tagtype: '', createdBy: '', CreatorsEmailId: ''});
    const dispatch = useDispatch();

    const clear = () => {
        setTagData({ name: '', tagtype: '', createdBy: '', CreatorsEmailId: ''});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createTag({...tagData}));
        clear();
    }

    return (
        <form autoComplete='off' noValidate onSubmit={handleSubmit} style={{ marginTop: '50vh' }}>
            <input type='text' placeholder='Enter Name' onChange={(e) => setTagData({...tagData, name: e.target.value})} />
            <input type='text'  placeholder='Enter TagType' onChange={(e) => setTagData({...tagData, tagtype: e.target.value})} />
            <button type='Submit'>Create</button>
        </form>
    )
}

export default Tags;